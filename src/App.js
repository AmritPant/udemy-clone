import "./App.scss";
import Header from "./Components/Header/Header";
import SectionImage from "./Components/SectionImage/SectionImage";
import Courses from "./Components/Courses/Courses";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Section Image*/}
      <SectionImage />
      {/* Courses */}
      <Courses />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
