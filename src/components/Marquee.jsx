import React from 'react';
import './Marquee.css';

const Marquee = () => {
  const text = "Документ оновлено о 15:36 | 21.03.2026 • Документ діє під час воєнного стану • ";
  return (
    <div className="marquee-wrapper">
      <div className="marquee-content">
        <span>{text}</span><span>{text}</span><span>{text}</span><span>{text}</span>
      </div>
    </div>
  );
};

export default Marquee;