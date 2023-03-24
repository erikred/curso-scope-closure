function greeting(){
    let userName = 'Ana'; // Function Scope
    console.log(userName);

    if(userName === 'Ana'){
        console.log(`Hello ${userName}!`);
    }
}

greeting();

console.log(userName); // No se puede llamar fuera de la funcion