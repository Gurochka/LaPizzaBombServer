const db = {
  categories: [
    { id: 1, title: 'Pizza' },
    { id: 2, title: 'Drinks' },
    { id: 3, title: 'Snacks'}
  ],
  diameters: [25, 30],
  goods: [{
    id: 1,
    title: 'Pepperoni Fresh with tomatoes',
    price: [4, 6.25],
    categoryId: 1,
    image_url: 'src/public/images/goods/Pepperoni Fresh with tomatoes.jpeg',
    components: [5, 1, 2, 7],
    weight: [410, 610]
  },{
    id: 2,
    title: 'Asian Shrimp pizza',
    price: [6.25, 8],
    categoryId: 1,
    image_url: 'src/public/images/goods/Asian_shrimp_pizza.jpg',
    components: [9, 1, 0, 5, 11],
    weight: [380, 550]
  },{
    id: 3,
    title: 'Barbecue chicken pizza',
    price: [7, 8.5],
    categoryId: 1,
    image_url: 'src/public/images/goods/Barbecue_chicken_pizza.jpg',
    components: [8, 14, 5, 6, 1, 3],
    weight: [450, 670]    
  },{
    id: 4,
    title: 'Cheese chicken pizza',
    price: [6.25, 7.25],
    categoryId: 1,
    image_url: 'src/public/images/goods/Cheese_chicken_pizza.jpg',
    components: [8, 15, 1, 7],
    weight: [410, 630]    
  },{
    id: 5,
    title: 'Double Pepperoni pizza',
    price: [6, 8],
    categoryId: 1,
    image_url: 'src/public/images/goods/Double_Pepperoni_pizza.jpg',
    components: [1, 2, 5],
    weight: [420, 630]
  },{
    id: 6,
    title: 'Four cheeses pizza',
    price: [6.25, 8.2],
    categoryId: 1,
    image_url: 'src/public/images/goods/Four_cheeses_pizza.jpg',
    components: [1, 16, 17, 18, 10],
    weight: [350, 520]
  },{
    id: 7,
    title: 'Ham and cheese pizza',
    price: [4.5, 6.25],
    categoryId: 1,
    image_url: 'src/public/images/goods/ham_cheese_pizza.jpg',
    components: [1, 19, 10],
    weight: [340, 500]
  },{
    id: 8,
    title: 'Ham and Mushrooms pizza',
    price: [4.25, 6],
    categoryId: 1,
    image_url: 'src/public/images/goods/Ham_mushrooms_pizza.jpeg',
    components: [1, 19, 5, 9],
    weight: [410, 600]
  },{
    id: 9,
    title: 'Italian pizza',
    price: [5, 7.25],
    categoryId: 1,
    image_url: 'src/public/images/goods/Italian_pizza.jpg',
    components: [1, 20, 2, 5, 9, 21],
    weight: [390, 570]
  },{
    id: 10,
    title: 'Marguerite pizza',
    price: [6, 8.15],
    categoryId: 1,
    image_url: 'src/public/images/goods/Marguerite_pizza.jpg',
    components: [1, 20, 5, 7],
    weight: [420, 620]
  },{
    id: 11,
    title: 'Meat pizza',
    price: [4.25, 6],
    categoryId: 1,
    image_url: 'src/public/images/goods/Meat_pizza.jpg',
    components: [1, 8, 19, 2, 5, 22],
    weight: [410, 600]
  },{
    id: 12,
    title: 'Pepperoni pizza',
    price: [4.25, 6],
    categoryId: 1,
    image_url: 'src/public/images/goods/Pepperoni_pizza.jpg',
    components: [1, 2, 5],
    weight: [390, 570]
  },{
    id: 13,
    title: 'Spanish chorizo pizza',
    price: [4.25, 6],
    categoryId: 1,
    image_url: 'src/public/images/goods/Spanish_chorizo_sausages_pizza.jpeg',
    components: [1, 22, 7, 14],
    weight: [350, 520]
  },{
    id: 14,
    title: 'Supermeat',
    price: [6.5, 8.75],
    categoryId: 1,
    image_url: 'src/public/images/goods/Super_meat_pizza.jpg',
    components: [1, 8, 23, 2, 5, 22, 19],
    weight: [440, 650]
  },{
    id: 15,
    title: 'Vegetables and mushrooms',
    price: [4.25, 6.25],
    categoryId: 1,
    image_url: 'src/public/images/goods/Vegetables_mushrooms_pizza.jpg',
    components: [1, 20, 16, 5, 9, 6, 21, 7],
    weight: [460, 680]
  },{
    id: 16,
    title: 'Coca-cola Zero',
    price: 1.5,
    categoryId: 2,
    image_url: 'src/public/images/goods/colazero.jpg',
    components: [],
    weight: 0.5
  },{
    id: 17,
    title: 'Orange Juice',
    price: 1.2,
    categoryId: 2,
    image_url: 'src/public/images/goods/juice1.jpg',
    components: [],
    weight: 1
  },{
    id: 18,
    title: 'Apple Juice',
    price: 1.2,
    categoryId: 2,
    image_url: 'src/public/images/goods/juice2.jpg',
    components: [],
    weight: 1
  },{
    id: 19,
    title: 'Schweppes bitter lemon',
    price: 1.35,
    categoryId: 2,
    image_url: 'src/public/images/goods/schwepps.jpeg',
    components: [],
    weight: 0.33
  },{
    id: 20,
    title: 'Sprite',
    price: 1.5,
    categoryId: 2,
    image_url: 'src/public/images/goods/sprite.jpg',
    components: [],
    weight: 0.5
  },{
    id: 21,
    title: 'Fuztea with camommile',
    price: 1.5,
    categoryId: 2,
    image_url: 'src/public/images/goods/tea.jpg',
    weight: 0.5
  },{
    id: 22,
    title: 'BonAqua pure water',
    price: 1.25,
    categoryId: 2,
    image_url: 'src/public/images/goods/water.jpg',
    weight: 0.5
  },{
    id: 24,
    title: 'Chicken wings, large protion',
    description: 'Baked chicken wings in a marinade of barbecue sauce',
    price: 5.25,
    categoryId: 3,
    image_url: 'src/public/images/goods/chickenbig.jpg',
    weight: 340
  },{
    id: 23,
    title: 'Chicken wings, regular portion',
    price: 3.5,
    description: 'Baked chicken wings in a marinade of barbecue sauce',
    categoryId: 3,
    image_url: 'src/public/images/goods/chicken1.jpeg',
    weight: 200
  },{
    id: 25,
    title: 'Fried potato',
    description: 'Baked potatoes with Italian herbs.',
    price: 2.75,
    categoryId: 3,
    image_url: 'src/public/images/goods/friedpotato.jpeg'
  },{
    id: 26,
    title: 'Meat Starter',
    description: 'Hot appetizer with beef meatballs, tomatoes, mozzarella and chipotle sauce in a thin wheat tortilla',
    price: 2.95,
    categoryId: 3,
    image_url: 'src/public/images/goods/snack.jpg'
  }],
  components: [
    { id: 1, title: 'mozarella', price: 0.8 },
    { id: 17, title: 'blue cheese', price: 0.8 },
    { id: 16, title: 'chedder', price: 0.8 },
    { id: 18, title: 'parmesan', price: 1 },
    
    { id: 2, title: 'pepperoni', price: 0.8 },
    { id: 3, title: 'bacon', price: 0.8 },
    { id: 8, title: 'chicken', price: 0.8 }, 
    { id: 0, title: 'shrimps', price: 0.8 }, 
    { id: 19, title: 'ham', price: 0.8 },
    { id: 22, title: 'choriso', price: 0.8 },
    { id: 23, title: 'beef meatballs', price: 0.8 },
    
    { id: 4, title: 'meat sauce', price: 0.8 },
    { id: 5, title: 'tomato sauce', price: 0.8 },
    { id: 10, title: 'sour cream sauce', price: 0.8 },
    { id: 14, title: 'barbecue sauce', price: 0.8 },
    { id: 15, title: 'cheese sauce', price: 0.8 },

    { id: 6, title: 'red pepper', price: 0.8 },
    { id: 7, title: 'tomatoes', price: 0.8 },
    { id: 9, title: 'mushrooms', price: 0.8 },
    { id: 11, title: 'sesame', price: 0.8 },

    { id: 20, title: 'italian spices', price: 0.8 },
    { id: 21, title: 'olives', price: 0.8 },
  ]
}

module.exports = db;