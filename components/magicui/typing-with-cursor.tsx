"use client";

import { useEffect, useState } from "react";

interface TypingWithCursorProps {
  text: string;
  speed?: number;
  cursorStyle?: string;
  showCursor?: boolean;
}

export default function TypingWithCursor({
  text,
  speed = 35,
  cursorStyle = "|",
  showCursor = true,
}: TypingWithCursorProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayed}
      {showCursor && !done && (
        <span className="inline-block animate-pulse">{cursorStyle}</span>
      )}
    </span>
  );
}
