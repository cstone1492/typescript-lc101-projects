import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";
export class Rocket implements Payload {
        totalCapacityKg:number;
        name:string;
        cargoItems:Cargo[] = [];
        astronauts:Astronaut[] = [];
        massKg:number;

    
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
        sumMass( items: Payload[] ): number {
            //return sum of all items massKg property
            let sum:number = 0;
            for(let i in items) {
                sum += items[i].massKg;
            }
            return sum;
        }
        currentMassKg(): number {
            return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
            //use this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        }
        canAdd(item: Payload): boolean {
            return (this.currentMassKg() + item.massKg <= this.totalCapacityKg)
        }
        addCargo(cargo: Cargo): boolean {
            //Uses this.canAdd() to see if another item can be added.
            if (this.canAdd(cargo)) {
                this.cargoItems.push(cargo);
                return true;
            } else {
                return false;
            }
            //If true, adds cargo to this.cargoItems and returns true.
            //If false, returns false.
        }
        addAstronaut(astronaut: Astronaut): boolean {
            if (this.canAdd(astronaut)) {
                this.astronauts.push(astronaut);
                return true;
            } else {
                return false;
            }
            //Uses this.canAdd() to see if another astronaut can be added.
            //If true, adds astronaut to this.astronauts and returns true.
            //If false, returns false 
        }
    }