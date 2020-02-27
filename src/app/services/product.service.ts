import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap,catchError } from 'rxjs/operators';

@Injectable()
export class ProductService {
  
  path = "http://localhost:3000/products";

  constructor(private httpClient: HttpClient) { }

  getProducts(categoryId):Observable<Product[]>{

    let newPath = this.path;
    if(categoryId)
    {
      newPath += "?categoryId="+categoryId
    }

    return this.httpClient.get<Product[]>(newPath).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addProduct(product:Product):Observable<Product>
  {
    console.log('add Product product service');
    console.log(product);

    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    };

    return this.httpClient.post<Product>(this.path,product,httpOptions).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError));
  }

  handleError(err:HttpErrorResponse) {
    let errorMessage:string ="";
    if(err.error instanceof ErrorEvent)
    {
      errorMessage = "An error occured: "+ err.error.message;
    }
    else
    {
      errorMessage = "An error occured.";
    }
    
    return throwError(errorMessage);
  }
}
