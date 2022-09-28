
function Horse(name){
    this.name = name
    this.stomach = []
}
Cat.prototype.eat = function(food) {
    this.stomach.push(food)
}

 export default Horse