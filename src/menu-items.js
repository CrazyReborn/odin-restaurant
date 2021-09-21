import PancakeBananaImg from './pancake-banana.jpg';
import PancakeBlueberryImg from './pancake-blueberry.jpg';
import PancakeRaspberryImg from './pancake-raspberry.jpg';

class MenuItem {
    constructor(name, price, image) {
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

const pancakeBanana = new MenuItem('Pancake With Banana Topping', '3 Euro', PancakeBananaImg);
const pancakeBlueberry = new MenuItem('Pancake With Blueberry Topping', '3 Euro', PancakeBlueberryImg);
const pancakeRaspeberry = new MenuItem('Pancake With Raspberry Topping', '2 Euro', PancakeRaspberryImg);

const menuItemsList = [pancakeBanana, pancakeBlueberry, pancakeRaspeberry];
export {menuItemsList}