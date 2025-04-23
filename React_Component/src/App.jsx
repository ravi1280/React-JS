
import './App.css'
import ExampleText from "./Component/ExampleText";
import Card from "./Component/TilCard";
import DragCards from "./Component/DragCard";
import HScroll from "./Component/HorizontalScroll";
import DropDown from "./Component/Dropdown";
import Links from "./Component/Link";
import SnackBar from "./Component/SnackBar";
import Theme from "./Component/Theme";
import BottomSheet from "./Component/BottomSheet";


function App() {


  return (
    <>
    <ExampleText />
      <Card />
      <DragCards/>
      <HScroll/>
      <DropDown/>
      <Links/>
      <SnackBar/>
      <Theme/>
      <BottomSheet/>
    </>
  );
}

export default App
