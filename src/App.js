import "./App.css";
import logo from "./logo_1.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div class="icons d-flex d-md-block" title="Boua's Logo">
            <span class="icon-right">﹆</span>
            <span class="icon-middle">﹆</span>
            <span class="icon-left">﹆</span>
            <span class="icon-bottom">﹆</span>
          </div>
        </header>
        <main>
          <Dictionary defaultKeyword="yoga" />
        </main>
        <footer className="App-footer">
          <div className="footer">
            {/* <img src={logo} className="footer-logo img-fluid " alt="logo" /> */}
            <img
              src={logo}
              className="App-logo footer-logo img-fluid "
              alt="logo"
            />
            <small>
              Coded by <em>KonBo</em> open-sourced on{" "}
              <a href="https://github.com/KonsBo/dictionary-project">Github</a>{" "}
              and hosted on{" "}
              <a href="https://app-dictionary-project.netlify.app/">Netlify</a>
            </small>
          </div>
        </footer>
      </div>
    </div>
  );
}
