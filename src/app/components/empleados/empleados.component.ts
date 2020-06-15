import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from '../../service/general-service.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss'],
})
export class EmpleadosComponent implements OnInit {
  public respuesta: string;
  constructor(private service: GeneralServiceService) {
    this.inicioMetodos();
  }

  ngOnInit(): void {}
  private inicioMetodos() {
    this.respuesta = '';
    this.service.pruebaService().subscribe((data) => {
      this.respuesta = data;
      console.log(data);
    });
  }
}
