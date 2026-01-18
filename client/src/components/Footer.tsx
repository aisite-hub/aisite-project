import { Github, Twitter, Disc } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-display font-bold text-white mb-4">
            NEURAL<span className="text-primary">SYNDICATE</span>
          </h2>
          <p className="text-white/50 max-w-sm">
            Forging the synthetic consciousness of tomorrow. We build the infrastructure for the next generation of artificial intelligence.
          </p>
        </div>

        <div>
          <h3 className="font-display font-bold text-white mb-4">Protocols</h3>
          <ul className="space-y-2 text-white/50">
            <li><a href="#" className="hover:text-primary transition-colors">Neural Mesh</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Deep Vision</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Synthetic Data</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Core API</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-white mb-4">Connect</h3>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-primary hover:text-primary transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-primary hover:text-primary transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-primary hover:text-primary transition-all">
              <Disc className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
        © 2024 NEURAL SYNDICATE. SYSTEM STATUS: OPERATIONAL.
      </div>
    </footer>
  );
}
