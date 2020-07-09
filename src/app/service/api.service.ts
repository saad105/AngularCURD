import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { EmployeeModel } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://dummy.restapiexample.com/api/v1/';
  cors: string = 'https://cors-anywhere.herokuapp.com/';
  
  getData(url) : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(url);
  }

  addData(data): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'create', data);
  }

  editData(data): Observable<ApiResponse>{
    return this.http.put<ApiResponse>(this.baseUrl + 'update/' + data.id,data);
  }

  deleteData(url,id: number): Observable<ApiResponse>{
    return this.http.delete<ApiResponse>(this.cors+url + id.toString());
  }
}
