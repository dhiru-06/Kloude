import image from './assests/image.png';
import './App.css';
import {Dark} from './darkmode';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <h1>
         Under Construction
        </h1>
        <p>
          Our Website is currently undergoing scheduled maintenance.
          We should be back shortly. Thank you for your patience
        </p>
        <input className="input" type="email" placeholder="Enter your email" id="email" name="email" ></input>
        <input type="submit" className="btn" value="Submit"></input>
        <p className="bottom">
          Sign up now to get early notification of our launch date!
        </p>
        </div>
        <div>
        <img src={image} className="App-logo" alt="logo" />
        </div>
        
      </header>
    </div>
  );
}

export default App;
