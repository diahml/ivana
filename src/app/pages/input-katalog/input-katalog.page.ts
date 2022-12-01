import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "src/app/api.service";
import { Http } from "@capacitor-community/http";
import { Alert } from 'selenium-webdriver';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-katalog',
  templateUrl: './input-katalog.page.html',
  styleUrls: ['./input-katalog.page.scss'],
})
export class InputKatalogPage implements OnInit {
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
    public _apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    public loadingController: LoadingController,


  ) { }

  selectedFile(event) {
    this.foto = event.target.files[0];
  }

  ngOnInit() {
  }
  // uploadPhoto(fileChangeEvent) {
  //   // Get a reference to the file that has just been added to the input
  //   const photo = fileChangeEvent.target.files[0];
  //   // Create a form data object using the FormData API
  //   let formData = new FormData();
  //   // Add the file that was just added to the form data
  //   formData.append("photo", photo, photo.name);
  //   // POST formData to server using HttpClient
  // }

  // onClick() {
  //   const formData = new FormData();
  //   formData.append('foto', this.foto);
  //   this.http.post(this._apiService.apiURL() + "/tambah_mobil.php", formData).subscribe((response: any) => {
  //     console.log('response');
  //   });
  // }

  addMobil() {
    const formData = new FormData();
    formData.append('foto', this.foto);
    formData.append('id_mobil', this.id_mobil);
    formData.append('warna', this.warna);
    formData.append('merk', this.merk);
    formData.append('kapasitas', this.kapasitas);
    formData.append('stok', this.stok);
    formData.append('harga', this.harga);
    this.http.post(this._apiService.apiURL() + "/tambah_mobil.php", formData).subscribe((res: any) => {
      console.log(res);
    });

    // let url = this._apiService.apiURL() + "/tambah_mobil.php";

    // Http.request({
    //   method: "POST",
    //   url: url,
    //   headers: {
    //     "Content-Type": "application/json",
    //     "enctype": " multipart/form-data"
    //   },
    //   data: {
    //     id_mobil: this.id_mobil,
    //     warna: this.warna,
    //     merk: this.merk,
    //     kapasitas: this.kapasitas,
    //     stok: this.stok,
    //     harga: this.harga,

    //   },
    // })
    // console.log('berhasil');
  }

}
