export const pennyToDollarConverter = (pennies) => {
    if (pennies < 10) {
        return `0.0${pennies}`;
    } else if (pennies < 100) {
        return `0.${pennies}`;
    } else if (pennies >= 100) {
        let insertionIndex = pennies.toString().length - 2;
        let convertedMoney = pennies.toString().split("")
        convertedMoney.splice(insertionIndex, 0, '.')
        return convertedMoney.join("");
    }
}

export const dollarToPennyConverter = (dollar) => {
    let formattedDollar = (dollar + '').replace(/[^\d.-]/g, '');
    if (formattedDollar && formattedDollar.includes('.')) {
        formattedDollar = formattedDollar.substring(0, formattedDollar.indexOf('.') + 3);
    }
  
    return formattedDollar ? Math.round(parseFloat(formattedDollar) * 100) : 0;
}