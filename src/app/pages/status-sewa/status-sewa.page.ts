import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status-sewa',
  templateUrl: './status-sewa.page.html',
  styleUrls: ['./status-sewa.page.scss'],
})
export class StatusSewaPage implements OnInit {
  datasewa: any[];
  id_sewa: any;
  id_mobil: any;
  nama: any;
  merk: any;
  lama_sewa: any;
  biaya: any;
  status: any;

  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
    private authService: AuthenticationService,
    private router: Router,
  ) {
    this.getDataSewa();
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log("jika selesai loading");
    this.getDataSewa();
  }

  getDataSewa() {
    this._apiService.getDataSewa().subscribe((res: any) => {
      console.log("sukses", res);
      this.datasewa = res;
    }, (error: any) => {
      console.log("gagal", error);
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal memuat data admin',
        buttons: ['OK']
      }).then(res => {
        res.present();
      })
    })
  }

}
