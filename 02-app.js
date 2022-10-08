function checkAge(age) {
    if (age < 18) {
        const message = "Sorry, you're too young.";
    } else {
        const message = "Yay! You're old enough!";
    }
    return message;
    /* 
    aqui devuelve un error, porque la variable messaje nunca se ha definidos en el script, porque por el scope de las variables la variable message de if, es diferente a la variable message del else
    */
}
console.log(checkAge(21)); //🤔?