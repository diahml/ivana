import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "src/app/api.service";
import { Http } from "@capacitor-community/http";
import { Alert } from 'selenium-webdriver';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-katalog-edit',
  templateUrl: './katalog-edit.page.html',
  styleUrls: ['./katalog-edit.page.scss'],
})
export class KatalogEditPage implements OnInit {
  id_mobil: any;
  warna: any;
  merk: any;
  kapasitas: any;
  stok: any;
  foto: any;
  harga: any;
  datamobil: any[];

  constructor(
    private http: HttpClient,
    private router: Router,
    public _apiService: ApiService,
    private route: ActivatedRoute,
    private alertController: AlertController,
  ) {
    this.route.params.subscribe((param: any) => {
      this.id_mobil = param.id_mobil;
      console.log(this.id_mobil);
      this.ambilMobil(this.id_mobil);
    })
  }

  selectedFile(event) {
    this.foto = event.target.files[0];
  }

  ngOnInit() {
  }

  ambilMobil(id_mobil) {
    this._apiService.ambilMobil(id_mobil).subscribe((res: any) => {
      console.log('sukses', res);
      let mobil = res;
      console.log(mobil);
      this.warna = mobil.warna;
      this.merk = mobil.merk;
      this.kapasitas = mobil.kapasitas;
      this.stok = mobil.stok;
      this.foto = mobil.foto;
      this.harga = mobil.harga;
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    })
  }

  editMobil() {
    let url = this._apiService.apiURL() + "/edit_mobil.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        id_mobil: this.id_mobil,
        warna: this.warna,
        merk: this.merk,
        kapasitas: this.kapasitas,
        stok: this.stok,
        harga: this.harga,
      },
    }).then((data) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Edit Katalog',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/admin');
    })
  }
}
