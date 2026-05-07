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
      "Le kouglof artisanal, icône de la pâtisserie alsacienne, préparé avec des raisins secs et des amandes.",
    price: 14.9,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
    category: "Pâtisseries",
    badge: "Populaire",
  },
  {
    id: 2,
    name: "Vin Riesling Grand Cru",
    description:
      "Riesling Grand Cru d'Alsace, cépage noble aux arômes fruités et minéraux. Millésime sélectionné.",
    price: 24.5,
    image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400&h=300&fit=crop",
    category: "Vins",
  },
  {
    id: 3,
    name: "Munster Fermier AOP",
    description:
      "Fromage Munster fermier AOP affiné en cave, au goût puissant et à la texture fondante.",
    price: 8.9,
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=300&fit=crop",
    category: "Fromages",
  },
  {
    id: 4,
    name: "Confiture de Quetsches",
    description:
      "Confiture artisanale de quetsches d'Alsace, cuite au chaudron en cuivre selon la tradition.",
    price: 6.5,
    image: "https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=400&h=300&fit=crop",
    category: "Confitures",
  },
  {
    id: 5,
    name: "Pain d'Épices Artisanal",
    description:
      "Pain d'épices moelleux aux notes de cannelle et d'anis étoilé, recette traditionnelle alsacienne.",
    price: 9.9,
    image: "https://images.unsplash.com/photo-1549931319-a545753467c8?w=400&h=300&fit=crop",
    category: "Pâtisseries",
    badge: "Nouveau",
  },
  {
    id: 6,
    name: "Gewurztraminer Vendanges Tardives",
    description:
      "Gewurztraminer vendanges tardives, vin liquoreux aux arômes de litchi et de rose.",
    price: 32.0,
    image: "https://images.unsplash.com/photo-1566995541428-f4e789bf7684?w=400&h=300&fit=crop",
    category: "Vins",
    badge: "Premium",
  },
];

export const categories = [
  "Tous",
  ...Array.from(new Set(products.map((p) => p.category))),
];
