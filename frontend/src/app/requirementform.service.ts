import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequirementformService {
  
  private baseUrl = 'http://localhost:3000/curriculum-tracker';

  constructor(private http:HttpClient) { }
  
  addRequirement(requirementData: any): Observable<any> {
    console.log(requirementData)
    return this.http.post<any>(`${this.baseUrl}/rform`, requirementData);
  }

  // addRequirementWithFile(requirementDataWithFile: any): Observable<any> {
  //   console.log(requirementDataWithFile)
  //   return this.http.post<any>(`${this.baseUrl}/rform-file`, requirementDataWithFile);
  // }

  getRequirements(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/rlist`);
  }

  getRequirementById(id:any){
    return this.http.get(`${this.baseUrl}/requirement/${id}`)
  }

}
