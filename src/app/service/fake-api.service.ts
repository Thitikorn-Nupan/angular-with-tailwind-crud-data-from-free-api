import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, ReplaySubject} from "rxjs";
import {Product} from "../entities/product";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  public productsSubject : ReplaySubject<Product[]>;

  private path = environment.baseApi
  // private path = "/products"

  constructor(private http: HttpClient) {
    this.productsSubject = new ReplaySubject<Product[]>()
    this.http.get(`${this.path}?limit=8`).subscribe((res:any) => {
      this.productsSubject.next(res);
    })
  }

  public deleteProduct(id: number) : Observable<Product>{
    return this.http.delete<Product>(`${this.path}/${id}`)
  }

  public updateProduct(id: number,product : Product) : Observable<Product>{
    return this.http.put<Product>(`${this.path}/${id}`,product)
  }

  public createProduct(product : Product) : Observable<Product>{
    return this.http.post<Product>(`${this.path}`,product)
  }


}
