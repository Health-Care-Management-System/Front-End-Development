export class Patient {
    id: number;
    firstname: string;
    lastname: string;
    dob: string;
    address: string;
    contactnumber: string;
    emailID: string;
    image: any;
    imageapi: string;
  
    constructor(id: number,firstname: string,lastname: string,dob: string,address: string,contactnumber: string,emailID: string,image: any,imageapi: string){
      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.dob = dob;
      this.address = address;
      this.contactnumber = contactnumber;
      this.emailID = emailID;
      this.image = image;
      this.imageapi = imageapi;
    }
}
