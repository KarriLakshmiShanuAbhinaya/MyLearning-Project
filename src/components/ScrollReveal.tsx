'use client';
import { useRef, useState, useEffect, HTMLAttributes } from 'react';

export function ScrollReveal({ 
  children, 
  className = '', 
  baseDelay = 0, 
  ...props 
}: { 
  children: React.ReactNode;
  className?: string;
  baseDelay?: number;
} & HTMLAttributes<HTMLDivElement>) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setIsVisible(entry.isIntersecting);
        });
      },
      // Trigger when 10% of the element is visible, and start fading out slightly before it completely leaves the bottom.
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  const transitionClass = `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;
  const mergedClass = className ? `${transitionClass} ${className}` : transitionClass;

  return (
    <div
      ref={domRef}
      className={mergedClass}
      style={{ transitionDelay: isVisible ? `${baseDelay}ms` : '0ms', ...props.style }}
      {...props}
    >
      {children}
    </div>
  );
}
