export class Doctor {

    id:number;
    firstname:string;
    lastname:string;
    dob:string;
    address:string;
    contactnumber:number;
    emailID:string;
    slmcnumber:number;
  
    constructor(id: number, firstname: string, lastname: string, dob: string, address: string, contactnumber: number, emailID: string, slmcnumber: number) {
      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.dob = dob;
      this.address = address;
      this.contactnumber = contactnumber;
      this.emailID = emailID;
      this.slmcnumber = slmcnumber;
    }
  }
  
