const parent = {
    name: 'Stacy',
    age: 34,
    heritage: 'Irish'
}

const child = Object.create(parent)
child.name = 'Ryan'
child.age = 10

console.log(child.name)
console.log(child.age)
console.log(child.heritage)