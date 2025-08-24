import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm"; // 👈 import
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      
      {/* 👇 Contact form section */}
      <section id="contact" className="py-12 bg-white flex justify-center">
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
}

export default App;
