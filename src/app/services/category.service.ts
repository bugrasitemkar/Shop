import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Category } from '../category/category';
import { Observable, throwError } from 'rxjs';
import { tap,catchError } from 'rxjs/operators';

@Injectable()

export class CategoryService {
  
  path = "http://localhost:3000/categories";

  constructor(private httpClient: HttpClient) { }

  getCategories():Observable<Category[]>{


    return this.httpClient.get<Category[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );


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
