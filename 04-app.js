function sum(num1, num2 = num1) {
    console.log(num1 + num2);
}
sum(10); // imprime en consola el numero 20
//🤔?

/* 
?Explicación del codigo

Desde ES6 es posible usar parámetros por defecto (siempre y cuando sean los últimos declarados en la función).

En este caso el parámetro por defecto num1 es el mismo que el primer parámetro, no hay ningun problema simpre y cuando este declarado al final de la lista de parámetros de la función.

Pasamos el argumento 10 a la función sum, esto significa que num2 deberá usar su valor por defecto que seria el mismo de num1, osea 10; entonces 10 + 10 nos da el resultado final 20.
*/

/* aqui lanza un NaN(Not a Number) */

sum()