import React,{useState} from 'react'
import './App.css';

function App() {
   // State to manage the theme
  const [isDarkTheme,setisDarkTheme] = useState(true)

   // Function to toggle the theme
  // const toggleTheme = ()=>{
  //   setisDarkTheme(!isDarkTheme)
  // }

  // Set the background color based on the theme
  const backgroundColor1 = isDarkTheme ? "black" : "white";
 

  return (
    <div className="App" style={{backgroundColor : backgroundColor1  , height : "100vh"}}>
      {/* <button onClick={toggleTheme}>Switch Theme</button> */}
      <button onClick={()=>setisDarkTheme(!isDarkTheme)}>Switch Theme</button>
    </div>
  );
}

export default App;
