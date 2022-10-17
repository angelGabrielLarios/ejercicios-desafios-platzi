const person = {
    name: 'Lydia',
    age: 21,
};

for (const [x, y] of Object.entries(person)) {
    console.log(x, y); //🤔?
}

const yo = {
    nombre: 'Angel',
    edad: 18,
    dev: 'Frontend',
    genero: 'masculino'
}

console.log(yo)

console.log(Object.entries(yo));

for(const [key, value] of Object.entries(yo)) {
    console.log(`${key} -> ${value}`)
}