import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }


  
  navbarOpen = false;

  ngOnInit(): void {
  }

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }


}
