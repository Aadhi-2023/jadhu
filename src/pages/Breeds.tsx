import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.5 } }),
};

const breeds = [
  { name: "Golden Retriever", size: "Large", temperament: "Friendly, Reliable", img: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=400&h=300&fit=crop", category: "Dogs" },
  { name: "French Bulldog", size: "Small", temperament: "Playful, Alert", img: "https://images.unsplash.com/photo-1583337130417-13104dec14a3?w=400&h=300&fit=crop", category: "Dogs" },
  { name: "Labrador Retriever", size: "Large", temperament: "Energetic, Gentle", img: "https://images.unsplash.com/photo-1579213838058-4a43b9761547?w=400&h=300&fit=crop", category: "Dogs" },
  { name: "Cavalier King Charles", size: "Small", temperament: "Affectionate, Calm", img: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=400&h=300&fit=crop", category: "Dogs" },
  { name: "German Shepherd", size: "Large", temperament: "Courageous, Smart", img: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=300&fit=crop", category: "Dogs" },
  { name: "Pomeranian", size: "Small", temperament: "Lively, Bold", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop", category: "Dogs" },
  { name: "British Shorthair", size: "Medium", temperament: "Easygoing, Quiet", img: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=300&fit=crop", category: "Cats" },
  { name: "Maine Coon", size: "Large", temperament: "Gentle, Sociable", img: "https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?w=400&h=300&fit=crop", category: "Cats" },
  { name: "Ragdoll", size: "Large", temperament: "Docile, Affectionate", img: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=400&h=300&fit=crop", category: "Cats" },
];

const Breeds = () => (
  <div className="mx-auto max-w-7xl px-6 py-16">
    <div className="mb-12 text-center">
      <h1 className="mb-3 text-4xl font-bold">Our Breeds</h1>
      <p className="text-muted-foreground">Discover the perfect companion for your family.</p>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {breeds.map((breed, i) => (
        <motion.div key={breed.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
          <Card className="group h-full overflow-hidden border-none transition-shadow hover:shadow-xl">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={breed.img} alt={breed.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
            </div>
            <CardContent className="p-5">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{breed.name}</h3>
                <Badge variant="secondary" className="text-xs">{breed.category}</Badge>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                <span className="rounded-full bg-secondary px-3 py-1">Size: {breed.size}</span>
                <span className="rounded-full bg-secondary px-3 py-1">{breed.temperament}</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Breeds;
