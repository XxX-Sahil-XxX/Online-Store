import { sql } from "../config/db.js";

const SAMPLE_PRODUCTS = [
  {
    name: "Gaming Headphones",
    price: 5000,
    image:
      "https://images.unsplash.com/photo-1592375601764-5dd6be536f99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FtaW5nJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Mechanical Keyboard",
    price: 7000,
    image:
      "https://images.unsplash.com/photo-1613297252595-a0d18450d85a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lY2hhbmljYWwlMjBrZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Smart Watch",
    price: 2000,
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Gaming Mouse",
    price: 1000,
    image:
      "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Minimalist Backpack",
    price: 500,
    image:
      "https://plus.unsplash.com/premium_photo-1723649902660-66643962d57b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1pbmltYWxpc3QlMjBiYWdwYWNrfGVufDB8fDB8fHww",
  },
  {
    name: "Smart TV",
    price: 10000,
    image:
      "https://plus.unsplash.com/premium_photo-1664302149029-50514758ed8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21hcnQlMjB0dnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Smart Home Speaker",
    price: 800,
    image:
      "https://images.unsplash.com/photo-1511842745775-b366af36db2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjBzcGVha2VyfGVufDB8fDB8fHww",
  },
  {
    name: "OLED Gaming Monitor",
    price: 4000,
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG9sZWQlMjBnYW1pbmclMjBtb25pdG9yfGVufDB8fDB8fHww",
  },
  {
    name: "4K Ultra HD Camera",
    price: 20000,
    image:
      "https://plus.unsplash.com/premium_photo-1709371824843-2b72258fbd71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVsdHJhJTIwaGQlMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
  },
];

async function seedDatabase() {
  try {
    // first, clear existing data
    await sql`TRUNCATE TABLE products RESTART IDENTITY`;

    // insert all products
    for (const product of SAMPLE_PRODUCTS) {
      await sql`
        INSERT INTO products (name, price, image)
        VALUES (${product.name}, ${product.price}, ${product.image})
      `;
    }

    console.log("Database seeded successfully");
    process.exit(0); // success code
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1); // failure code
  }
}

seedDatabase();
