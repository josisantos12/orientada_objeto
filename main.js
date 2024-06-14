class forma {
    constructor(color) {
      this.color = color;
    }
  
    abstract area();
  
    toString() {
      return `Shape with color ${this.color}`;
    }
  }
  class Retangulo extends forma {
    constructor(color, width, height) {
      super(color);
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  
    toString() {
      return `Retangulo com cor ${this.color}, width ${this.width} e altura ${this.height}`;
    }
  }
  class Circulo extends forma {
    constructor(color, radius) {
      super(color);
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius * this.radius;
    }
  
    toString() {
      return `circulo com cor ${this.color} e raio ${this.radius}`;
    }
  }
  const retangulo1 = new Retangulo("red", 4, 5);
console.log(retangulo1.toString()); 
console.log(retangulo1.area()); 

const circulo1 = new Circle("blue", 3);
console.log(circulo1.toString()); 
console.log(circulo1.area()); 

const retangulo2 = new Rectangle("green", 6, 8);
console.log(retangulo2.toString()); 
console.log(retangulo2.area()); 