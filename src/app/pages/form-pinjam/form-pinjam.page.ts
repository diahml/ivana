import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from 'src/app/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Http } from "@capacitor-community/http";

@Component({
  selector: 'app-form-pinjam',
  templateUrl: './form-pinjam.page.html',
  styleUrls: ['./form-pinjam.page.scss'],
})
export class FormPinjamPage implements OnInit {
  nama: any;
  merk: any;
  id_mobil: any;
  token: any;
  harga: any;
  jumlah: any;
  lama: any;

  constructor(
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public LoadingController: LoadingController,
  ) {
    this.route.params.subscribe((param: any) => {
      this.id_mobil = param.id_mobil;
      console.log(this.id_mobil);
      this.pinjamMobil(this.id_mobil);
    })
  }

  ngOnInit() {
  }

  pinjamMobil(id_mobil) {
    this._apiService.pinjamMobil(id_mobil).subscribe((res: any) => {
      console.log('sukses', res);
      let pinjam = res;
      console.log(pinjam);
      this.merk = pinjam.merk;
      this.harga = pinjam.harga;
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    })
  }


  hitungHarga() {
    this.jumlah = this.harga * this.lama;
  }

  sewaMobil() {
    let url = this._apiService.apiURL() + "/sewa_mobil.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        id_mobil: this.id_mobil,
        merk: this.merk,
        nama: this.nama,
        lama: this.lama,
        biaya: this.jumlah,
      },
    }).then((data) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Pembayaran dapat Dilakukan di Tempat',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/status-sewa');
    })
  }


}
