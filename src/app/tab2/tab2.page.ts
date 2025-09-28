import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class Tab2Page {
  motoForm: FormGroup;
  motos: {
    moto: string;
    modelo: string;
    kilometraje: string;
    cilindraje: string;
    descripcion: string;
    imagen?: string;
  }[] = [];

  constructor(private fb: FormBuilder) {
    this.motoForm = this.fb.group({
      moto: ['', Validators.required],
      modelo: ['', Validators.required],
      kilometraje: ['', Validators.required],
      cilindraje: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: ['']
    });
  }

  agregarMoto() {
    if (this.motoForm.valid) {
      this.motos.push(this.motoForm.value);
      this.motoForm.reset(); // limpiar el formulario después de agregar
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.motoForm.patchValue({ imagen: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  }
}
