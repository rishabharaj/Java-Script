let rishabh = {};
rishabh.name = "Rishabh";
rishabh.age = 21;
rishabh.city = "Indore";
rishabh.getDetails = function() {
    return `${this.name}, ${this.age} years old, from ${this.city}`;
};
console.log(rishabh.getDetails());
console.log(rishabh);
