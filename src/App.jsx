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

      {/* VIP Mode Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 p-1 rounded-3xl relative shadow-[0_0_40px_-10px_rgba(234,179,8,0.5)] transform hover:scale-[1.02] transition-all duration-500">
            <div className="bg-slate-900 rounded-[22px] p-8 md:p-10 h-full w-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="text-center mb-8 z-10 relative">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 drop-shadow-md pb-1">
                  VIP MODE 🎮
                </h2>
                <div className="inline-block bg-yellow-500/20 border border-yellow-500/50 text-yellow-300 font-bold px-4 py-1.5 rounded-full text-lg mb-3">
                  Cuma 10K!
                </div>
                <div className="text-xl md:text-3xl text-white font-black italic tracking-wider drop-shadow-md pb-2">
                  Main bareng gue <span className="text-yellow-400">3x match</span> 🔥
                </div>
              </div>

              <div className="bg-slate-800/60 rounded-2xl p-6 md:p-8 border border-slate-700 backdrop-blur-sm relative z-10">
                <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                  <span className="text-yellow-400 text-2xl">⚡</span>
                  Cara Join:
                </h3>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start gap-4">
                    <div className="bg-yellow-500/20 text-yellow-400 font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5">1</div>
                    <span>Bayar lewat <strong>Sociabuzz</strong> (Tap tombol di bawah)</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-yellow-500/20 text-yellow-400 font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5">2</div>
                    <span>Wajib kasih note <strong>"username (VIP)"</strong> pas bayar!</span>
                  </li>
                </ul>

                <div className="mt-8 text-center">
                  <a href="https://sociabuzz.com/meardash/support" className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold px-8 py-3.5 rounded-full text-lg shadow-lg shadow-orange-500/40 hover:shadow-orange-500/60 transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest w-full md:w-auto">
                    Gas Join Sekarang! 🚀
                  </a>
                </div>
              </div>
            </div>
          </div>
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
              href="https://discord.gg/5TAESuvu"
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
