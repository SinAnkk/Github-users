import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { BookService } from './book.service';

import { SearchUserPipe } from './search-user.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchUserPipe
  ],
  imports: [
    BrowserModule,  
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
