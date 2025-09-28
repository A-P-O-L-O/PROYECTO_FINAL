import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  async onLogin() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) return;

    const loading = await this.loadingCtrl.create({
      message: 'Iniciando sesión...',
    });
    await loading.present();

    const form = this.loginForm.getRawValue();

    // this.api.post<any>('auth/login', form).subscribe({
    //   next: async (res) => {
    //     await loading.dismiss();
    //     console.log(res)

    //     // ✅ Guardar token, redirigir, etc.
    //     localStorage.setItem('token', res.token); // según tu backend

    //     this.router.navigateByUrl('/tabs', { replaceUrl: true });
    //     this.showToast('Inicio de sesión exitoso', 'success');
    //   },
    //   error: async (err) => {
    //     await loading.dismiss();

    //     this.showToast('Error al iniciar sesión. Verifica tus datos.', 'danger');
    //     console.error(err);
    //   }
    // });
  }


  async showToast(message: string, color: string = 'primary') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color,
    });
    toast.present();
  }

}
