// let array = [2,3,4,'f','w','y'];
// console.log(array);
// for (let value = 0; value < array.length; value++ ){
//     console.log(array[value]);
// }


/**
 * oops - object oriente₫ programming
 */

class CaddCentre {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`the name is ${this.name} and his age is ${this.age}`);
    }
}

let staff = new CaddCentre('dilshad', 3);

staff.introduce();

let student = new CaddCentre('revanth', 5);
student.introduce();

class livewire extends CaddCentre {
    put_wishes(wish) {
        this.wish = wish;
    }

    get_wishes() {
        console.log(this.wish);
    }
}

let ojha = new livewire('ojha', 8);
ojha.introduce();

let my_wishes = new livewire();
my_wishes.put_wishes('to get a good job after completing course');
my_wishes.get_wishes();