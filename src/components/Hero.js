export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h2 className="text-5xl font-extrabold mb-4">Welcome to My Portfolio</h2>
      <p className="text-lg mb-6">I build web apps with React & Tailwind CSS 🚀</p>
      <a href="#projects" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
        View My Work
      </a>
    </section>
  );
}
