export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White Tee",
    price: 29.99,
    category: "Men",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A timeless classic made from 100% organic cotton. Breathable and durable.",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 89.99,
    category: "Men",
    image: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Vintage wash denim jacket with button closure and chest pockets.",
  },
  {
    id: 3,
    name: "Slim Fit Chinos",
    price: 49.99,
    category: "Men",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Versatile chinos that work for both casual and semi-formal occasions.",
  },
  {
    id: 4,
    name: "Black Hoodie",
    price: 59.99,
    category: "Men",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Heavyweight cotton blend hoodie for maximum comfort and warmth.",
  },
  {
    id: 5,
    name: "Summer Dress",
    price: 69.99,
    category: "Women",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Lightweight floral dress perfect for warm summer days.",
  },
  {
    id: 6,
    name: "Leather Boots",
    price: 129.99,
    category: "Women",
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Handcrafted leather boots that get better with age.",
  },
  {
    id: 7,
    name: "Striped Shirt",
    price: 39.99,
    category: "Women",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Casual striped button-down shirt made from linen blend.",
  },
  {
    id: 8,
    name: "Beanie Hat",
    price: 19.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Warm knit beanie available in multiple colors.",
  },
];
