import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle2, Waves, Ship, Fish, Users, ChevronRight } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

const projects = [
  {
    title: "Apoio ao Registro de Pesca",
    description: "Auxílio completo para regularização e renovação do Registro Geral da Atividade Pesqueira (RGP).",
    status: "Em andamento",
    icon: CheckCircle2,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Capacitação Técnica",
    description: "Cursos e workshops sobre segurança no mar, manutenção de motores e novas técnicas de pesca.",
    status: "Novo",
    icon: Ship,
    image: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Preservação Costeira",
    description: "Iniciativas de limpeza de praias e monitoramento de espécies migratórias em nossa costa.",
    status: "Em andamento",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Saúde do Pescador",
    description: "Convênios e parcerias para atendimento médico e odontológico exclusivo aos associados.",
    status: "Permanente",
    icon: Users,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-16 py-16">
      <section className="container mx-auto px-4 sm:px-6 lg:px-[60px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-black/5 pb-12">
          <div className="max-w-2xl">
            <Badge className="bg-[#c5a059] text-white border-none rounded-[2px] mb-4 px-3 py-1 text-[10px] uppercase tracking-[2px] font-bold">Nosso Trabalho</Badge>
            <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-6xl text-[#12263a] mb-6 uppercase">
              Iniciativas e <span className="text-[#c5a059] italic lowercase">Projetos</span>
            </h1>
            <p className="max-w-xl text-[12px] font-bold uppercase tracking-[1px] text-[#4a5568]">
              Desenvolvemos ações concretas para fortalecer o setor pesqueiro, 
              garantindo que o pescador de Marataízes tenha as ferramentas e o apoio necessários.
            </p>
          </div>
          <div className="bg-white p-8 border border-black/5 flex items-center gap-6 shadow-sm">
            <div className="bg-[#12263a] p-3 rounded-full text-[#c5a059]">
              <Fish className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-[#12263a] leading-none">+1.200</span>
              <span className="text-[10px] font-bold text-[#4a5568] uppercase tracking-widest mt-1">Pescadores Apoiados</span>
            </div>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border border-black/5 shadow-none h-full flex flex-col sm:flex-row rounded-none group">
                <div className="sm:w-2/5 relative h-64 sm:h-auto overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#12263a]/90 text-white rounded-[2px] border-none text-[9px] uppercase tracking-widest px-3">{project.status}</Badge>
                  </div>
                </div>
                <div className="sm:w-3/5 flex flex-col bg-white">
                  <CardHeader className="p-8 pb-2">
                    <div className="flex items-center gap-2 mb-3 text-[#c5a059]">
                      <project.icon className="h-5 w-5" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Iniciativa</span>
                    </div>
                    <CardTitle className="text-2xl font-serif font-bold text-[#12263a] leading-tight group-hover:italic transition-all">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-4 flex-grow">
                    <div className="text-[13px] text-[#4a5568] leading-relaxed mb-8">
                      {project.description}
                    </div>
                    <Button variant="link" className="p-0 h-auto text-[#12263a] font-bold uppercase tracking-widest text-[10px] hover:text-[#c5a059] group">
                      Ver detalhes <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-[#12263a] text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-[60px] relative z-10">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {[
              { label: "Anos de Tradição", value: "35+" },
              { label: "Associados Ativos", value: "1.250" },
              { label: "Projetos Concluídos", value: "48" },
              { label: "Cursos Ministrados", value: "32" }
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-5xl font-serif font-bold text-[#c5a059] italic mb-2">{stat.value}</div>
                <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner link section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-[60px] mb-12">
        <div className="bg-white p-16 border border-black/5 flex flex-col items-center text-center rounded-none shadow-sm">
          <h2 className="text-3xl font-serif font-bold mb-4 text-[#12263a] italic leading-tight">Interessado em apoiar nossos projetos?</h2>
          <p className="max-w-xl text-[12px] font-bold uppercase tracking-[1px] text-[#4a5568] mb-10 leading-relaxed uppercase">
            Estamos sempre em busca de novas parcerias que beneficiem o pescador e 
            contribuam para o desenvolvimento local.
          </p>
          <Button size="lg" className="bg-[#12263a] text-white hover:bg-[#c5a059] border-none rounded-[4px] px-12 h-14 text-[11px] font-bold uppercase tracking-[1.5px] transition-transform hover:scale-[1.02]" asChild>
            <Link to="/contato">Torne-se um Parceiro</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
