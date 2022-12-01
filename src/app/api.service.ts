import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { Http } from "@capacitor-community/http";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
  ) {

  }

  //link API
  apiURL() {
    return "http://localhost:8080/api";
  }

  getDataAdmin() {
    return this.http.get(this.apiURL() + '/tampil.php');
  }

  getDataSewa() {
    return this.http.get(this.apiURL() + '/tampil_sewa.php');
  }

  getMobil() {
    return this.http.get(this.apiURL() + '/tampil_mobil.php');
  }

  getMobilAdmin() {
    return this.http.get(this.apiURL() + '/tampil_mobil_admin.php');
  }

  deleteDataAdmin(id) {
    return this.http.delete(this.apiURL() + '/hapus.php?username=' + id);
  }

  deleteDataSewa(id) {
    return this.http.delete(this.apiURL() + '/hapus_sewa.php?id_sewa=' + id);
  }

  sewaLunas(id) {
    return this.http.get(this.apiURL() + '/lunas.php?id_sewa=' + id);
  }

  kembali(id) {
    return this.http.get(this.apiURL() + '/kembali.php?id_mobil=' + id);
  }

  balikStok(id) {
    return this.http.get(this.apiURL() + '/balik_stok.php?id_mobil=' + id);
  }

  deleteKatalog(id) {
    return this.http.delete(this.apiURL() + '/hapus_mobil.php?id_mobil=' + id);
  }

  ambilDataAdmin(id) {
    return this.http.get(this.apiURL() + '/lihat.php?username=' + id);
  }

  ambilMobil(id) {
    return this.http.get(this.apiURL() + '/lihat_mobil.php?id_mobil=' + id);
  }

  pinjamMobil(id) {
    return this.http.get(this.apiURL() + '/pinjam.php?id_mobil=' + id);
  }


}