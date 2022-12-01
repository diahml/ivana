import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApiService } from 'src/app/api.service';
import { AlertController, LoadingController, Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  token: any;
  nama: any;
  email: any;
  telp: any;
  alamat: any;
  username: any;
  id_mobil: any;
  warna: any;
  merk: any;
  kapasitas: any;
  stok: any;
  // images: LocalFile[] = [];
  harga: any;
  mobil: any[];

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
    private plt: Platform,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
  ) {
    this.getMobilAdmin();
  }

  ngOnInit() {
    this.loadToken();
  }

  ionViewDidEnter() {
    console.log("jika selesai loading");
    this.getMobilAdmin();
  }
  loadToken() {
    this.token = this.authService.getData('token');
    if (this.token != null) {
      this.nama = this.authService.getData('username');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  getMobilAdmin() {
    this._apiService.getMobilAdmin().subscribe((res: any) => {
      console.log("sukses", res);
      this.mobil = res;
    }, (error: any) => {
      console.log("gagal", error);
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal memuat data mobil',
        buttons: ['OK']
      }).then(res => {
        res.present();
      })
    })
  }

  logout() {
    this.authService.logout(); // lempar ke authService lalu cari fungsi logout
    this.router.navigateByUrl('/', { replaceUrl: true }); // alihkan ke halama
  }

  deleteKatalog(id) {

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
            this._apiService.deleteKatalog(id).subscribe((res: any) => {
              console.log("sukses", res);
              this.getMobilAdmin();
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

}
