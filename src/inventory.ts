import { Product } from "./products";

export interface InventoryItem {
    product: Product;
    quantity: number;
}

export let inventory: InventoryItem[] = [
    {product: {name: 'motor', price: 10.00}, quantity: 10,},
    {product: {name: 'sensor', price: 12.50}, quantity: 4,},
    {product: {name: 'LED', price: 1.00}, quantity: 20,}    
]

export function calcInventoryValue (parameter1: InventoryItem[]) : number {
    if (parameter1.length === 0 ) return 0; 

    return parameter1.reduce((total, item) => total + item.product.price * item.quantity, 0); 
}

let x = calcInventoryValue(inventory);
console.log(x, " inventory thing");