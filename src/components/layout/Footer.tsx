import { Link } from "react-router-dom";
import { Anchor, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import logo from "../images/logo-z8.png";

export function Footer() {
  return (
    <footer className="w-full border-t border-black/5 bg-white py-16 shadow-inner">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[60px]">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-20 w-20">
                <img src={logo}></img>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold uppercase tracking-wider text-[#12263a] leading-tight">Marataízes</span>
                <span className="text-[10px] text-[#c5a059] font-bold uppercase tracking-[2px]">Colônia de Pescadores</span>
              </div>
            </Link>
            <p className="text-[12px] text-[#4a5568] leading-relaxed uppercase tracking-[0.5px]">
              Representando e fortalecendo a comunidade pesqueira desde sua fundação.
              Tradição, trabalho e transparência em Marataízes.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#12263a] hover:text-[#c5a059] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#12263a] hover:text-[#c5a059] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#12263a] hover:text-[#c5a059] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[2px] text-[#12263a]">Navegação</h3>
            <ul className="flex flex-col gap-3 text-[11px] font-bold uppercase tracking-wider text-[#4a5568]">
              <li><Link to="/" className="hover:text-[#c5a059] transition-colors">Início</Link></li>
              <li><Link to="/quem-somos" className="hover:text-[#c5a059] transition-colors">Quem Somos</Link></li>
              <li><Link to="/projetos" className="hover:text-[#c5a059] transition-colors">Projetos</Link></li>
              <li><Link to="/galeria" className="hover:text-[#c5a059] transition-colors">Galeria</Link></li>
              <li><Link to="/transparencia" className="hover:text-[#c5a059] transition-colors">Portal da Transparência</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[2px] text-[#12263a]">Links Externos</h3>
            <ul className="flex flex-col gap-3 text-[11px] font-bold uppercase tracking-wider text-[#4a5568]">
              <li>
                <a href="https://coopsis.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-[#c5a059] transition-colors">
                  Sistema Coopsis
                </a>
              </li>
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">Ministério da Pesca</a></li>
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">Prefeitura de Marataízes</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[2px] text-[#12263a]">Contato</h3>
            <ul className="flex flex-col gap-4 text-[12px] font-serif italic text-[#4a5568]">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-[#c5a059]" />
                <span>Rua Dr. Jaime S. Neves, 37 - Barra do Itapemirim <br /> Marataízes - ES</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#c5a059]" />
                <span>(28) 3532-1692</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#c5a059]" />
                <span className="lowercase">contato@cpmz8.org.br</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-black/5 pt-8 text-center text-[9px] font-bold uppercase tracking-[2px] text-[#4a5568]">
          <p>© {new Date().getFullYear()} Colônia de Pescadores de Marataízes - Z8. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
