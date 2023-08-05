import "./App.css";
import logo from "./logo_1.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid " alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="yoga" />
        </main>
        <footer className="App-footer">
          <div className="footer">
            <img src={logo} className="footer-logo img-fluid " alt="logo" />
            <small>
              Coded by <em>KonBo</em>
            </small>
          </div>
        </footer>
      </div>
    </div>
  );
}
