import { useState } from "react";
import { motion } from "motion/react";
import { 
  FileText, 
  Download, 
  History, 
  Search, 
  TrendingUp, 
  PieChart, 
  ShieldCheck,
  ChevronDown
} from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { cn } from "../../lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Input } from "../../components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Button } from "../../components/ui/button";

const financialData = [
  { id: 1, date: "2024-03-15", description: "Taxas de Associados", type: "Receita", value: "R$ 15.450,00", status: "Confirmado" },
  { id: 2, date: "2024-03-10", description: "Manutenção de Sede", type: "Despesa", value: "R$ 2.300,00", status: "Pago" },
  { id: 3, date: "2024-03-05", description: "Convênio Médico", type: "Despesa", value: "R$ 8.900,00", status: "Pago" },
  { id: 4, date: "2024-02-28", description: "Doação Institucional", type: "Receita", value: "R$ 5.000,00", status: "Confirmado" },
  { id: 5, date: "2024-02-20", description: "Assessoria Jurídica", type: "Despesa", value: "R$ 3.500,00", status: "Pago" },
];

const administrativeDocs = [
  { title: "Estatuto Social CPMZ8", year: "2023", size: "1.2 MB" },
  { title: "Relatório de Gestão Anual", year: "2023", size: "4.5 MB" },
  { title: "Conselho Fiscal - Ata 04/24", year: "2024", size: "850 KB" },
  { title: "Plano de Ação Sustentável", year: "2024", size: "2.3 MB" },
  { title: "Regimento Interno", year: "2022", size: "1.0 MB" },
];

