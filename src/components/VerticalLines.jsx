import React from 'react';
import '../styles/global.css';

function VerticalLines() {

    return (
        <div className="grid-bg">
            {Array.from({ length: 11 }).map((_, i) => (
                <div key={i} className="grid-col" />
            ))}
        </div>
    )
}

export default VerticalLines;