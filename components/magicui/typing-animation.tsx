"use client";

import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  className?: string;
  duration?: number;
}

export default function TypingAnimation({
  text,
  className,
  duration = 50,
}: TypingAnimationProps) {
  // Server-render the full text so it is visible to crawlers and without JS;
  // the typing effect restarts from empty once hydrated.
  const [displayed, setDisplayed] = useState(text);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, duration);
    return () => clearInterval(interval);
  }, [text, duration]);

  return <span className={className}>{displayed}</span>;
}
