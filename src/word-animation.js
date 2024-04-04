import React, { useState, useEffect } from 'react';

const words = ["Ekshu", " Insulators"];

const WordAnimation = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isAnimationActive, setIsAnimationActive] = useState(true);
    const isMobile = window.innerWidth <= 768;
    const containerStyle = {
        display: isMobile ? 'none' : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '270px',
    };

    const companyName = {
        color: 'rgb(60, 179, 113)',
        paddingTop: '6px',
        textTransform: 'uppercase',
    };

    useEffect(() => {
        if (!isAnimationActive) {
            return; // Stop the animation if it's no longer active.
        }

        const interval = setInterval(() => {
            const currentWord = words[currentWordIndex];
            if (currentLetterIndex < currentWord.length) {
                setDisplayedText((prevText) => prevText + currentWord[currentLetterIndex]);
                setCurrentLetterIndex((prevIndex) => prevIndex + 1);
            } else {
                setCurrentLetterIndex(0);
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                if (currentWordIndex === words.length - 1) {
                    setIsAnimationActive(false); // Stop the animation after one cycle
                }
            }
        }, 200);

        return () => clearInterval(interval);
    }, [currentWordIndex, currentLetterIndex, isAnimationActive]);

    return (
        <div style={containerStyle}>
            <h3 style={companyName} className="word-animation">
                {displayedText}
            </h3>
        </div>
    );
};

export default WordAnimation;








