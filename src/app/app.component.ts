import { Component } from '@angular/core';
import { BookService } from './book.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users';

  users= [];
  userName: string;

  constructor(private bookService: BookService) {}

  findProfile(){
    this
      .bookService
      .updateProfile(this.userName);
      this
      .bookService
      .getProfile()
      .subscribe(data => {
        this.users.push(data);
        console.log(this.users)
        console.log(data);
    });
  }

   ngOnInit() {

  }
}
