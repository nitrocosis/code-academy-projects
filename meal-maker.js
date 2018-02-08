//TODO
// 2) Fix bug on line 66 (https://gist.github.com/simonblakemore/1e916a5e73dea1bb172f33a973fc4f43)

const menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],

        get appetizers() {
            return this._appetizers;
        },

        set appetizers(newAp) {
            this._appetizers = newAp;
        },


        get mains() {
            return this._mains;
        },

        set mains(newMains) {
            this._mains = newMains;
        },

        get desserts() {
            return this._desserts;
        },

        set desserts(newDessert) {
            this._desserts = newDessert;
        },

    },


    get courses() {
        return {
            appetizers: this._courses._appetizers,
            mains: this._courses._mains,
            desserts: this._courses._desserts,
        };
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };

        this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName]; // check if this line contains a bug
        const randomVar = Math.floor(Math.random() * dishes.length);
        return dishes[randomVar];
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const mains = this.getRandomDishFromCourse('mains');
        const desserts = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + mains.price + desserts.price;

        return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name}. The price is $${totalPrice.toFixed(2)}.`
    }

};


menu.addDishToCourse('_appetizers', 'Calamari', 14.99);
menu.addDishToCourse('_appetizers', 'Minestrone soup', 11.99);
menu.addDishToCourse('_appetizers', 'Salad', 8.99);

menu.addDishToCourse('_mains', 'Steak', 19.99);
menu.addDishToCourse('_mains', 'Lobster soup', 32.99);
menu.addDishToCourse('_mains', 'Spaghetti Bolognese', 15.99);

menu.addDishToCourse('_desserts', 'Salted Caramel Ice Cream', 7.99);
menu.addDishToCourse('_desserts', 'Chocolate Cake', 6.99);
menu.addDishToCourse('_desserts', 'Fruit Salad', 7.99);

let meal = menu.generateRandomMeal();
console.log(meal);
