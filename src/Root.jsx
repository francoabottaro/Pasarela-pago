import "./CSS/App.css";
import "./CSS/Resposive.css";
/*Pages*/
import Home from "./pages/Home";
import Contact from "./pages/Contact";
/*Librery*/
import { Route, Routes, /*Link,*/ BrowserRouter } from "react-router-dom";
/*Components */
import Header from "./components/Header";
import Footer from "./components/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      {/*  */}
      <Header />

      {/*  */}
      <main>
        {/* Display routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/*  */}
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
