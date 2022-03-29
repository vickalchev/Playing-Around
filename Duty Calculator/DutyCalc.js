const dutyRates = {
    faucets: 0.2,
    interiorDecor: 0.3,
    candles: 0.1,
    electronics: 0.4,
    accessories: 0.1, 
};

const product = {
    name: 'lamp',
    category: 'interiorDecor',
    baseCost: 100,
};

const calcDuty = () => {
    if(dutyRates.hasOwnProperty(product.category))
        //👇🏼 calculates the duty. 
        return product.baseCost*dutyRates[product.category];
    else 
        console.log(`Error! Category not found!`);
    
}

const calcTax = () => {
    const taxRate = 0.13;
    return product.baseCost*taxRate;
}

const calcMarkup = (markupRate) => {
    return (product.baseCost + calcDuty() + calcTax())*markupRate;
}

const price = () => {
    return product.baseCost + calcDuty() + calcTax() + calcMarkup(1);
}

console.log(` Breakdown:
    Base Cost: ${product.baseCost};
    Duty: ${calcDuty()}
    Tax: ${calcTax()}
    Markup: ${calcMarkup(1)}
    Total Price: ${price()}`);

