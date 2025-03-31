import { useMemo } from "react";
import { useSelector } from "react-redux";
import GamutDisplay from "./components/GamutDisplay";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const samplesKey = useSelector((state) => state.graph.samplesKey);
  const userColors = useSelector((state) => state.graph.userColors);
  const selectedColorSpaces = useSelector(
    (state) => state.graph.visibleColorSpaces
  );

  const graphs = useMemo(() => {
    return selectedColorSpaces.map((mode) => {
      return (
        <GamutDisplay
          key={mode}
          mode={mode}
          colors={userColors}
          samples={samplesKey}
        />
      );
    });
  }, [selectedColorSpaces, userColors, samplesKey]);

  return (
    <>
      <Sidebar />
      <div id="content">
        <div id="scroll-area">
          <span>Scroll</span>
        </div>
        <div>
          <div id="graph-container">{graphs}</div>
        </div>
      </div>
    </>
  );
}

export default App;
