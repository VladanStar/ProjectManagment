import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// import {importProvidersFrom} from "@angular/core";
// import { bootstrapApplication } from "@angular/platform-browser";
// import { AppRoutingModule } from "app/app-routing.module";
// import { AppComponent } from "app/app.component";

// bootstrapApplication(AppComponent),{
//   providers:[importProvidersFrom(AppRoutingModule)]
// }