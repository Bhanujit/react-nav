import './App.css';
function App() {
  return (
    <div className="App">
     <div className="navbar">
       <div className="logo">
         <h1 className="white-text">D-text</h1>
       </div>
       <ul>
         <li>Home</li>
         <li>About</li>
         <li>Contact us</li>
       </ul>
       <div className="search-bar">
         <input type="text" className="search-box"/>
         <button className="btn">Search</button>
       </div>
       
       
     </div>
    </div>
  );
}

export default App;
