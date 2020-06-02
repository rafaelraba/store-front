import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from '../../service/general-service.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss'],
})
export class EmpleadosComponent implements OnInit {
  constructor(private service: GeneralServiceService) {
    this.inicioMetodos();
  }

  ngOnInit(): void {}
  private inicioMetodos() {
    this.service.pruebaService().subscribe((data) => {
      console.log(data);
    });
  }
}
