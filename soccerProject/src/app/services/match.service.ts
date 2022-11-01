import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  SERVER_URL:any="http://localhost:3000/api/"
  constructor(private httpClient:HttpClient) { }


  /**
   * get All Match
   */
  public getAllMatch() {
    return this.httpClient.get<{matchs:any}>(this.SERVER_URL + 'matchs')
  }

/**
 * get Match
 */
public getMatch(matchId) {
  return this.httpClient.get<{match:any}>(`${this.SERVER_URL + 'matchs'}/${matchId}`)
}

/**
 * delete Match
 */
public deleteMatch(matchId) {
  return this.httpClient.delete<{message:any}>(`${this.SERVER_URL + 'matchs'}/${matchId}`)
}

/**
 * create Match
 */
public createMatch(match) {
  return this.httpClient.post<{message:any}>(this.SERVER_URL + 'matchs' , match)
}

/**
 * update Match
 */
public updateMatch(match) {
  return this.httpClient.put<{message:any}>(`${this.SERVER_URL + 'matchs'}/${match._id}`, match)
}


}
