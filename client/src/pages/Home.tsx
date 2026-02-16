import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Brain,
  Eye,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Plus,
  Minus,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useCreateSubscriber } from "@/hooks/use-subscribers";
import { useForm } from "react-hook-form";
import mainBackground from "../assets/main-background.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/20">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-secondary z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navigation />

      <HeroSection />
      <FeaturesSection />
      <ParallaxDivider />
      <FAQSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

// -----------------------------------------------------------------------------
// FAQ SECTION
// -----------------------------------------------------------------------------
function FAQSection() {
  const faqs = [
    {
      question: "1. ¿Qué es la Automatización con Inteligencia Artificial?",
      answer:
        "Es tener un asistente virtual (programa informático avanzado) que trabaja para ti las 24 horas. Imagina un sistema que atiende a tus clientes, responde sus dudas, responde el WhatsApp, agenda citas, contesta el telefono y hace todas las funciones de un asistente de oficina, sin que tengas que estar pendiente del celular.",
    },
    {
      question: "2. Yo no sé de computación, ¿podré usarlo?",
      answer:
        "¡Por supuesto! Usted no necesita aprender nada técnico. Nosotros nos encargamos de que todo funcione de forma automática 'detrás de escena'. El sistema se encarga de recibir, informar y filtrar a los interesados por usted, para que su negocio crezca sin que usted tenga que estar pendiente.",
    },
    {
      question: "3. ¿En que tareas de mi negocio me apoya?",
      answer:
        "Nuestro sistema atienda a tus clientes por todos los canales que te contacten, responde por ti WhatsApp, contesta llamadas telefonicas, agenda citas, ademas de atender tus redes sociales como Facebook e Instagram, incluso correo electronico. Todo de forma natural como lo haria culaquier humano.",
    },
    {
      question: "3. ¿Cuanto cuesta?",
      answer:
        "Earth's mass is approximately 5.97 x 10^24 kilograms. While we can't 'weigh' it on a scale, scientists calculate its mass by observing its gravitational effect on other objects, such as the moon.",
    },
    {
      question: "5. ¿Cómo me ayuda esto a ganar más?",
      answer:
        "Lo logramos de tres maneras muy claras:\n\n1. Atraemos a más personas: Mejoramos su presencia en internet y usamos anuncios en Google y redes sociales para que más gente conozca su negocio y lo encuentren primero a usted.\n\n2. Respuesta inmediata: La IA asegura que ningún cliente se pierda, contestando a todas las personas en segundos, las 24 horas del día.\n\n3. Filtro de calidad: El sistema separa a los curiosos de los clientes reales, para que el negocio avance sin que usted pierda tiempo en tareas repetitivas.\n\nEn resumen: le traemos público nuevo, los atendemos de inmediato y su negocio crece sin que usted tenga que trabajar más.",
    },
  ];

  return (
    <section id="faq" className="py-32 relative bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto" />
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="border border-slate-200 rounded-lg px-6 transition-all hover:border-primary/30"
            >
              <AccordionTrigger className="hover:no-underline py-6 group">
                <div className="flex items-center justify-between w-full text-left">
                  <span className="text-lg font-medium text-slate-700 group-data-[state=open]:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <div className="ml-4 flex-shrink-0">
                    <div className="relative w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-data-[state=open]:border-primary group-data-[state=open]:bg-primary/5 transition-all">
                      <Plus className="w-4 h-4 text-slate-400 absolute transition-all group-data-[state=open]:opacity-0 group-data-[state=open]:rotate-90" />
                      <Minus className="w-4 h-4 text-primary absolute opacity-0 transition-all group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-0" />
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-6 leading-relaxed whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
// -----------------------------------------------------------------------------
// HERO SECTION
// -----------------------------------------------------------------------------
function HeroSection() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.05),_rgba(255,255,255,0)_70%)]" />

        {/* Animated Grid */}

        {/* <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-multiply" style={{ backgroundImage: `url(${mainBackground})` }} /> */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `radial-gradient(ellipse at center, white 40%, transparent 90%), url(${mainBackground})`,
            opacity: 0.3, // Subí un poco la opacidad porque el blanco del centro ya ayuda a la lectura
          }}
        />
        {/* Floating Abstract Shapes */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ opacity }}
        >
          <div className="inline-block px-4 py-1 mb-6 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] uppercase">
            IA PARA EMPRENDEDORES
          </div>

          <h1 className="font-display font-bold leading-[0.95] md:leading-none mb-6 text-slate-900 max-w-5xl mx-auto">
            <span className="block text-[clamp(1.9rem,10vw,4rem)]">
              ESCALA TU NEGOCIO CON
            </span>
            <span className="block text-[clamp(2.2rem,12vw,6rem)] break-words text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-secondary text-glow">
              INTELIGENCIA ARTIFICIAL
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-light">
            Nosotros nos encargamos de lo complejo. Tu solo disfruta de tu
            tiempo y de tus nuevos clientes.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="#newsletter"
              className="group relative px-8 py-4 bg-primary text-white font-bold font-display uppercase tracking-wider overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                Agenda una Cita{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            <a
              href="#features"
              className="px-8 py-4 border border-slate-200 text-slate-600 font-display uppercase tracking-wider hover:bg-slate-50 transition-colors"
            >
              VER SOLUCIONES
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] uppercase tracking-widest">
          Desliza para Explorar
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-300 to-transparent" />
      </motion.div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// FEATURES SECTION
