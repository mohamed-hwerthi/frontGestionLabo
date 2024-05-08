import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LaboResponseDto } from '../models/Response/LaboResponseDto';
import { environment } from 'src/environments/environment.development';
import { LaboRequestDto } from '../models/Request/LaboRequestDto';

@Injectable({
  providedIn: 'root',
})
export class LaboService {
  constructor(private http: HttpClient) {}

  //methode that get all labo  :
  getAlLabo(): Observable<LaboResponseDto[]> {
    return this.http.get<LaboResponseDto[]>(`${environment.apiUrl}/labo`);
  }

  //get Labo By Id :
  getLaboById(id: string) {
    return this.http.get<LaboResponseDto>(
      `${environment.apiUrl}/labo/one/${id}`
    );
  }

  //delete labo  :
  deleteLabo(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/labo/${id}`);
  }
  //save labo  :
  saveLabo(labo: LaboRequestDto): Observable<LaboResponseDto> {
    return this.http.post<LaboResponseDto>(`${environment.apiUrl}/labo`, {
      labo,
    });
  }
}
