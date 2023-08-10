import { CanActivateFn, Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import Swal from 'sweetalert2';

interface MyToken {
  data:{
    role: string,
    email: string,    
  }

}
export const authfacultyGuard: CanActivateFn = (route, state) => {
    const router= new Router

  const token=localStorage.getItem('token') || '';
  console.log("Token from Authfaculty",token)
try{
  var user =jwt_decode<MyToken>(token);
  console.log(user)
  if(user.data.role=="user"){
    return true
  }else{
    
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      
    })
    // router.navigate(['/requirement-list']);
    return false;
  }
} catch(error){
  console.log('Token error', error)
   
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      
    })
    // router.navigate(['/requirement-list']);
    return false
}





  // if(token){
  //   return true;

  // } else{
  //   router.navigate(['/login']);
  //   return false;

  // }
  // return true;
  
};
