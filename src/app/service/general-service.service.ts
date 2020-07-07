import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientModel } from '../client/model-client';


@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {
  protected urlApi = 'http://localhost:5000';
  constructor(
    private http: HttpClient,
  ) { }

  // obtener sservicio
  pruebaService(): Observable<any> {
    return this.http.get<any[]>(this.urlApi);
  }

  saveProduct(product: any){
    return this.http.post(`${this.urlApi}/product`, product)
  }

  //Guardar cliente
 public saveClient(user: ClientModel): Observable<ClientModel> {
  return this.http.post<ClientModel>(this.urlApi, user);
 }

  //Guardar VENTAS
  public saveSale(user: ClientModel): Observable<ClientModel> {
    return this.http.post<ClientModel>(this.urlApi, user);
   }
}
