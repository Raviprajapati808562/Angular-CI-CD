import { Routes } from '@angular/router';
import { Notificationcomponent } from './mycomponent/notificationcomponent/notificationcomponent';
import { Home } from './mycomponent/home/home';
import { Logincomponent } from './mycomponent/logincomponent/logincomponent';
import { GetApiDataComponent } from './mycomponent/get-api-data-component/get-api-data-component';

export const routes: Routes = [
    {
        path: "SendNotification",
        component: Notificationcomponent,
        pathMatch: "full"
    }
    ,
    {
        path: 'SendNLogin',
        component: Home,
        pathMatch: "full"
    }
    , {
        path: "",
        component: Logincomponent,
        pathMatch: "full"
    },
    {
        path: 'forget-password',
        component: Logincomponent
    },
    {
        path: 'sign-up',
        component: Logincomponent
    }
    ,
    {
        path: 'getDataFromApi',
        component: GetApiDataComponent,
        pathMatch: 'full'
    }
];
