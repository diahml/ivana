import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'loader',
    loadChildren: () =>
      import('./pages/loader/loader.module').then((m) => m.LoaderPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'form-pinjam',
    loadChildren: () =>
      import('./pages/form-pinjam/form-pinjam.module').then(
        (m) => m.FormPinjamPageModule
      ),
  },
  {
    path: 'lupapassword',
    loadChildren: () => import('./pages/lupapassword/lupapassword.module').then(m => m.LupapasswordPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'input-katalog',
    loadChildren: () => import('./pages/input-katalog/input-katalog.module').then(m => m.InputKatalogPageModule)
  },
  {
    path: 'data-sewa',
    loadChildren: () => import('./pages/data-sewa/data-sewa.module').then(m => m.DataSewaPageModule)
  },
  {
    path: 'data-mobil',
    loadChildren: () => import('./pages/data-mobil/data-mobil.module').then(m => m.DataMobilPageModule)
  },
  {
    path: 'data-admin',
    loadChildren: () => import('./pages/data-admin/data-admin.module').then(m => m.DataAdminPageModule)
  },
  {
    path: 'data-admin-tambah',
    loadChildren: () => import('./pages/data-admin-tambah/data-admin-tambah.module').then(m => m.DataAdminTambahPageModule)
  },
  {
    path: 'data-admin-edit/:email',
    loadChildren: () => import('./pages/data-admin-edit/data-admin-edit.module').then(m => m.DataAdminEditPageModule)
  },
  {
    path: 'status-sewa',
    loadChildren: () => import('./pages/status-sewa/status-sewa.module').then( m => m.StatusSewaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
