import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { Http } from "@capacitor-community/http";


@Component({
  selector: 'app-data-sewa',
  templateUrl: './data-sewa.page.html',
  styleUrls: ['./data-sewa.page.scss'],
})
export class DataSewaPage implements OnInit {
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



  sewaLunas(id) {

    this.alertController.create({
      header: 'perhatian',
      subHeader: 'Yakin mengubah status ini?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('dibatalkan', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any) => {
            //jika tekan yakin
            this._apiService.sewaLunas(id).subscribe((res: any) => {
              // this.status = "Lunas";
              console.log("sukses", res);

              this.getDataSewa();
            }, (error: any) => {
              console.log("error", error);
              this.alertController.create({
                header: 'Notifikasi',
                message: 'gagal memuat data sewa',
                buttons: ['OK']
              }).then(res => {
                res.present();
              })
            })
          }
        }
      ]
    }).then(res => {
      res.present();
    })
  }

  kembali(id) {

    this.alertController.create({
      header: 'perhatian',
      subHeader: 'Yakin mengubah status ini?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('dibatalkan', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any) => {
            //jika tekan yakin
            this._apiService.kembali(id).subscribe((res: any) => {
              // this.status = "Lunas";
              console.log("sukses", res);

              this.getDataSewa();
            }, (error: any) => {
              console.log("error", error);
              this.alertController.create({
                header: 'Notifikasi',
                message: 'gagal memuat data sewa',
                buttons: ['OK']
              }).then(res => {
                res.present();
              })
            })
          }
        }
      ]
    }).then(res => {
      res.present();
    })
  }

  deleteDataSewa(id) {

    this.alertController.create({
      header: 'perhatian',
      subHeader: 'Yakin menghapus data ini?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('dibatalkan', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any) => {
            //jika tekan yakin
            this._apiService.deleteDataSewa(id).subscribe((res: any) => {
              console.log("sukses", res);
              this.getDataSewa();
            }, (error: any) => {
              console.log("error", error);
              this.alertController.create({
                header: 'Notifikasi',
                message: 'gagal memuat data mahasiswa',
                buttons: ['OK']
              }).then(res => {
                res.present();
              })
            })
          }
        }
      ]
    }).then(res => {
      res.present();
    })
  }


  balikStok(id) {

    this.alertController.create({
      header: 'perhatian',
      subHeader: 'Yakin menghapus data ini?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('dibatalkan', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any) => {
            //jika tekan yakin
            this._apiService.balikStok(id).subscribe((res: any) => {
              // this.status = "Lunas";
              console.log("sukses", res);
              this.balikStok(this.datasewa);
              this.getDataSewa();
            }, (error: any) => {
              console.log("error", error);
              this.alertController.create({
                header: 'Notifikasi',
                message: 'gagal memuat data sewa',
                buttons: ['OK']
              }).then(res => {
                res.present();
              })
            })
          }
        }
      ]
    }).then(res => {
      res.present();
    })
  }


}
