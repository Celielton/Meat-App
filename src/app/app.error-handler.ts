import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { NotificationService } from './messages/notification-service';
import { LoginService } from './security/login/login.service';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {
    constructor(private notificationService: NotificationService, private ngZone: NgZone, private injector: Injector) {
        super()
    }
    handleError(errorResponse: HttpErrorResponse | any) {
        if (errorResponse instanceof HttpErrorResponse) {
            let message = errorResponse.error.message;
            
            this.ngZone.run(() => {
                switch (errorResponse.status) {
                    case 401:
                        this.injector.get(LoginService).handleLogin();
                        break;
                    case 403:
                        this.notificationService.notify(message || 'Não autorizado.')
                        break;
                    case 404:
                        this.notificationService.notify(message || 'Recurso não encontrado.')
                        break;
                }
            })

        }
        super.handleError(errorResponse)
    }
}