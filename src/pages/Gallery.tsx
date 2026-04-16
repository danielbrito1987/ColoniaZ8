import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, Image as ImageIcon } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1504159506876-f8338247a14a?auto=format&fit=crop&q=80&w=1200",
    title: "Orla de Marataízes",
    category: "Natureza",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200",
    title: "Embarcações",
    category: "Atividades",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?auto=format&fit=crop&q=80&w=1200",
    title: "Trabalho Coletivo",
    category: "Social",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&q=80&w=1200",
    title: "Manutenção de Redes",
    category: "Trabalho",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200",
    title: "Nascer do Sol",
    category: "Natureza",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1200",
    title: "Reunião de Associados",
    category: "Social",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200",
    title: "Pescado Fresco",
    category: "Atividades",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=1200",
    title: "Bares Marítimos",
    category: "Natureza",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);
  const [filter, setFilter] = useState("Todos");

  const categories = ["Todos", ...new Set(images.map((img) => img.category))];

  const filteredImages = filter === "Todos" 
    ? images 
    : images.filter((img) => img.category === filter);

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-[60px]">
      <div className="flex flex-col items-center text-center mb-16">
        <Badge className="bg-[#c5a059] text-white border-none rounded-[2px] mb-4 px-3 py-1 text-[10px] uppercase tracking-[2px] font-bold">Registros em Mar</Badge>
        <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-6xl mb-6 text-[#12263a] uppercase">Nossa <span className="text-[#c5a059] italic lowercase">Galeria</span></h1>
        <p className="max-w-2xl text-[12px] font-bold uppercase tracking-[1px] text-[#4a5568]">
          Um mosaico visual da vida, do trabalho e das belezas naturais que 
          compõem o cotidiano da Colônia Z8 em Marataízes.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-black/5 pb-8">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={filter === cat ? "default" : "outline"}
            onClick={() => setFilter(cat)}
            className={cn(
              "rounded-none border-black/5 font-bold uppercase tracking-widest text-[10px] h-10 px-8 px-6 transition-all",
              filter === cat 
                ? "bg-[#12263a] text-white shadow-xl" 
                : "bg-white text-[#12263a] hover:bg-[#f8f5f0]"
            )}
          >
            {cat}
          </Button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-l border-t border-black/5"
      >
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative cursor-pointer overflow-hidden bg-[#12263a] border-r border-b border-black/5 aspect-square"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="h-full w-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12263a] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-all duration-500 flex flex-col justify-end p-8">
                <Badge className="bg-[#c5a059] text-white border-none rounded-[2px] w-fit mb-4 text-[8px] uppercase tracking-widest px-2">{image.category}</Badge>
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-serif italic text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{image.title}</h3>
                  <Maximize2 className="text-white h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-primary transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-10 w-10" />
            </button>
            <motion.div
              layoutId={selectedImage.id.toString()}
              className="relative max-h-full max-w-6xl overflow-hidden rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[85vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                   <ImageIcon className="h-5 w-5 text-primary" />
                   <span className="text-sm font-bold uppercase tracking-widest">{selectedImage.category}</span>
                </div>
                <h2 className="text-3xl font-bold">{selectedImage.title}</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
