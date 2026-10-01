export const restaurantInfo = {
  name: "Bink's Grill",
  rating: 4.3,
  reviewCount: 180,
  priceRange: "$10–20",
  phone: "(313) 631-3663",
  address: "18455 Livernois, Detroit, MI 48221",
  hours: "Open · Closes 9 PM",
  plusCode: "CVG5+Q8 Detroit, Michigan",
  serviceOptions: ["Dine-in", "Takeout", "Delivery"],
  accessibility: ["Wheelchair accessible entrance", "Wheelchair accessible parking lot"],
  popularFor: ["Lunch", "Solo dining"],
  offerings: ["Comfort food", "Quick bite", "Small plates"],
  diningOptions: ["Lunch", "Dinner", "Counter service", "Dessert"],
  atmosphere: "Casual",
  payments: ["Credit cards", "Debit cards"],
  parking: ["Free parking lot", "Free street parking", "Usually plenty of parking"],
};

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
};

export type MenuCategory = {
  category: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    category: "Signature Burgers",
    items: [
      {
        name: "The Bink's Classic",
        description: "Half-pound Angus beef patty, melted American cheese, crisp lettuce, tomato, onion, and house sauce on a toasted brioche bun.",
        price: "$12",
        image: "https://images.pexels.com/photos/5374420/pexels-photo-5374420.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        tag: "Most Popular",
      },
      {
        name: "Bacon Smokehouse Burger",
        description: "Thick-cut smoked bacon, cheddar cheese, caramelized onions, and smoky BBQ sauce stacked on a juicy Angus patty.",
        price: "$14",
        image: "https://images.pexels.com/photos/29455642/pexels-photo-29455642.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        name: "Flame-Grilled Deluxe",
        description: "Open-flame grilled patty with pepper jack cheese, sautéed mushrooms, and garlic aioli on a pretzel bun.",
        price: "$15",
        image: "https://images.pexels.com/photos/33858065/pexels-photo-33858065.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
    ],
  },
  {
    category: "Comfort Plates",
    items: [
      {
        name: "Crispy Chicken Wing Platter",
        description: "Golden-fried wings tossed in your choice of sauce — buffalo, BBQ, or garlic parmesan. Served with celery and blue cheese.",
        price: "$13",
        image: "https://images.pexels.com/photos/36750260/pexels-photo-36750260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        tag: "Fan Favorite",
      },
      {
        name: "Loaded Cheese Fries",
        description: "Crispy fries piled high with melted cheddar, crumbled bacon, scallions, and a drizzle of house ranch.",
        price: "$9",
        image: "https://images.pexels.com/photos/20535803/pexels-photo-20535803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        name: "Bacon Mac & Cheese",
        description: "Creamy three-cheese macaroni baked with crispy bacon bits and a toasted breadcrumb crust.",
        price: "$11",
        image: "https://images.pexels.com/photos/12916866/pexels-photo-12916866.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
    ],
  },
  {
    category: "Small Plates & Sides",
    items: [
      {
        name: "Cheese Fries",
        description: "Golden fries smothered in melted cheese sauce. Simple, satisfying, and perfect for sharing.",
        price: "$7",
        image: "https://images.pexels.com/photos/19904790/pexels-photo-19904790.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        name: "Grilled Meat Sampler",
        description: "A trio of grilled bites — brisket, sausage, and pulled chicken — served with house pickles and toast.",
        price: "$16",
        image: "https://images.pexels.com/photos/37128330/pexels-photo-37128330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        name: "Hearty Beef Stew",
        description: "Slow-cooked beef and root vegetables in a rich broth, served with crispy croquettes on the side.",
        price: "$10",
        image: "https://images.pexels.com/photos/38750885/pexels-photo-38750885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Triple Chocolate Cake",
        description: "Layers of rich chocolate cake with silky chocolate ganache and a fresh strawberry garnish.",
        price: "$8",
        image: "https://images.pexels.com/photos/12927134/pexels-photo-12927134.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        tag: "Sweet Pick",
      },
      {
        name: "Classic Breakfast Plate",
        description: "Sunny-side-up eggs, crispy bacon, buttered toast, and a hot cup of coffee — available all day.",
        price: "$10",
        image: "https://images.pexels.com/photos/5840085/pexels-photo-5840085.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        name: "Braised Beef Mash",
        description: "Tender braised beef over creamy whipped mashed potatoes, finished with microgreens and radish.",
        price: "$14",
        image: "https://images.pexels.com/photos/37794985/pexels-photo-37794985.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
    ],
  },
];

export type Review = {
  author: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
};

export const reviews: Review[] = [
  {
    author: "Marcus Johnson",
    rating: 5,
    date: "2 weeks ago",
    text: "Best burger spot in Detroit, hands down. The Bink's Classic is juicy, the brioche bun is fresh, and the house sauce ties it all together. I come here for lunch at least twice a week.",
    avatar: "MJ",
  },
  {
    author: "Tanya Williams",
    rating: 5,
    date: "1 month ago",
    text: "The loaded cheese fries are unreal — melted cheddar, bacon, and that house ranch drizzle. Service is quick and the vibe is super casual. Perfect solo dining spot.",
    avatar: "TW",
  },
  {
    author: "Derek Coleman",
    rating: 5,
    date: "1 month ago",
    text: "Came in with my family for dinner and everyone left happy. The wings were crispy and tossed in the buffalo sauce perfectly. Plenty of parking and wheelchair accessible too.",
    avatar: "DC",
  },
  {
    author: "Aisha Brooks",
    rating: 5,
    date: "2 months ago",
    text: "The bacon mac and cheese is comfort food heaven. Baked with that crispy breadcrumb top and real bacon. I dream about this dish. Highly recommend for a quick bite.",
    avatar: "AB",
  },
  {
    author: "Robert Hayes",
    rating: 5,
    date: "3 months ago",
    text: "Flame-grilled deluxe burger was cooked to perfection — the pepper jack and garlic aioli combo is something else. Counter service is fast and the staff is friendly. Five stars.",
    avatar: "RH",
  },
  {
    author: "Nicole Davis",
    rating: 5,
    date: "3 months ago",
    text: "The triple chocolate cake is the best dessert I've had in the city. Rich, moist, and not too sweet. Bink's Grill never disappoints — great food at a great price.",
    avatar: "ND",
  },
];
