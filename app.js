const controller = require('./controller/person')

const p = {nom: 'Perrin Emmanuel Nzaou', age: 23, favoriteFoods: ['burritos', 'pizza']}
const TableauPersonnes = [
    { nom: 'John', age: 30, favoriteFoods: ['Burgers', 'Salad'] },
    { nom: 'Mary', age: 22, favoriteFoods: ['Pasta'] },
    { nom: 'Mike', age: 35, favoriteFoods: ['Steak', 'Fries'] },
    { nom: 'Alice', age: 28, favoriteFoods: ['Pizza', 'Ice Cream'] },
    { nom: 'Bob', age: 40, favoriteFoods: ['Sushi', 'Burritos'] },
    { nom: 'Carol', age: 25, favoriteFoods: ['Salmon', 'Avocado Toast'] },
    { nom: 'David', age: 32, favoriteFoods: ['Pancakes', 'Bacon'] },
    { nom: 'Eve', age: 27, favoriteFoods: ['Chocolate', 'Cookies'] },
    { nom: 'Frank', age: 29, favoriteFoods: ['Chicken', 'Waffles'] },
    { nom: 'Grace', age: 34, favoriteFoods: ['Pasta', 'Garlic Bread'] },
    { nom: 'Hank', age: 45, favoriteFoods: ['Ribs', 'Cornbread'] },
    { nom: 'Ivy', age: 21, favoriteFoods: ['Sushi', 'Tempura'] },
    { nom: 'Jack', age: 50, favoriteFoods: ['Tacos', 'Quesadillas'] },
    { nom: 'Kim', age: 26, favoriteFoods: ['Pad Thai', 'Spring Rolls'] },
    { nom: 'Leo', age: 31, favoriteFoods: ['Burgers', 'Fries'] },
    { nom: 'Mona', age: 29, favoriteFoods: ['Falafel', 'Hummus'] },
    { nom: 'Nate', age: 33, favoriteFoods: ['Pizza', 'Mozzarella Sticks'] },
    { nom: 'Olga', age: 36, favoriteFoods: ['Pasta', 'Meatballs'] },
    { nom: 'Paul', age: 38, favoriteFoods: ['Chicken Wings', 'Nachos'] },
    { nom: 'Quincy', age: 24, favoriteFoods: ['Biryani', 'Naan'] },
    { nom: 'Rita', age: 27, favoriteFoods: ['Samosas', 'Chutney'] },
    { nom: 'Steve', age: 41, favoriteFoods: ['Fish and Chips', 'Mushy Peas'] },
    { nom: 'Tina', age: 22, favoriteFoods: ['Pho', 'Banh Mi'] },
    { nom: 'Uma', age: 35, favoriteFoods: ['Kebabs', 'Tabbouleh'] },
    { nom: 'Victor', age: 39, favoriteFoods: ['Goulash', 'Dumplings'] },
    { nom: 'Wendy', age: 28, favoriteFoods: ['Shawarma', 'Baklava'] },
    { nom: 'Xander', age: 30, favoriteFoods: ['Paella', 'Churros'] },
    { nom: 'Yara', age: 26, favoriteFoods: ['Dim Sum', 'Peking Duck'] },
    { nom: 'Zane', age: 32, favoriteFoods: ['Bulgogi', 'Kimchi'] }
];

//controller.createPerson(p)
//controller.createManyPersons(TableauPersonnes)
//controller.findByName('Mary')
//controller.findByFavoriteFood('Chocolate')
//controller.findById('6654f42a01434dc24c597dd5')
//controller.findEditThenSave('6654f42a01434dc24c597dd5')
//controller.updateAge('Perrin Emmanuel Nzaou')
//controller.deletePerson('6654f4dbd3f632774e41a636')
//controller.deleteManyPersons()
controller.search()