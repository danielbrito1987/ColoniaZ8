import { motion } from "motion/react";
import { ShieldCheck, Target, Heart, Anchor, Waves } from "lucide-react";
import { Badge } from "../../components/ui/badge";

const values = [
  {
    title: "Trabalho",
    description: "Dedicação total ao sustento e progresso da nossa comunidade.",
    icon: Anchor,
  },
  {
    title: "Ética",
    description: "Transparência e honestidade em todas as ações administrativas.",
    icon: ShieldCheck,
  },
  {
    title: "Foco",
    description: "Sempre buscando o melhor para os associados e suas famílias.",
    icon: Target,
  },
  {
    title: "União",
    description: "Fortalecendo o espírito de cooperação entre os pescadores.",
    icon: Heart,
  },
];

export default function About() {
  return (
    <div className="flex flex-col gap-16 py-16">
      <section className="container mx-auto px-4 sm:px-6 lg:px-[60px]">
        <div className="flex flex-col items-center text-center mb-16">
          <Badge className="bg-[#c5a059] text-white border-none rounded-[2px] mb-4 px-3 py-1 text-[10px] uppercase tracking-[2px] font-bold">Nossa História</Badge>
          <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-6xl text-[#12263a] mb-6 uppercase">
            Fazendo história nas águas de <span className="text-[#c5a059] italic lowercase">Marataízes</span>
          </h1>
          <p className="max-w-2xl text-[12px] font-bold uppercase tracking-[1px] text-[#4a5568]">
            A Colônia de Pescadores Z8 é o pilar de sustentação dos trabalhadores do mar em nossa região, 
            promovendo dignidade e preservando o legado da pesca artesanal.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 items-center mt-16">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-none border-[1px] border-black/10 shadow-3xl relative z-10 bg-[#f8f5f0]">
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1000" 
                alt="Fishermen together" 
                className="h-full w-full object-cover grayscale opacity-80 mix-blend-multiply hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 h-full w-full border border-black/5 bg-[#c5a059]/10 -z-0" />
            
            <div className="absolute -right-8 bottom-12 z-20 bg-[#12263a] p-10 shadow-3xl max-w-[320px] text-white">
              <p className="italic font-serif text-xl leading-[1.4]">
                "A nossa força não vem apenas das redes, mas da alma resiliente de quem vive do mar."
              </p>
              <div className="mt-6 font-bold text-[#c5a059] uppercase tracking-[2.5px] text-[10px] border-t border-white/10 pt-4">— Presidência CPMZ8</div>
            </div>
          </div>
          
          <div className="space-y-12 lg:pl-12">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-[#12263a] italic border-b border-black/5 pb-4">
                Quem Somos
              </h2>
              <p className="text-[#4a5568] leading-relaxed text-sm lg:text-base">
                Fundada com o objetivo de organizar e defender a classe pesqueira, a Colônia de Pescadores 
                Marataízes - Z8 tem sido, ao longo de décadas, a voz ativa dos pescadores artesanais. 
                Atuamos como um elo entre o poder público e o trabalhador, garantindo direitos, 
                acesso a benefícios e promovendo a sustentabilidade da atividade.
              </p>
            </div>
            
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="bg-[#12263a] p-8 text-white rounded-none">
                <h3 className="text-[10px] font-bold mb-3 text-[#c5a059] uppercase tracking-widest italic font-serif text-sm">Nossa Missão</h3>
                <p className="text-sm font-serif text-white/80 leading-relaxed">
                  Proporcionar suporte integral ao pescador, desde a parte burocrática até 
                  o desenvolvimento técnico, zelando sempre pelo equilíbrio ecológico.
                </p>
              </div>
              <div className="bg-white border border-black/5 p-8 text-[#12263a] rounded-none">
                <h3 className="text-[10px] font-bold mb-3 text-[#c5a059] uppercase tracking-widest italic font-serif text-sm">Nossa Visão</h3>
                <p className="text-sm font-serif text-[#4a5568] leading-relaxed">
                  Sermos reconhecidos como a colônia modelo de gestão e transparência no Espírito Santo, 
                  fortalecendo cada vez mais a identidade local.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="bg-[#fcfaf7] pt-12 border-t border-black/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-[60px]">
          <div className="flex justify-between items-end mb-12 border-b border-black/5 pb-8">
            <h2 className="text-4xl font-serif font-bold text-[#12263a] uppercase">Nossos <br/><span className="italic text-[#c5a059] lowercase">Valores</span></h2>
            <p className="max-w-[300px] text-[10px] font-bold uppercase tracking-wider text-[#4a5568]">Os princípios fundamentais que regem cada decisão de nossa diretoria e associados.</p>
          </div>
          
          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4 border-l border-black/5">
            {values.map((v) => (
              <div key={v.title} className="p-10 border-r border-b border-black/5 bg-white hover:bg-[#f8f5f0] transition-colors">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#12263a] text-[#c5a059]">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#12263a]">{v.title}</h3>
                <p className="text-[12px] text-[#4a5568] leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}