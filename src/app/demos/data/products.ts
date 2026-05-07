export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Kouglof Traditionnel",
    description:
      "Le kouglof artisanal, icône de la pâtisserie alsacienne, préparé avec des raisins secs et des amandes torréfiées.",
    price: 14.9,
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop",
    category: "Pâtisseries",
    badge: "Populaire",
  },
  {
    id: 2,
    name: "Riesling Grand Cru",
    description:
      "Riesling Grand Cru d'Alsace, cépage noble aux arômes fruités et minéraux. Millésime sélectionné par nos soins.",
    price: 24.5,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
    category: "Vins",
  },
  {
    id: 3,
    name: "Munster Fermier AOP",
    description:
      "Fromage Munster fermier AOP affiné en cave, au goût puissant et à la texture fondante. Pièce d'environ 200g.",
    price: 8.9,
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400&h=300&fit=crop",
    category: "Fromages",
  },
  {
    id: 4,
    name: "Confiture de Quetsches",
    description:
      "Confiture artisanale de quetsches d'Alsace, cuite au chaudron en cuivre selon la tradition familiale.",
    price: 6.5,
    image: "https://images.unsplash.com/photo-1474440692706-2b98aec0bfbf?w=400&h=300&fit=crop",
    category: "Confitures",
  },
  {
    id: 5,
    name: "Pain d'Épices Artisanal",
    description:
      "Pain d'épices moelleux aux notes de cannelle et d'anis étoilé, recette transmise de génération en génération.",
    price: 9.9,
    image: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=400&h=300&fit=crop",
    category: "Pâtisseries",
    badge: "Nouveau",
  },
  {
    id: 6,
    name: "Gewurztraminer Vendanges Tardives",
    description:
      "Gewurztraminer vendanges tardives, vin liquoreux aux arômes de litchi, de rose et de fruits exotiques.",
    price: 32.0,
    image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=300&fit=crop",
    category: "Vins",
    badge: "Premium",
  },
];

export const categories = [
  "Tous",
  ...Array.from(new Set(products.map((p) => p.category))),
];
