export class Doctor {

  id: string;
  name:string;
  firstname: string;
  lastname: string;
  dob: string;
  address: string;
  contactnumber: string;
  emailID: string;
  slmcnumber: string;
  image: any;
  imageapi: string;
  experience: String;


  constructor(id: string, name:string,firstname: string, lastname: string, dob: string, address: string, contactnumber: string, emailID: string, slmcnumber: string, image: any, imageapi: string, experience: String) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = dob;
    this.address = address;
    this.contactnumber = contactnumber;
    this.emailID = emailID;
    this.slmcnumber = slmcnumber;
    this.image = image;
    this.imageapi = imageapi;
    this.experience = experience;
  }
}
