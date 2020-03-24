import {Payload} from './Payload';
export class Cargo implements Payload {

/*Defined in Astronaut.ts
Implements the Payload interface
Properties
massKg should be a number.
name should be a string.
Constructor
Parameter massKg should be a number.
Parameter name should be string.
Sets value of this.massKg and this.name*/
    massKg:number;
    material:string;

constructor(massKg: number, material: string) {
    this.massKg = massKg;
    this.material = material;
}
}

    