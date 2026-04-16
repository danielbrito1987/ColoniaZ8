import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  Users, 
  Briefcase, 
  FileText, 
  Image as ImageIcon, 
  ChevronRight,
  Anchor,
  Fish,
  Ship,
  Waves
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";

const banners = [
  {
    title: "Tradição que nutre a alma de Marataízes",
    description: "Nossa Essência",
    href: "/quem-somos",
    bg: "bg-[#1a3c5a]",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200",
    gridClass: "md:col-span-2 md:row-span-2",
    arrowText: "Explore a nossa história →"
  },
  {
    title: "Nossos Projetos",
    description: "Desenvolvimento",
    href: "/projetos",
    bg: "bg-[#234c6e]",
    img: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&q=80&w=1200",
    gridClass: "md:col-span-1 md:row-span-1",
    arrowText: "→"
  },
  {
    title: "Galeria",
    description: "Comunidade",
    href: "/galeria",
    bg: "bg-[#2c5d82]",
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
    gridClass: "md:col-span-1 md:row-span-1",
    arrowText: "→"
  },
  {
    title: "Portal da Transparência",
    description: "Governança",
    href: "/transparencia",
    bg: "bg-[#c5a059]",
    img: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1200",
    gridClass: "md:col-span-2 md:row-span-1",
    arrowText: "Acessar demonstrativos →"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-100px)]">
      {/* Editorial Grid Section */}
      <section className="flex-1 p-4 sm:p-6 lg:p-[60px]">
        <div className="grid h-full gap-5 md:grid-cols-4 md:grid-rows-2">
          {banners.map((banner, index) => (
            <motion.div
              key={banner.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={cn("relative overflow-hidden group cursor-pointer border border-black/10 flex flex-col justify-end p-8 text-white min-h-[300px]", banner.bg, banner.gridClass)}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={banner.img} 
                  alt="" 
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 opacity-40 group-hover:opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <Link to={banner.href} className="absolute inset-0 z-10" />
              <div className="relative z-20">
                <p className="text-[12px] font-bold uppercase tracking-[1px] opacity-80 mb-2">
                  {banner.description}
                </p>
                <h2 className={cn(
                  "font-serif italic leading-[1.1] mb-4",
                  banner.gridClass.includes("sm:col-span-2") ? "text-3xl md:text-5xl" : "text-2xl"
                )}>
                  {banner.title}
                </h2>
                <div className="text-xl transition-transform group-hover:translate-x-2">
                  {banner.arrowText}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Utility Bar (Design Stat Bar) */}
      <div className="h-auto md:h-[120px] px-4 sm:px-6 lg:px-[60px] bg-white border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-6 py-6 md:py-0 shadow-inner">
        <div className="flex flex-wrap gap-8 md:gap-[40px] justify-center md:justify-start">
          {[
            { label: "Associados Ativos", value: "1.482" },
            { label: "Fundo de Apoio (2024)", value: "R$ 420.500,00" },
            { label: "Projetos em Execução", value: "08" }
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-[9px] font-bold uppercase text-[#4a5568] tracking-[1px] mb-1">{stat.label}</span>
              <span className="font-serif font-bold text-lg text-[#12263a]">{stat.value}</span>
            </div>
          ))}
        </div>
        
        <Button asChild className="bg-[#12263a] text-white hover:bg-[#c5a059] border-none rounded-[4px] px-8 h-12 text-[11px] font-bold uppercase tracking-[1.5px]">
          <a href="https://coopsis.com.br" target="_blank" rel="noopener noreferrer">
            Acesso Sistema COOPSIS
          </a>
        </Button>
      </div>
    </div>
  );
}
