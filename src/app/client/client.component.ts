import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { GeneralServiceService } from '../service/general-service.service';
import { ClientModel } from './model-client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private serviceGeneral: GeneralServiceService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      id: [''],
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-z\_\-\.\s\xF1\xD1]+$/),
        ],
      ],
      cedula: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-z\_\-\.\s\xF1\xD1]+$/),
        ],
      ],
    });
  }

  public guardarForm() {
    console.log(this.form.value);
    const client = new ClientModel();
    client.name = this.form.get('name').value;
    //this.serviceGeneral.saveClient().subscribe
  }
}
