import React from 'react';
import profileImg from './assets/profile.png';
import sociabuzz from './assets/sb1.png';
import { FaDiscord, FaInstagram } from 'react-icons/fa';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none" />
        <div className="z-10 animate-fade-in-up flex flex-col items-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-indigo-500/30 p-1 mb-6 shadow-2xl shadow-indigo-500/20">
             <img src={profileImg} alt="Profile" className="w-full h-full rounded-full object-cover" />
          </div>
          
          <h2 className="text-xl md:text-2xl font-bold text-slate-300 mb-2">@cowoselalubnr</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            cowo selalu benar
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Welcome to My Gaming Space. Support me and check out my ultimate gaming setup.
          </p>
        </div>
      </section>

      {/* Support Me Section */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Support Me</h2>
          <a
            href="https://sociabuzz.com/meardash/support"
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/30"
          >
            <img src={sociabuzz} alt="Sociabuzz" className="w-9 h-9 object-contain" />
            <span>Support My Stream</span>
          </a>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">My Social Media</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="https://discord.gg/BUuxxrzR"
              className="flex items-center justify-center gap-3 bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-8 rounded-xl transition-colors duration-300 w-full md:w-auto font-semibold"
            >
              <FaDiscord className="text-2xl" />
              <span>Join Discord</span> 
            </a>
            
            <a
              href="https://www.instagram.com/me.ardash/"
              className="flex items-center justify-center gap-3 bg-pink-600 hover:bg-pink-700 text-white py-3 px-8 rounded-xl transition-colors duration-300 w-full md:w-auto font-semibold"
            >
              <FaInstagram className="text-2xl" />
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Gaming Specs Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Gaming Specs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SpecCard title="Mouse" item="Vortex Ignix F1" />
            <SpecCard title="Laptop" item="ASUS TUF Gaming F15" />
            <SpecCard title="Keyboard" item="Redragon" />
            <SpecCard title="Mousepad" item="Rexus Mousepad Gaming Kvlar T10" />
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800/50">
        <p>&copy; {new Date().getFullYear()} My Gaming Space. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

const SpecCard = ({ title, item }) => (
  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 group">
    <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-2 group-hover:text-indigo-400 transition-colors">
      {title}
    </h3>
    <p className="text-xl font-bold text-white">{item}</p>
  </div>
);

export default App;
