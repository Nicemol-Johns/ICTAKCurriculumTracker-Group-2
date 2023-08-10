import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';
import { ChatServiceService } from 'src/app/chat-service.service';
import { ChatsBackendServicesService } from 'src/app/chats-backend-services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
User={
  email:'',
  password:''
}
constructor(private router:Router,private authserve:AuthService,private chats:ChatServiceService){ }

login(){
  this.authserve.login(this.User.email,this.User.password).subscribe(response =>{
    console.log('login successful',response);
    this.chats.setUser(response.user);
    Swal.fire('Success!', 'You have successfully logged in.', 'success');
    this.router.navigate([response.api]);
  },
  (error) => {
    console.log('login failed', error);
    Swal.fire('Error!', 'Invalid username or password.', 'error');
  }
   
  )  

}
}
