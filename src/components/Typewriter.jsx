import React, { useEffect, useState } from 'react';

const Typewriter = () => {
    const [displayedText, setDisplayedText] = useState('');
    const fullText = "I'm Yurey, a Web Developer...";
    const typingSpeed = 50; // Typing speed in milliseconds

    useEffect(() => {
        let index = 0;

        const type = () => {
            if (index < fullText.length) {
                setDisplayedText(fullText.slice(0, index + 1)); // Display text up to the current index
                index++;
                setTimeout(type, typingSpeed); // Set the next typing event
            }
        };
        type(); // Start typing
    }, []); // Empty dependency array ensures it runs only once on mount

    return (
        <p className="font-mono font-semibold text-3xl text-dark-blue" 
           style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
            {displayedText}
        </p>
    );
};

export default Typewriter;
