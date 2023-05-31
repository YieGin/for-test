import React from 'react';
import './ContainerBox.css';
import TaskCard from '../TaskCard/TaskCard';
import TaskCard2 from '../TaskCard/TaskCard2'; 
import TaskCard3 from '../TaskCard/TaskCard3'; 
import { BsFire } from 'react-icons/bs'; 

function ContainerBox() {
  return (
    <div className="containerBox">
        <div className="header">
            <h3 className="workflow-title">Workflow</h3>
            <svg width="0" height="0">
                <radialGradient
                    id="gradient"
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fx="50%"
                    fy="50%"
                >
                    <stop offset="0%" style={{stopColor: "black", stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: "rgb(70, 70, 70)", stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: "rgb(5, 5, 5)", stopOpacity: 1}} />
                </radialGradient>
            </svg>
            <BsFire size={32} color="url(#gradient)" />
        </div>
        <TaskCard />
        <TaskCard2 />
        <TaskCard3 />
    </div>
  );
}

export default ContainerBox;