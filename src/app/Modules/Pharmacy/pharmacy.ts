import {Pharmacyowner} from "./pharmacyowner";

export class Pharmacy {

  pharmacyid: number;
  pharmacyOwner: Pharmacyowner;
  pharmacyname : string;
  registrationnumber : string;
  email : string;
  phonenumber : string;
  city : string;
  street : string;
  district : string;

  constructor(pharmacyid: number, pharmacyOwner: Pharmacyowner, pharmacyname: string, registrationnumber: string, email: string, phonenumber: string, city: string, street: string, district: string) {
    this.pharmacyid = pharmacyid;
    this.pharmacyOwner = pharmacyOwner;
    this.pharmacyname = pharmacyname;
    this.registrationnumber = registrationnumber;
    this.email = email;
    this.phonenumber = phonenumber;
    this.city = city;
    this.street = street;
    this.district = district;
  }

}
