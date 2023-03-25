/*function moneyBox(coins) {
    let savedCoins = 0;
    savedCoins += coins;
    console.log(`MoneyBox: S/.${savedCoins}`);
}

moneyBox(5);
moneyBox(5);*/ // No funciono para ahorrar pues con esta logica la variable no se guarda.

function moneyBox() {
    let savedCoins = 0;
    function countCoins(coins) {
        savedCoins += coins;
        console.log(`MoneyBox: S/.${savedCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);

myMoneyBox(10);

myMoneyBox(15);


const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(23);