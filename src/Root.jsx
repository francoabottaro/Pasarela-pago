import "./CSS/App.css";
import "./CSS/Resposive.css";
/*Pages*/
import Home from "./pages/Home";
import Contact from "./pages/Contact";
/*Librery*/
import { Route, Routes, BrowserRouter } from "react-router-dom";
/*Components */
import Header from "./components/Header";
import Footer from "./components/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      {/*Componet*/}
      <Header />

      {/* Pages */}
      <main>
        {/* Display routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* component */}
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
