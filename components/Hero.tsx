import Image from 'next/image';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
      <Image src="/profile.jpg" alt="Profile" width={200} height={200} className="rounded-full border-4 border-white shadow-lg" />
      <h1 className="text-5xl font-bold mt-4">Hello, I'm a Developer</h1>
      <p className="text-xl mt-2 text-center max-w-2xl">Welcome to my portfolio. I build amazing web applications with modern technologies.</p>
      <div className="flex gap-4 mt-6">
        <a href="/projects" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">View Projects</a>
        <a href="/contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">Contact Me</a>
      </div>
    </div>
  );
}