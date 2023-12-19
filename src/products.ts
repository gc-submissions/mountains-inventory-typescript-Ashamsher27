export interface Product {
    name: string;
    price: number;
}

export let products: Product[] = [
    {name: 'item1', price: 12}, 
    {name: 'item2', price: 20}, 
    {name: 'item3', price: 33},
]

export function calcAverageProductPrice (parameter1: Product[]) : number {
    let averagePrice = 0; 

    if (parameter1.length === 0 ) {
        return 0; 
    }
    for (const product of parameter1) {
        averagePrice += product.price;
    }
    return averagePrice / parameter1.length
}

let x = calcAverageProductPrice(products);
console.log(x, " products");