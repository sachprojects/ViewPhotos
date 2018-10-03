import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyPhotosComponent } from './my-photos/my-photos.component';
import { FlickrService } from './services/flickr.service';



@NgModule({
  declarations: [
    AppComponent,
    MyPhotosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [FlickrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
