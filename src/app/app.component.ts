import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularshop';
  constructor(private router: Router){}

  onLoginClick(){
    this.router.navigate(['admin/login'])
  }
}

