import "./CSS/App.css";
import "./CSS/Resposive.css";
/*Pages*/
import Home from "./pages/Home";
import Contact from "./pages/Contact";

/*Librery*/
import { Route, Routes, /*Link,*/ BrowserRouter } from "react-router-dom";
const Router = () => {
  return (
    <BrowserRouter>
      <header>
        {/* <Link to={<Home />}>
          <img src="../public/icon.svg" alt="Icon" />
        </Link> */}

        <nav>
          <ul>
            <li>hola</li>
          </ul>
        </nav>
      </header>
      <main>
        {/* Display routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Router;
