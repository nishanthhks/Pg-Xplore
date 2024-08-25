import "./styles/index.scss";
import "./styles/layout.scss";

import NavBar from "./components/NavBar/NavBar";
import Heading from "./components/Heading/Heading";
import SearchBar from "./components/SearchBar/SearchBar,";

function App() {
  return (
    <>
      <div className="layout">
        <div className="left"></div>
        <div className="right"></div>
        <NavBar />
        <div
          style={{
            position: "relative",
            zIndex: "10",
            display: "flex",
            flexDirection: "column",
          }}>
          <Heading />
          <SearchBar />
        </div>
      </div>
    </>
  );
}

export default App;
