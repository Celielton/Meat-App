import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { InputComponent } from 'app/shared/input/input.component'
import { RadioComponent } from 'app/shared/radio/radio.component'
import { RatingComponent } from 'app/shared/rating/rating.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ShoppingCartService } from 'app/restaurant-details/shopping-cart/shopping-cart.service';
import { RestaurantsService } from 'app/restaurantes/restaurants.service';
import { OrderService } from 'app/order/order-service.service';
import { NotificationService } from 'app/messages/notification-service';
import { LoginService } from '../security/login/login.service';
import { LoggedInGuard } from 'app/security/loggedIn.guard';
import { LeaveOrderGuard } from '../order/leave-order.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../security/auth.interceptor';


@NgModule({
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    declarations: [InputComponent, RadioComponent, RatingComponent],
    exports: [InputComponent, RadioComponent, RatingComponent, FormsModule, ReactiveFormsModule, CommonModule]
})

export class SharedModule {
    static forRoute(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ShoppingCartService,
                RestaurantsService,
                OrderService,
                NotificationService,
                LoginService,
                LoggedInGuard,
                LeaveOrderGuard,
                { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
            ]
        }
    }
}
