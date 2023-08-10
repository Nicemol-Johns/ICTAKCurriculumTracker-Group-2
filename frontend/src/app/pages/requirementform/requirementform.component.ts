import { Component,ElementRef,ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RequirementformService } from 'src/app/requirementform.service';

@Component({
  selector: 'app-requirementform',
  templateUrl: './requirementform.component.html',
  styleUrls: ['./requirementform.component.css']
})
export class RequirementformComponent implements OnInit {
  Rform: FormGroup;

  @ViewChild('fileInput')fileInput!: ElementRef;
  files: File[]=[];

 
  constructor(private router: Router, private api: RequirementformService, private formBuilder: FormBuilder ,private http:HttpClient) {
    this.Rform = this.formBuilder.group({
      id:new FormControl(''),
      requirementName: new FormControl(''),
      trainingArea: new FormControl(''),
      institution: new FormControl(''),
      category: new FormControl(''),
      trainingHours: new FormControl(''),
      files:new FormControl('')
    });
  }

  ngOnInit(): void {
  }
  handleFileSelect(fileInput:any):void{
    const files = fileInput?.files;

    if(files && files.length> 0 ){
      this.files = Array.from(files)
    }
  }


  onSubmit() {

    const formData = new FormData();

    formData.append('id', this.Rform.get('id')?.value);
    formData.append('requirementName', this.Rform.get('requirementName')?.value);
    formData.append('trainingArea', this.Rform.get('trainingArea')?.value);
    formData.append('institution', this.Rform.get('institution')?.value);
    formData.append('category', this.Rform.get('category')?.value);
    formData.append('trainingHours', this.Rform.get('trainingHours')?.value);

// Append files (if needed)
    this.files.forEach(file => {
      formData.append('files', file, file.name);
    });

    this.api.addRequirement(formData).subscribe(
      (data) => {
        console.log('Requirement added successfully:', data);
        this.router.navigate(['/dashboard/requirement-list']);
      }
    );

    }

    }