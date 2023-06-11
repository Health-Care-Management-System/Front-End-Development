import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patientview',
  templateUrl: './patientview.component.html',
  styleUrls: ['./patientview.component.css']
})
export class PatientviewComponent implements OnInit {
  selectedImage: File | undefined;
  name: string | undefined;
  city: string | undefined;
  pharmacycity: string | undefined;
  pharmacyname: string | undefined;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0] as File;
  }

  onUpload() {
    if (!this.selectedImage) {
      console.log('No image selected.');
      return;
    }

    const formData = new FormData();
    formData.append('image', this.selectedImage);
    formData.append('name', this.pharmacyname || '');
    formData.append('city', this.pharmacycity || '');

    this.http.post('http://localhost:8080/api7/upload-image', formData).subscribe(
      (response) => {
        console.log('Image uploaded successfully.');
        // Perform any additional actions after successful upload
      },
      (error) => {
        console.log('Error uploading image:', error);
      }
    );
  }
  
}