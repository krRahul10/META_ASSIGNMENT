import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import TextPage from "./Components/textPage/TextPage";
import Class from "./Components/class/Class";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TextPage/>
      <Class/>
      <Footer/>
    </div>
  );
}

export default App;
