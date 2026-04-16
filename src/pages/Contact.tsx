import React from "react";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center mb-16">
        <Badge className="mb-4 bg-[#c5a059] text-white border-none rounded-[2px] px-3 py-1 text-[10px] uppercase tracking-[2px] font-bold">Canais Oficiais</Badge>
        <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-6xl mb-6 text-[#12263a] uppercase">Fale <span className="text-[#c5a059] italic lowercase">Conosco</span></h1>
        <p className="max-w-2xl text-[12px] font-bold uppercase tracking-[1px] text-[#4a5568]">
          Estamos aqui para ouvir você. Tire suas dúvidas, envie sugestões ou solicite 
          atendimento administrativo por meio de nossos canais de comunicação.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-8">
          <Card className="border-none shadow-xl bg-[#12263a] text-white overflow-hidden rounded-none">
            <CardHeader className="p-10">
              <CardTitle className="text-2xl font-serif font-bold mb-2 italic">Informações de Contato</CardTitle>
              <CardDescription className="text-white/60 text-xs font-bold uppercase tracking-widest">
                Escolha a forma mais conveniente para você entrar em contato.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-10 pt-0 space-y-10">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-none backdrop-blur-sm border border-white/20">
                   <Phone className="h-6 w-6 text-[#c5a059]" />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-widest opacity-60 mb-1">Telefone</div>
                  <div className="text-lg font-serif italic">(28) 3532-0000</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-none backdrop-blur-sm border border-white/20">
                   <Mail className="h-6 w-6 text-[#c5a059]" />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-widest opacity-60 mb-1">E-mail</div>
                  <div className="text-lg font-serif italic lowercase">contato@cpmz8.org.br</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-none backdrop-blur-sm border border-white/20">
                   <MapPin className="h-6 w-6 text-[#c5a059]" />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-widest opacity-60 mb-1">Sede Administrativa</div>
                  <div className="text-sm font-serif italic leading-tight">Rua Principal, 123 - Centro<br />Marataízes - ES, 29290-000</div>
                </div>
              </div>
              
              <div className="pt-4 flex items-center gap-6">
                <a href="#" className="hover:text-[#c5a059] transition-colors"><Facebook className="h-6 w-6" /></a>
                <a href="#" className="hover:text-[#c5a059] transition-colors"><Instagram className="h-6 w-6" /></a>
                <a href="#" className="hover:text-[#c5a059] transition-colors"><Twitter className="h-6 w-6" /></a>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-black/5 shadow-none rounded-none bg-white">
             <CardHeader className="p-10 pb-0">
               <CardTitle className="text-2xl font-serif font-bold text-[#12263a]">Horário de <span className="italic text-[#c5a059]">Atendimento</span></CardTitle>
             </CardHeader>
             <CardContent className="p-10 space-y-6">
               <div className="flex justify-between items-center pb-4 border-b border-black/5">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-[#4a5568]">Segunda a Sexta</span>
                 <span className="font-serif italic font-bold text-[#12263a]">08:00 - 17:00</span>
               </div>
               <div className="flex justify-between items-center opacity-40">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-[#4a5568]">Sábado e Domingo</span>
                 <span className="italic font-serif">Fechado</span>
               </div>
             </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="h-full border border-black/5 shadow-none rounded-none bg-white">
            <CardHeader className="p-12 pb-0">
              <CardTitle className="text-4xl font-serif font-bold text-[#12263a] uppercase italic">Mande uma Mensagem</CardTitle>
              <CardDescription className="text-[10px] font-bold uppercase tracking-[1px] mt-4 text-[#4a5568]">Preencha o formulário abaixo e retornaremos em até 24 horas úteis.</CardDescription>
            </CardHeader>
            <CardContent className="p-12">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid gap-10 sm:grid-cols-2">
                  <div className="grid gap-4">
                    <Label htmlFor="first-name" className="text-[10px] font-bold uppercase tracking-widest text-[#12263a]">Nome</Label>
                    <Input id="first-name" placeholder="Ex: João" className="h-14 rounded-none border-black/10 focus:ring-[#c5a059] text-base font-serif" required />
                  </div>
                  <div className="grid gap-4">
                    <Label htmlFor="last-name" className="text-[10px] font-bold uppercase tracking-widest text-[#12263a]">Sobrenome</Label>
                    <Input id="last-name" placeholder="Ex: Silva" className="h-14 rounded-none border-black/10 focus:ring-[#c5a059] text-base font-serif" required />
                  </div>
                </div>
                <div className="grid gap-4">
                  <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-[#12263a]">Seu E-mail</Label>
                  <Input id="email" type="email" placeholder="joao.silva@exemplo.com" className="h-14 rounded-none border-black/10 focus:ring-[#c5a059] text-base font-serif" required />
                </div>
                <div className="grid gap-4">
                  <Label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-widest text-[#12263a]">Assunto</Label>
                  <Input id="subject" placeholder="Ex: Informações sobre associações" className="h-14 rounded-none border-black/10 focus:ring-[#c5a059] text-base font-serif" required />
                </div>
                <div className="grid gap-4">
                  <Label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-[#12263a]">Mensagem</Label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Escreva sua mensagem detalhadamente..."
                    className="flex w-full rounded-none border border-black/10 bg-background px-3 py-4 text-base font-serif ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  ></textarea>
                </div>
                <Button size="lg" className="w-full sm:w-auto px-16 h-14 bg-[#12263a] text-white hover:bg-[#c5a059] border-none rounded-none text-[11px] font-bold uppercase tracking-[2px] shadow-xl shadow-black/5 transition-transform hover:scale-[1.01]">
                  Enviar Mensagem <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-20 h-96 w-full overflow-hidden rounded-none border border-black/5 bg-white shadow-sm relative grayscale hover:grayscale-0 transition-all duration-1000">
         {/* Placeholder for real map */}
         <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 bg-slate-200/50">
            <MapPin className="h-12 w-12 mb-4 animate-bounce" />
            <span className="font-bold text-lg uppercase tracking-widest">Mapa de Localização</span>
            <span className="text-sm italic">Sede CPMZ8 - Marataízes, Espírito Santo</span>
         </div>
         <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14917.472718146313!2d-40.898628!3d-21.040183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb93437f8f903f7%3A0xc6c76db31e6783d3!2sMarata%C3%ADzes%2C%20ES!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
           width="100%"
           height="100%"
           style={{ border: 0 }}
           allowFullScreen
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade"
           className="opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
         ></iframe>
      </div>
    </div>
  );
}
