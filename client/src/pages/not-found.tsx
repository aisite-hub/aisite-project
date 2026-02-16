import { Link } from "wouter";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import mainBackground from "../assets/main-background.png";

export default function NotFound() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/20">
      <Navigation />

      <section className="relative min-h-[calc(100vh-160px)] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.07),_rgba(255,255,255,0)_70%)]" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `radial-gradient(ellipse at center, white 40%, transparent 90%), url(${mainBackground})`,
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-1/4 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-[120px]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        >
          <div className="inline-block px-4 py-1 mb-6 rounded-full border border-destructive/30 bg-destructive/5 text-destructive text-xs font-bold tracking-[0.2em] uppercase">
            Error 404
          </div>

          <div className="glass-card p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <AlertTriangle className="w-12 h-12 text-destructive" />
            </div>

            <h1 className="text-5xl md:text-7xl mb-3 text-slate-900">404</h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-slate-800">
              Esta página no existe
            </h2>

            <p className="max-w-xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed mb-8">
              La dirección que escribiste no se encontró o el enlace ya no está
              disponible. Regresa al inicio para seguir explorando nuestras
              soluciones de inteligencia artificial.
            </p>

            <Link href="/" className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold font-display uppercase tracking-wider hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/20">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Volver al Inicio
              </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
