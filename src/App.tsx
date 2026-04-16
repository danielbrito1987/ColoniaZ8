import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Transparency from "./pages/Transparency";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-background font-sans antialiased">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<About />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/transparencia" element={<Transparency />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
