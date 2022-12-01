import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApiService } from 'src/app/api.service';
import { AlertController, LoadingController, Platform, ToastController } from '@ionic/angular';

const foto = 'stored-images';
interface LocalFile {
  name: string;
  path: string;
  data: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  id_mobil: any;
  warna: any;
  merk: any;
  kapasitas: any;
  stok: any;
  images: LocalFile[] = [];
  harga: any;
  mobil: any[];
  token: any;
  nama: any;

  constructor(
    private router: Router,
    private plt: Platform,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthenticationService,
    public _apiService: ApiService,
    private alertController: AlertController,
  ) {
    this.getMobil();
  }

  ngOnInit() {
    this.loadToken();
  }

  ionViewDidEnter() {
    console.log("jika selesai loading");
    this.getMobil();
  }

  formpinjam() {
    this.router.navigate(['form-pinjam']);
  }
  loadToken() {
    this.token = this.authService.getData('token');
    if (this.token != null) {
      this.nama = this.authService.getData('username');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  getMobil() {
    this._apiService.getMobil().subscribe((res: any) => {
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




}
