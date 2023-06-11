export class Doctor {

  doc_id: string;
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


  constructor(doc_id: string, firstname: string, lastname: string, dob: string, address: string, contactnumber: string, emailID: string, slmcnumber: string, image: any, imageapi: string, experience: String) {
    this.doc_id = doc_id;
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
