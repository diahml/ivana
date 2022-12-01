import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lupapassword',
  templateUrl: './lupapassword.page.html',
  styleUrls: ['./lupapassword.page.scss'],
})
export class LupapasswordPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  login() {
    this.router.navigate(['login']);
  }

}
