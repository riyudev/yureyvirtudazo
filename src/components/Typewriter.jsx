import React, { useEffect, useState } from "react";

const Typewriter = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "I'm Yurey and I Love to:";
  const typingSpeed = 50;

  useEffect(() => {
    let index = 0;

    const type = () => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
        setTimeout(type, typingSpeed);
      }
    };
    type();
  }, []);
  return (
    <p
      className="font-mono font-semibold text-2xl md:text-3xl text-slate-900 dark:text-sky-50 text-center md:text-start"
      style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
    >
      {displayedText}
    </p>
  );
};

export default Typewriter;
