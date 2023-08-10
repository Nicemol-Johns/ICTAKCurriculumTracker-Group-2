import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private authServe:AuthService,private router:Router){}

  isLoggedIn(): boolean{
    return this.authServe.isLoggedIn();
  }

  logout(): void{
    this.authServe.logout();
    this.router.navigate(['/login']);
  }
}
