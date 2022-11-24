import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/admin' },
    { title: 'Input Katalog', url: '/input-katalog' },
    { title: 'Laporan Data Sewa Mobil', url: '/data-sewa' },
    { title: 'Laporan Data Mobil', url: '/data-mobil' },
    { title: 'Data Admin', url: '/data-admin' },
    { title: 'Logout', url: '/login'},
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

