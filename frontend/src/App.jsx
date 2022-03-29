import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center p-5">
        <div className="col-md-10">
          <img src={logo} className="App-logo" alt="logo" width={50} />
          <h3>Users React JS</h3>
          <User />
        </div>
      </div>
    </div>
  );
}

export default App;
