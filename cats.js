import Mouse from './mouse.js';
const mouse = new Mouse()
function Cat(name){
    this.name = name
    this.stomach = []
}
Cat.prototype.eat = function(mouse) {
    this.stomach.push(mouse)
}

 export default Cat