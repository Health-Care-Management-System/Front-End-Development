export class Availability {

   id: number;
   day: string;
   availability : boolean;
   timeInterval : string;

   constructor(id: number,day:string,availability:boolean,timeInterval:string){
    this.id = id;
    this.day = day;
    this.availability = availability;
    this.timeInterval = timeInterval;
   }
   
}


