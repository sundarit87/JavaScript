fucntion Animal(name,energy){

	let animal = {}
	animal.name = name
	animal.energy = energy

	animal.eat = function(amount){
	console(`${this.name} is eating`)
	this.energy +=amount;
	}

	animal.sleep = function(length){
	console(`${this.name} is eating`)
	this.energy +=length;
	}

	animal.play = function(length){
	console(`${this.name} is playing`)
	this.energy -=length;
	}

	return animal;
}

const leo =Animal("leo",10)
//leo

const tiger = Animal("tiger",20)
//tiger