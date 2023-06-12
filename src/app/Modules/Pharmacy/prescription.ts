import {Doctor} from "../Doctor/doctor";
import {Patient} from "../Patient/patient";
import {Time} from "@angular/common";

export class Prescription {


  prescriptionid:String;
  private doctor:Doctor;
  patient:Patient;
  date:Date;
  time:Time;
  description:String;
  response_state:String;


  constructor(prescriptionid: String, doctor: Doctor, patient: Patient, date: Date, time: Time, description: String, response_state: String) {
    this.prescriptionid = prescriptionid;
    this.doctor = doctor;
    this.patient = patient;
    this.date = date;
    this.time = time;
    this.description = description;
    this.response_state = response_state;
  }
}
