import PageNotFound from "./components/404/PageNotFound";
import Footer from "./components/Header and Footer/Footer";
import Header from "./components/Header and Footer/Header";
import About from "./components/Home/About/About";
import Contact from "./components/Home/Contact/Contact";
import BookingRoom from "./components/Home/FindRoom/BookingRoom";
import Home from "./components/Home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Services from "./components/Pages/Services/Services";
import { useEffect } from "react";

function App() {

  const { pathname } = useLocation()


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Enables smooth scrolling
    });
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/booking-room" exact element={<BookingRoom />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" exact element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
