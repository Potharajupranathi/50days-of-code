const allStocks = [
  { symbol: 'AAPL', price: 145.09, name: 'Apple Inc.', category: 'Electronics' },
  { symbol: 'MSFT', price: 295.71, name: 'Microsoft Corp.', category: 'Electronics' },
  { symbol: 'SONY', price: 85.23, name: 'Sony Corp.', category: 'Electronics' },
  { symbol: 'NVDA', price: 195.34, name: 'NVIDIA Corp.', category: 'Electronics' },
  { symbol: 'TSM', price: 95.67, name: 'Taiwan Semiconductor', category: 'Electronics' },
  { symbol: 'JPM', price: 135.50, name: 'JPMorgan Chase', category: 'Finance' },
  { symbol: 'V', price: 210.10, name: 'Visa Inc.', category: 'Finance' },
  { symbol: 'AMZN', price: 120.50, name: 'Amazon.com, Inc.', category: 'Retail' },
  { symbol: 'WMT', price: 150.00, name: 'Walmart Inc.', category: 'Retail' },
  { symbol: 'GOOGL', price: 135.00, name: 'Alphabet Inc.', category: 'Technology' },
  { symbol: 'INTC', price: 55.60, name: 'Intel Corporation', category: 'Electronics' },
  { symbol: 'CRM', price: 250.20, name: 'Salesforce.com', category: 'Technology' },
];

// 1. All products array
const allProducts = allStocks.map(stock =>  `${stock.name} (${stock.category}): $${stock.price.toFixed(2)}`);
console.log('--- All products ---');
console.log(allProducts);

// 2. Electronics products array
const electronicsProducts = allStocks
  .filter(stock => stock.category === 'Electronics')
  .map(stock => ` ${stock.symbol}:$${stock.name}: $${stock.price.toFixed(2)}`);
console.log('--- Electronics products ---');
console.log(electronicsProducts);

// 3. Electronics products above $100 array
const electronicsAbove100 = allStocks
  .filter(stock => stock.category === 'Electronics' && stock.price > 100)
  .map(stock => `${stock.symbol}: $${stock.name}: $${stock.price.toFixed(2)}`);
console.log('--- Electronics products above $100 ---');
console.log(electronicsAbove100);

