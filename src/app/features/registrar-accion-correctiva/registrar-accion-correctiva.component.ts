import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-registrar-accion-correctiva',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HeaderComponent],
  templateUrl: './registrar-accion-correctiva.component.html',
  styleUrl: './registrar-accion-correctiva.component.css',
})
export class RegistrarAccionCorrectivaComponent {
  form: FormGroup;
  sociedades = ['Sociedad A', 'Sociedad B', 'Sociedad C'];
  tipos = [
    'Acto Inseguro',
    'Condición Insegura',
    'Inspección SST',
    'Auditoría Externa',
    'Auditoría Interna',
  ];
  origenes = ['Origen 1', 'Origen 2', 'Origen 3'];
  responsables = ['Responsable 1', 'Responsable 2', 'Responsable 3'];
  estados = [
    { value: '', label: 'Seleccionar un estado' },
    { value: 'abierto', label: 'Abierto' },
    { value: 'implementado', label: 'Implementado' },
    { value: 'cerrado', label: 'Cerrado' },
    { value: 'cancelado', label: 'Cancelado' },
    { value: 'enviado', label: 'Enviado' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      sociedad: [''],
      tipo: [''],
      origen: [''],
      fechaPublicacion: [''],
      detalle: [''],
      accionesCorrectivas: [''],
      accionesPreventivas: [''],
      fechaMaxCorrectiva: [''],
      fechaMaxPreventiva: [''],
      responsableCorrectiva: [''],
      responsablePreventiva: [''],
      estadoCorrectiva: [''],
      estadoPreventiva: [''],
      observaciones: [''],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulario enviado:', this.form.value);
    }
  }
  onFormValid() {
    return this.form.valid;
  }

  onCancel() {
    this.form.reset();
  }
}
