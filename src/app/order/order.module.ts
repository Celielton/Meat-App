import { NgModule } from '@angular/core'
import { OrderComponent } from 'app/order/order.component';
import { OrderItemsComponent } from 'app/order/order-items/order-items.component';
import { DeliveryCostsComponent } from 'app/order/delivery-costs/delivery-costs.component';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule, Routes} from '@angular/router'
import { LeaveOrderGuard } from 'app/order/leave-order.guard';


const ROUTES: Routes = [
    {path: '', component: OrderComponent, canDeactivate: [LeaveOrderGuard]}
];


@NgModule({
    imports: [SharedModule, RouterModule.forChild(ROUTES)],
    declarations: [OrderComponent, OrderItemsComponent, DeliveryCostsComponent],
})

export class OrderModule { }
