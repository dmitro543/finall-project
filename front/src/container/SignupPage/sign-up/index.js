import React from "react";
function App() {
  return <div className="child">
       <div className="back">
           <div className="hello">Hello!</div>
           <div className="bank">Welcome to bank app</div>
           <div className="buttons">
              <button className="sign"><a>Sign Up</a></button>
              <button className="sign-out"><a>Sign In</a></button>
           </div>
       </div>
    </div>;
} 

export default App();