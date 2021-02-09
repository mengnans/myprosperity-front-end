import logo from "./full_logo_header.png";
import "./App.css";
import { MockJsonResult } from "./App.const";

const App = () => {
  console.log(MockJsonResult);
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-container">
          <div className="d-flex align-items-center">
            <i className="fa fa-fw fa-info-circle"></i> Start coding here
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
