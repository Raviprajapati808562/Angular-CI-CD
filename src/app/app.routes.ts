
import { Routes } from '@angular/router';

import { Notificationcomponent } from './mycomponent/notificationcomponent/notificationcomponent';
import { Home } from './mycomponent/home/home';
import { Logincomponent } from './mycomponent/logincomponent/logincomponent';
import { GetApiDataComponent } from './mycomponent/get-api-data-component/get-api-data-component';
import { Mycarcomponent } from './mycomponent/mycarcomponent/mycarcomponent';
import { FileUploadComponent } from './mycomponent/fileuploadcomponent/fileuploadcomponent';

export const routes: Routes = [
  // Pages without sidebar
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
    },

  // Shared layout: all child pages show the sidebar
  {
    path: '',
    component: Home,
    children: [
      {
        path: '',
        redirectTo: 'getDataFromApi',
        pathMatch: 'full'
      },
      {
        path: 'SendNotification',
        component: Notificationcomponent
      },
      {
        path: 'getDataFromApi',
        component: GetApiDataComponent
      },
      {
        path: 'getCarDataFromApi',
        component: Mycarcomponent
      },
      {
        path: 'fileUpload',
        component: FileUploadComponent
      }
    ]
  }
];
