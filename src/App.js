import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* Add other sections like About, Projects, Contact here */}
      <Footer />
    </div>
  );
}

export default App;
