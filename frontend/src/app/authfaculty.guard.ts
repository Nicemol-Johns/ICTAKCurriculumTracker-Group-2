import { CanActivateFn, Router } from '@angular/router';

export const authfacultyGuard: CanActivateFn = (route, state) => {
  
  const router= new Router

  const token=localStorage.getItem('token');
  if(token){
    return true;

  } else{
    router.navigate(['/login']);
    return false;

  }
  return true;
  
};
