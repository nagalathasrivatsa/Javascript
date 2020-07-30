class Emp {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  getName() {
    return this.name;
  }
}

let x = new Emp("Latha", 12);
console.log(x.getName());
