import React from "react";
 
const Logo = ({ isCollapsed }) => {
  return (
    <div className="logo-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30" 
        viewBox="0 0 48 48"
        fill="none"
      >
        <path d="M0 0H48V48" fill="white" />
      </svg>
 
      
    </div>
  );
};
 
export default Logo;