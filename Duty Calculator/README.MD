# Product Price Calculator

## Description

This app calculates the sale price of an imported product by applying a markup, taxes and duties. Each product falls into a category. Each category has a different import duty. Hence, the import duty has to be calculated based on the product category. Also, we want to calculate shipping rates, which also will vary by category.

## Pseudocode

1. Create an object `dutyRates` that holds the product categories and their duty rates.

2. Create an object, `product`, with properties `name`, `category`, `baseCost`.

3. Create a function `calcDuty` that gets the base cost, the appropriate duty rate and calculates the appropriate duty to be paid. The function returns the product. The function has no parameters.

4. Create a function `calcTax` that gets the base cost and calculates a tax rate. Create a variable, `taxRate`, within the scope of the function that gets the tax rate. The function returns the tax.

5. Create a function, `calcMarkup` that adds up base cost, duty and tax and calculates a markup. The markup will be the parameter of this function. It returns the markup value.

6. Create a function, `price`, that calculates the final price by adding: base cost, the duty, the tax and the markup. It returns the final price.
