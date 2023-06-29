import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared-components/header/header.component';
import { HomePageComponent } from './components/pages-components/home-page/home-page.component';
import { HttpAuthInterceptor } from './interceptors/http.auth.interceptor';


import { Gallery1Component } from './components/pages-components/gallery1/gallery1.component';
import { Gallery2Component } from './components/pages-components/gallery2/gallery2.component';
import { Gallery3Component } from './components/pages-components/gallery3/gallery3.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from './components/shared-components/image-dialog/image-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    Gallery1Component,
    Gallery2Component,
    Gallery3Component,
    ImageDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true,  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
