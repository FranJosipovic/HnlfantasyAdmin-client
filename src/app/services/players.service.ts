import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private readonly listeningPath: String = '/api/Player';

  constructor(private httpClient: HttpClient) {}

  getPlayers(): Observable<any> {
    const url = `${environment.apiEndpoint}${this.listeningPath}`;
    return this.httpClient.get(url).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
  }
}