// -----------------------------------------------------------------------------
function FeaturesSection() {
  const features = [
    {
      title: "Como funciona?",
      desc: "Conectamos un sistema inteligente que aprende de tu negocio para atender a tus clientes y organizar tus ventas de forma automática.",
      icon: <Brain className="w-8 h-8 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80", // abstract tech lines
    },
    {
      title: "Para quien es?",
      desc: "Para dueños de negocios que busquen hacer mas ventas, tener mas clientes, reducir costos y llevar su negocio a otro nivel.",
      icon: <Eye className="w-8 h-8 text-secondary" />,
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80", // cyber eye/lens
    },
    {
      title: "Como me beneficia?",
      desc: "Delegar las tareas a empleados virtuales de inteligencia artificial permite a tu negocio estar disponible las 24 hrs para no perder ventas ademas de ahorrar tiempo y dinero.",
      icon: <Cpu className="w-8 h-8 text-accent" />,
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80", // abstract robot
    },
  ];

  return (
    <section id="features" className="py-32 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-slate-900">
            Nuestro <span className="text-slate-300">Objetivo</span>
          </h2>
          <div className="h-1 w-20 bg-primary mb-6" />
          <p className="text-slate-600 max-w-5xl text-lg">
            Llevar tu negocio al siguiente nivel, ya sea que estés empezando o
            si ya tienes años de camino. Usamos inteligencia artificial para
            automatizar la atención a tus clientes para que nunca pierdas una
            venta, lograr que más personas te conozcan y que tu trabajo diario
            sea mucho más sencillo y rápido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card group rounded-xl overflow-hidden relative"
            >
              {/* Image Header */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-8 relative z-20">
                <div className="mb-6 p-3 bg-slate-50 w-fit rounded-lg border border-slate-200 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-display font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// PARALLAX DIVIDER
// -----------------------------------------------------------------------------
function ParallaxDivider() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <section
      ref={ref}
      id="parallax"
      className="h-[60vh] relative overflow-hidden flex items-center justify-center"
    >
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80')",
          x,
          width: "120%",
          filter: "brightness(0.8) contrast(1.1)",
        }}
      />

      <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] z-10" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-20 text-center max-w-4xl px-6"
      >
        <h2 className="text-5xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-900/0 tracking-tighter">
          SYNTHETIC
          <br />
          EVOLUTION
        </h2>
      </motion.div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// NEWSLETTER SECTION
// -----------------------------------------------------------------------------
function NewsletterSection() {
  const { mutate, isPending } = useCreateSubscriber();

  const form = useForm<{ email: string }>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: { email: string }) => {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <section id="newsletter" className="py-32 relative overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-background z-0" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[100px] rounded-full" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="glass p-12 md:p-16 rounded-3xl border border-slate-200 text-center relative overflow-hidden">
          {/* Decorative lines */}
          <div className="absolute top-0 left-0 w-20 h-[1px] bg-primary" />
          <div className="absolute top-0 left-0 w-[1px] h-20 bg-primary" />
          <div className="absolute bottom-0 right-0 w-20 h-[1px] bg-primary" />
          <div className="absolute bottom-0 right-0 w-[1px] h-20 bg-primary" />

          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-slate-900">
            INITIALIZE <span className="text-primary">ACCESS</span>
          </h2>

          <p className="text-lg text-slate-600 mb-10 max-w-lg mx-auto">
            Join the neural syndicate. Get early access to our protocols and
            research updates before public deployment.
          </p>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
          >
            <div className="flex-1 relative">
              <input
                {...form.register("email")}
                placeholder="ENTER EMAIL ADDRESS"
                className="w-full px-6 py-4 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono"
              />
              {form.formState.errors.email && (
                <span className="absolute -bottom-6 left-0 text-destructive text-xs">
                  {form.formState.errors.email.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="px-8 py-4 bg-slate-900 text-white font-bold font-display tracking-wider hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isPending ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  REQUEST ACCESS <CheckCircle2 className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <p className="mt-8 text-xs text-slate-400 uppercase tracking-widest">
            Encryption Enabled • Zero Knowledge Proofs • Secure Transmission
          </p>
        </div>
      </div>
    </section>
  );
}
