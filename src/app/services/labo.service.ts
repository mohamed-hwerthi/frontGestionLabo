import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LaboResponseDto, LaboType } from '../models/Response/LaboResponseDto';
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
  deleteLabo(id: string | undefined): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/labo/${id}`);
  }
  //save labo  :
  saveLabo(laboType: LaboType): Observable<LaboResponseDto> {
    console.log('add labo service ');
    console.log(laboType);
    return this.http.post<LaboResponseDto>(
      `${environment.apiUrl}/labo`,
      laboType
    );
  }
}
