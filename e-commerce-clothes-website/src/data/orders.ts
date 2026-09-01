export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  date: string;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  total: number;
  items: {
    productId: number;
    name: string;
    quantity: number;
    price: number;
  }[];
}

export const orders: Order[] = [
  {
    id: "ORD-001",
    customerName: "Alex Johnson",
    customerEmail: "alex@example.com",
    date: "2024-03-10",
    status: "Delivered",
    total: 89.98,
    items: [
      { productId: 1, name: "Classic White Tee", quantity: 1, price: 29.99 },
      { productId: 4, name: "Black Hoodie", quantity: 1, price: 59.99 }
    ]
  },
  {
    id: "ORD-002",
    customerName: "Sam Smith",
    customerEmail: "sam@example.com",
    date: "2024-03-12",
    status: "Processing",
    total: 129.99,
    items: [
      { productId: 6, name: "Leather Boots", quantity: 1, price: 129.99 }
    ]
  },
  {
    id: "ORD-003",
    customerName: "Taylor Doe",
    customerEmail: "taylor@example.com",
    date: "2024-03-15",
    status: "Pending",
    total: 49.99,
    items: [
      { productId: 3, name: "Slim Fit Chinos", quantity: 1, price: 49.99 }
    ]
  }
];
