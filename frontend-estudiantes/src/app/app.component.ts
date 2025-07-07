import { Component } from '@angular/core';
import { EstudianteService } from './estudiante.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cedula: string = '';
  estudiante: any = null;
  mensaje: string = '';

  constructor(private estudianteService: EstudianteService) {}

  buscar() {
    this.estudianteService.getPorCedula(this.cedula).subscribe({
      next: (res) => {
        this.estudiante = res;
        this.mensaje = '';
      },
      error: () => {
        this.estudiante = null;
        this.mensaje = 'Estudiante no encontrado.';
      }
    });
  }

  actualizar() {
    const { nombre, apellido, nivel } = this.estudiante;
    this.estudianteService
      .actualizarPorCedula(this.cedula, { nombre, apellido, nivel })
      .subscribe({
        next: () => {
          this.mensaje = 'Estudiante actualizado correctamente';
        },
        error: () => {
          this.mensaje = 'Error al actualizar';
        }
      });
  }
}
