import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const images = [
  { src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop", alt: "Puppy playing", category: "Dogs" },
  { src: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=600&h=600&fit=crop", alt: "Golden Retriever", category: "Dogs" },
  { src: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&h=400&fit=crop", alt: "British Shorthair", category: "Cats" },
  { src: "https://images.unsplash.com/photo-1583337130417-13104dec14a3?w=600&h=500&fit=crop", alt: "French Bulldog", category: "Dogs" },
  { src: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=600&h=400&fit=crop", alt: "Ragdoll kitten", category: "Cats" },
  { src: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&h=600&fit=crop", alt: "Spaniel outdoors", category: "Dogs" },
  { src: "https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?w=600&h=500&fit=crop", alt: "Maine Coon", category: "Cats" },
  { src: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=600&h=400&fit=crop", alt: "German Shepherd", category: "Dogs" },
  { src: "https://images.unsplash.com/photo-1579213838058-4a43b9761547?w=600&h=500&fit=crop", alt: "Labrador", category: "Dogs" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = filter === "All" ? images : images.filter((i) => i.category === filter);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-4xl font-bold">Gallery</h1>
        <p className="text-muted-foreground">A glimpse into our happy, healthy pets.</p>
      </div>

      <Tabs value={filter} onValueChange={setFilter} className="mb-8 flex justify-center">
        <TabsList>
          <TabsTrigger value="All">All</TabsTrigger>
          <TabsTrigger value="Dogs">Dogs</TabsTrigger>
          <TabsTrigger value="Cats">Cats</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((img, i) => (
          <motion.div
            key={img.src}
            className="mb-4 cursor-pointer overflow-hidden rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            onClick={() => setSelected(img.src)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none">
          <button
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-foreground/20 p-2 text-background backdrop-blur-sm transition-colors hover:bg-foreground/40"
          >
            <X className="h-5 w-5" />
          </button>
          {selected && (
            <img src={selected.replace(/w=\d+&h=\d+/, "w=1200&h=900")} alt="Enlarged pet" className="w-full rounded-xl object-cover" />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
