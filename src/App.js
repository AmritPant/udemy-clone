import "./App.scss";
import Header from "./Components/Header/Header";
import SectionImage from "./Components/SectionImage/SectionImage";
import Courses from "./Components/Courses/Courses";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Section Image*/}
      <SectionImage />
      {/* Courses */}
      <Courses />
    </div>
  );
}

export default App;
