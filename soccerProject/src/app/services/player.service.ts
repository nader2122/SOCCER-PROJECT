import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {


  SERVER_URL: string = "http://localhost:3000/players";
  constructor(private HttpClient:HttpClient) { }

/**
 * get All Player
 */
public getAllPlayers() {
  return this.HttpClient.get<{players:any}>(this.SERVER_URL)
  
}

/**
 * get Player
 */
public getPlayer(playerId) {
  return this.HttpClient.get<{player:any}>(`${this.SERVER_URL}/${playerId}`)
}

/**
 * create Player
 */
public createPlayer(player) {
  return this.HttpClient.post<{message:any}>(`${this.SERVER_URL}`,player)
}
/**
 * delete Player
 */
public deletePlayer(playerId) {
  return this.HttpClient.delete<{message:any}>(`${this.SERVER_URL}/${playerId}`)
}

/**
 * update player
 */
public updatePlayer(player) {
  return this.HttpClient.put<{message:any}>(`${this.SERVER_URL}/${player._id}`, player)
}


}
