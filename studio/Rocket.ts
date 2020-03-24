import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";
export class Rocket {
        totalCapacityKg:number;
        name:string;
        cargoItems:Cargo[];
        astronauts:Astronaut[];
    
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
        sumMass( items: Payload[] ): number {
            //return sum of all items massKg property
            //let sum = 0;
            //for(items in cargo) {
            //    sum += items.massKg
            //}
            return 5;
        }
        currentMassKg(): number {
            return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
            //use this.sumMAss to return the combined mass of this.astronauts and this.cargoItems
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