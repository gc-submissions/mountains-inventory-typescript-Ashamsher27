export interface Mountain { 
    name: string; 
    height: number; 
}

export let mountains: Mountain[] = [
    {name: 'Kilimanjaro', height: 19341},
    {name: 'Everest', height: 29029},
    {name: 'Denali', height: 20310},
]

export function findNameOfTallestMountain (parameter1: Mountain[]) : string {
    let tallestMountain = parameter1[0]; 
    for (const param of parameter1) {
        if (param.height > tallestMountain.height) {
            tallestMountain = param; 
        }
    } 
    return tallestMountain.name;
}

let x = findNameOfTallestMountain(mountains);
console.log(x, " some shit");



export class Mountain2 { 
    name: string; 
    height: number; 

    constructor(name: string, height: number ){
        this.name = name;
        this.height = height;
    }

}

export class LittleMountain implements Mountain {
    name: string;
    height: number;
    trees: number;
    

    constructor(name: string, height: number, trees: number){
        this.name = name;
        this.height = height;
        this.trees = trees;
    }
}

let mOne = new LittleMountain('mr. mountain', 44, 5)
let mOne2 = new LittleMountain('mr. mountain2', 4434, 5)
let mOne3 = new LittleMountain('mr. mountain3', 44333, 5)
let meow: LittleMountain[] = [mOne, mOne2, mOne3]
console.table(meow);
let y = JSON.stringify(meow)
console.log(JSON.parse(y))

