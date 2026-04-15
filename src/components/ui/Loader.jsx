import React from 'react';
import './Loader.css';

const Loader = ({ fullScreen = true }) => {
  return (
    <div className={fullScreen ? "fixed inset-0 z-[9999] flex items-center justify-center bg-background/50 backdrop-blur-lg border-b border-white/20" : "flex items-center justify-center w-full min-h-[50vh]"}>
      <div className="custom-loader">
        <div className="text"><span>izone</span></div>
        <div className="text"><span>izone</span></div>
        <div className="text"><span>izone</span></div>
        <div className="text"><span>izone</span></div>
        <div className="text"><span>izone</span></div>
        <div className="text"><span>izone</span></div>
        <div className="text"><span>izone</span></div>
        <div className="text"><span>izone</span></div>
        <div className="text"><span>izone</span></div>
        <div className="line" />
      </div>
    </div>
  );
};

export default Loader;
