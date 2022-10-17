const getList = ([x, ...y]) => [x, y]
/* segun yo devuelve [1, [2, 3, 4]] */

const getUser = user => ({ name: user.name, age: user.age })
/* 
aqui o da un error o solo devuelve el objeto
*/

/* 
Nota para devolver un objeto, con la sintaxis de arrowFuntions, se coloca los parentesis () y despues el objeto asi:

const fn = () => ({name: 'Angel', age: 18})

?ESTA ES UNA SINTAXIS INCORRECTA
const fn = () => {name: 'Angel', age: 18}

*/

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))