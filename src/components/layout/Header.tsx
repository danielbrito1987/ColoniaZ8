import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Anchor, Menu, X, Waves } from "lucide-react";
import { cn } from "../../../lib/utils";
import { Button } from "../../../components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../../../components/ui/sheet";
import logo from "../images/logo-z8.png";

const navigation = [
  { name: "Início", href: "/" },
  { name: "Quem Somos", href: "/quem-somos" },
  { name: "Projetos", href: "/projetos" },
  { name: "Galeria", href: "/galeria" },
  { name: "Portal da Transparência", href: "/transparencia" },
  { name: "Contato", href: "/contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white h-[100px] flex items-center shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[60px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#12263a] text-[#c5a059] font-bold text-lg">
              Z8
            </div> */}
            <div className="flex h-20 w-20">
              <img src={logo}></img>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold uppercase tracking-wider text-[#12263a] leading-tight">Marataízes</span>
              <span className="text-[10px] text-[#c5a059] font-bold uppercase tracking-[2px]">Colônia de Pescadores</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-[30px]">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-[12px] font-bold uppercase tracking-wider transition-colors hover:text-[#c5a059]",
                location.pathname === item.href
                  ? "text-[#12263a] border-b-2 border-[#c5a059] pb-1"
                  : "text-[#12263a]"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild className="hidden lg:flex bg-[#12263a] text-white hover:bg-[#c5a059] border-none rounded-[4px] px-6 h-10 text-[11px] font-bold uppercase tracking-[1.5px]">
            <a href="https://coopsis.com.br" target="_blank" rel="noopener noreferrer">
              Sistema Coopsis
            </a>
          </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col gap-6">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <Waves className="h-5 w-5 text-primary" />
                    CPMZ8 Marataízes
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        location.pathname === item.href
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <hr className="my-2" />
                  <a
                    href="https://coopsis.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-primary"
                  >
                    Sistema Coopsis
                  </a>
                </nav>
              </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
