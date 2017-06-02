import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth/auth.service';

@Injectable()
export class AuthGuardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (this.authService.isAuthenticated()) {
            return true;
        }

        //Redirect the user
        this.router.navigate(['/login']);

        return false;
    }
}
