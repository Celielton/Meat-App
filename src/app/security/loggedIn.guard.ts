import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { Injectable } from '@angular/core'
import { LoginService } from './login/login.service';

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {


    constructor(private loginservice: LoginService) {

    }

    checkAuthentication(path: string): boolean {
        const loggedIn = this.loginservice.isLoggedIn();
        if (!loggedIn) {
            this.loginservice.handleLogin(`${path}`);
        }
        return loggedIn;
    }

    canLoad(router: Route): boolean {
        return this.checkAuthentication(router.path)
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkAuthentication(route.routeConfig.path);
    }
}   