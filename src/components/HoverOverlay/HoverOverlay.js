import React from 'react';
import './HoverOverlay.css';

const HoverOverlay = ({ isHovered }) => (
    <div className={`HoverOverlay ${isHovered ? 'isHovered' : ''}`}></div>
);

export default HoverOverlay;
