export class Pharmacyowner {

  ownerid:number;
  firstname : string;
  lastname : string;
  nic : string;
  email : string;
  phonenumber : string;
  city : string;
  street: string;
  district  : string;

  constructor(ownerid: number, firstname: string, lastname: string, nic: string, email: string, phonenumber: string, city: string, street: string, district: string) {
    this.ownerid = ownerid;
    this.firstname = firstname;
    this.lastname = lastname;
    this.nic = nic;
    this.email = email;
    this.phonenumber = phonenumber;
    this.city = city;
    this.street = street;
    this.district = district;
  }
}
