import './App.css';
import Navibar from "./Component/Navibar/Navibar";
import Content from './Component/Content/Content';
import Slider from './Component/Slider/Slider';

function App() {
  return (
    <div>
      <Navibar />
      <Slider />
      <ul></ul>
      <Content />
    </div>
  );
}

export default App;
