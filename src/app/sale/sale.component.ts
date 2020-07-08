import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {
public form: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  private initForm(){
    this.form = this.fb.group({
      id: new FormControl(null),
      cantidad: ['', [Validators.required, Validators.pattern(/^[A-Za-z\_\-\.\s\xF1\xD1]+$/)]],
      producto: ['', [Validators.required, Validators.pattern(/^[A-Za-z\_\-\.\s\xF1\xD1]+$/)]],
      clienteList: ['', [Validators.required]],
    });
  }

  public guardarForm(){
    
  }

}
