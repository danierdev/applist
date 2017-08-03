import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

export interface AppDataResponse {
  data: {
    children: any[]
  };
}

@Injectable()
export class AppListService {

  constructor(private http: HttpClient) {}

  getAppData() {
    return this.http.get<AppDataResponse>(environment.apiUrl);
  }
}
