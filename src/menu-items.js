import ZurekImage from './zurek.jpg';
import PierogiImage from './pierogi.jpg';
import KompotImage from './kompot.jpg';

class MenuItem {
    constructor(name, price, image) {
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

const pierogi = new MenuItem('Pierogi', '3 Euro', PierogiImage);
const zurek = new MenuItem('Zurek', '3 Euro', ZurekImage);
const kompot = new MenuItem('Kompot', '2 Euro', KompotImage);

const menuItemsList = [pierogi, zurek, kompot];
export {menuItemsList}