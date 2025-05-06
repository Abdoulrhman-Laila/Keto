import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/1-Header/Header";
import Home from "./Components/2-Home/Home";
import About from "./Components/3-About/About";
import Ourroom from "./Components/4-Ourroom/Ourroom";
import Gallery from "./Components/5-Gallery/Gallery";
import Blog from "./Components/6-Blog/Blog";
import Contact from "./Components/7-Contact/Contact";
import Footer from "./Components/8-Footer/Footer";
import Descrption from "./Components/Descrption/Descrption";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Home />
            <About/>
            <Ourroom/>
            <Gallery/>
            <Blog/>
            <Contact/>
            <Footer />
          </>
        } />

        <Route path="/about" element={
          <>
            <Header />
            <About />
            <Footer />
          </>
        } />
        <Route path="/ourroom" element={
          <>
            <Header />
            <Ourroom />
            <Footer />
          </>
        } />
        <Route path="/gallery" element={
          <>
            <Header />
            <Gallery />
            <Footer />
          </>
        } />
        <Route path="/blog" element={
          <>
            <Header />
            <Blog />
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Header />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/descrption" element={<Descrption />} />
      </Routes>
    </Router>
  );
}

export default App;