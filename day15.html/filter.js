
const products = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Mouse", category: "Electronics", price: 40 },
  { name: "Tablet", category: "Electronics", price: 150 },
  { name: "Notebook", category: "Stationery", price: 30 },
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Pen", category: "Stationery", price: 5 }
];

function showFilteredProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = products
    .filter(p => p.category === "Electronics" && p.price > 100)
    .map(p => `<li>${p.name} - $${p.price}</li>`)
    .join('');
}