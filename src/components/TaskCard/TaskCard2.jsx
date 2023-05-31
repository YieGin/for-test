import React from 'react';
import './TaskCard.css'; 
import '../../App.css';

const TaskCard2 = () => {
  const totalTasks = 5;  
  const completedTasks = 5;
  const taskDuration = 0; 
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 100;

  return (
    <div className="taskCard" style={{
        background: progress === 100 ? "linear-gradient(220deg, #f5f5f5 10%, #ffffff 120%)" : "linear-gradient(120deg, #eed5d2ca 0%, #f9f0efdb 190%)"
    }}>
      <div className="taskCard-content">
        <div className="taskCard-titleContainer">
          <div className="taskCard-title">
          Orders
          </div>
          <div className="taskCard-duration">
            {`∼${taskDuration}min left`}
          </div>
        </div>
        <div className="taskCard-status">
        {totalTasks > 0 ? `${completedTasks}/${totalTasks} completed.` : "Nothing to do."}
        </div>
        <div className="taskCard-progress">
          <div 
            className="taskCard-progress-bar" 
            style={{
                width: `${progress}%`,
                borderRadius: progress === 100 ? "0.375rem 0.375rem 0.375rem 0.375rem" : "0.375rem 0 0 0.375rem"
            }}
          >
            <div className="taskCard-progress-separators">
              {totalTasks > 1 ? [...Array(totalTasks - 1)].map((_, i) => (
                <div className="progressBar-separator" key={i} style={{left: `${((i + 1) / completedTasks) * 100}%`, backgroundColor: progress === 100 ? "#fcfcfc" : "#f2e9e9"}}></div>
              )) : []}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard2;