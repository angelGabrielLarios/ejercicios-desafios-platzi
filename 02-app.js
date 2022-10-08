function checkAge(age) {
    if (age < 18) {
        const message = "Sorry, you're too young.";
        return message
    } else {
        const message = "Yay! You're old enough!";
        return message

    }
    /*return message; */
}
console.log(checkAge(21)); //🤔?