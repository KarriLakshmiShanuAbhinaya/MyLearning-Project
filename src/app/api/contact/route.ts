import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const client = await pool.connect();
    const query = `
      INSERT INTO contact_submissions (name, email, phone, company, subject, message)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;
    const values = [name, email, phone, company, subject, message];
    
    const res = await client.query(query, values);
    client.release();
    
    console.log('Submission saved through API Route:', res.rows[0]);
    return NextResponse.json(
      { success: 'Thank you! Your message has been received by our backend and saved to the database.' },
      { status: 201 }
    );
  } catch (err) {
    console.error('API Route Error:', err);
    return NextResponse.json(
      { error: 'Internal Server Error. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM contact_submissions ORDER BY created_at DESC');
    client.release();

    return NextResponse.json(result.rows);
  } catch (err) {
    console.error('API GET Error:', err);
    return NextResponse.json(
      { error: 'Failed to fetch contact submissions.' },
      { status: 500 }
    );
  }
}