export default function Transparency() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFinancials = financialData.filter(item => 
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      {/* Editorial Header with Image Source */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1600" 
            alt="Transparency and Data" 
            className="h-full w-full object-cover grayscale opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#12263a]/90 to-[#12263a]/40" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-[60px] relative z-10 text-center">
          <Badge className="bg-[#c5a059] text-white border-none rounded-[2px] mb-6 px-3 py-1 text-[10px] uppercase tracking-[2px] font-bold">Transparência Ativa</Badge>
          <h1 className="text-5xl font-serif font-bold tracking-tight sm:text-7xl text-white mb-6 uppercase">
            Portal da <span className="text-[#c5a059] italic lowercase">Gestão</span>
          </h1>
          <p className="max-w-xl mx-auto text-[11px] font-bold uppercase tracking-[1.5px] text-white/70 leading-relaxed">
            Garantindo clareza administrativa e ética institucional para cada associado da Colônia Z8.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-[60px]">
        {/* Summary Stats Grid */}
        <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-3 mb-20 border-l border-t border-black/5">
          {[
            { label: "Receitas Mar/24", value: "R$ 42.150,00", icon: TrendingUp, color: "text-[#c5a059]", bg: "bg-white" },
            { label: "Despesas Mar/24", value: "R$ 28.340,00", icon: PieChart, color: "text-[#12263a]", bg: "bg-[#fcfaf7]" },
            { label: "Saldo Atual", value: "R$ 136.810,45", icon: History, color: "text-[#c5a059]", bg: "bg-[#12263a]", textColor: "text-white" }
          ].map((stat, i) => (
            <div key={i} className={cn("p-12 border-r border-b border-black/5 flex flex-col justify-center", stat.bg)}>
              <div className={cn("mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-black/5", stat.textColor ? "bg-white/10" : "")}>
                 <stat.icon className={cn("h-6 w-6", stat.color)} />
              </div>
              <div className={cn("text-[9px] font-bold uppercase tracking-widest mb-2", stat.textColor ? "text-white/60" : "text-[#4a5568]")}>{stat.label}</div>
              <div className={cn("text-3xl font-serif font-bold", stat.textColor ? "text-white" : "text-[#12263a]")}>{stat.value}</div>
            </div>
          ))}
        </div>

        <Tabs defaultValue="financial" className="space-y-12">
          <div className="flex flex-col sm:flex-row justify-between items-end gap-8 border-b border-black/5 pb-8">
            <TabsList className="bg-transparent p-0 h-auto gap-12 rounded-none">
              <TabsTrigger 
                value="financial" 
                className="bg-transparent border-none rounded-none px-0 py-2 text-[12px] font-bold uppercase tracking-widest text-[#4a5568] data-[state=active]:text-[#12263a] data-[state=active]:border-b-2 data-[state=active]:border-[#c5a059] transition-all"
              >
                Demonstrativo Financeiro
              </TabsTrigger>
              <TabsTrigger 
                value="administrative" 
                className="bg-transparent border-none rounded-none px-0 py-2 text-[12px] font-bold uppercase tracking-widest text-[#4a5568] data-[state=active]:text-[#12263a] data-[state=active]:border-b-2 data-[state=active]:border-[#c5a059] transition-all"
              >
                Documentos Administrativos
              </TabsTrigger>
            </TabsList>
            
            <div className="relative w-full sm:w-[350px]">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4a5568]" />
              <Input 
                placeholder="Filtrar por descrição..." 
                className="pl-12 w-full h-14 rounded-none border-black/10 focus:ring-[#c5a059] font-serif italic bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <TabsContent value="financial" className="mt-0">
            <div className="overflow-x-auto border border-black/5 bg-white shadow-sm">
              <Table>
                <TableHeader className="bg-[#f8f5f0]">
                  <TableRow className="border-b border-black/5">
                    <TableHead className="py-8 px-8 font-bold uppercase tracking-widest text-[10px] text-[#12263a] h-auto">Data</TableHead>
                    <TableHead className="py-8 px-8 font-bold uppercase tracking-widest text-[10px] text-[#12263a] h-auto">Descrição</TableHead>
                    <TableHead className="py-8 px-8 font-bold uppercase tracking-widest text-[10px] text-[#12263a] h-auto">Tipo</TableHead>
                    <TableHead className="py-8 px-8 font-bold uppercase tracking-widest text-[10px] text-[#12263a] h-auto text-right">Valor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredFinancials.map((item) => (
                    <TableRow key={item.id} className="border-b border-black/5 hover:bg-[#fcfaf7] transition-colors">
                      <TableCell className="py-8 px-8 text-[12px] font-serif italic text-[#4a5568]">{new Date(item.date).toLocaleDateString('pt-BR')}</TableCell>
                      <TableCell className="py-8 px-8 text-[14px] font-bold text-[#12263a]">{item.description}</TableCell>
                      <TableCell className="py-8 px-8">
                        <Badge className={cn(
                          "rounded-[2px] border-none px-3 py-1 text-[8px] font-bold uppercase tracking-widest",
                          item.type === "Receita" ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
                        )}>
                          {item.type}
                        </Badge>
                      </TableCell>
                      <TableCell className={cn("py-8 px-8 text-right font-serif font-bold text-lg", item.type === "Receita" ? "text-emerald-700" : "text-[#12263a]")}>
                        {item.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="administrative" className="mt-0">
            <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-black/5">
              {administrativeDocs.map((doc, i) => (
                <div key={i} className="p-10 border-r border-b border-black/5 bg-white hover:bg-[#fcfaf7] transition-all group flex flex-col h-full">
                  <div className="bg-[#12263a]/5 w-12 h-12 rounded-none flex items-center justify-center text-[#12263a] mb-8 group-hover:bg-[#12263a] group-hover:text-white transition-all duration-500">
                     <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#12263a] leading-tight mb-3 italic">{doc.title}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#4a5568] mb-8">Publicado em {doc.year} • {doc.size}</p>
                  <Button variant="outline" className="mt-auto w-full h-12 rounded-none border-black/10 text-[10px] font-bold uppercase tracking-widest hover:bg-[#12263a] hover:text-white gap-3 transition-all">
                    <Download className="h-3 w-3" /> Baixar PDF
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* External Link Section */}
        <section className="mt-32">
          <div className="bg-[#12263a] text-white p-16 sm:p-24 relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute top-0 right-0 w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1600" 
                alt="System Background" 
                className="h-full w-full object-cover opacity-10 grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl font-serif font-bold mb-6 italic leading-tight uppercase">Integridade Digital <br/><span className="text-[#c5a059] lowercase">Sistema Coopsis</span></h2>
              <p className="text-white/60 text-[12px] font-bold uppercase tracking-[1px] leading-relaxed mb-12">
                Nossa colônia utiliza as tecnologias mais modernas para gestão de cooperativas e colônias. 
                Acesse o sistema externo para consultas detalhadas de filiados e históricos individuais.
              </p>
              <Button size="lg" className="bg-[#c5a059] text-white hover:bg-white hover:text-[#12263a] border-none rounded-[4px] px-16 h-16 text-[11px] font-bold uppercase tracking-[2px] shadow-2xl transition-all" asChild>
                 <a href="https://coopsis.com.br" target="_blank" rel="noopener noreferrer">Acessar Sistema Externo</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
