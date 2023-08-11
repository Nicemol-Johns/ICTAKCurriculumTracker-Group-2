import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatServiceService } from 'src/app/chat-service.service';
import { CurriculumQueriesService } from 'src/app/curriculum-queries.service';
import { FetchRequirementsFacultyDashboardService } from 'src/app/fetch-requirements-faculty-dashboard.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  constructor(private queries:CurriculumQueriesService,
    private router:Router,
    private fetch:FetchRequirementsFacultyDashboardService,
    private chats:ChatServiceService,
    private sanitizer: DomSanitizer){}
  
  @ViewChild('fileInput')fileInput!: ElementRef;
  files: File[]=[];
  enableSubmit:boolean = true;
  fetchName = this.chats.getUser()

  curriculum={
    s_no:'',
    name:this.fetchName,
    description:'',
    approvedStatus:false,
    referenceLink:'',
    referenceLinkID:''
  }

  requirement = this.fetch.getRequirements()

  handleFileSelect(fileInput:any):void{
    const files = fileInput?.files;

    if(files && files.length> 0 ){
      this.files = Array.from(files)
    }
  }

  onSubmit(){

    const formData = new FormData();

    this.files.forEach(file => {
      formData.append('files', file, file.name);
      console.log(file)
    });
  //   let dataToSend = {
  //     s_no: this.curriculum.s_no,
  //     name: this.curriculum.name,
  //     description: this.curriculum.description,
  //     approvedStatus: this.curriculum.approvedStatus,
  //     requirementName:this.requirement.requirementName,
  //     trainingArea:this.requirement.trainingArea,
  //     institution:this.requirement.institution,
  //     category:this.requirement.category,
  //     trainingHours:this.requirement.trainingHours
  //   };
  //   console.log(dataToSend)
  //   this.queries.addCurriculum(dataToSend).subscribe((res: any) => {
  //       console.log(res.data);
  //       console.log('success');
  //       alert('Added successfully')
  //       this.router.navigate(['/faculty-dashboard/Rformfaculty'])
  //       this.enableSubmit = false;
  //     }
  //   );
  // }

        formData.append('s_no', this.curriculum.s_no);
        formData.append('name', this.curriculum.name);
        formData.append('description', this.curriculum.description);
        formData.append('approvedStatus', this.curriculum.approvedStatus.toString());
        formData.append('requirementName', this.requirement.requirementName);
        formData.append('trainingArea', this.requirement.trainingArea);
        formData.append('institution', this.requirement.institution);
        formData.append('category', this.requirement.category);
        formData.append('trainingHours', this.requirement.trainingHours);

        console.log(formData);

            this.queries.addCurriculum(formData).subscribe((res: any) => {
            console.log(res.data);
            //console.log(res.data.referenceLink);
            this.curriculum.referenceLink = res.data.referenceLink
            //console.log(res.data.referenceLinkId);
            this.curriculum.referenceLinkID = res.data.referenceLinkID
            console.log('success');
            if(res.status==200){
              alert('Added successfully');
              this.router.navigate(['/faculty-dashboard/Rformfaculty'])
            }
            this.enableSubmit = false;
          }
        );

}


}
