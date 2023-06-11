export class Hospital{
    hospitalid: number;
    name: string;
    registrationnumber :string;
    email:string;
    phonenumber:string;
    city:string;
    street:string;
    district:string;

    constructor( hospitalid: number,
        name:string,
        registrationnumber:string,
        email:string,
        phonenumber:string,
        city:string,
        street:string,
        district:string){
            
        this.hospitalid = hospitalid;
        this.name = name;
        this.registrationnumber = registrationnumber;
        this.email = email;
        this.phonenumber = phonenumber;
        this.city = city;
        this.street = street;
        this.district = district;
    }
    
}