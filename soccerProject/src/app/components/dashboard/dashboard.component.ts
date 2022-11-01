import { MatchService } from './../../services/match.service';
import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
matchs :any;
players : any ;


  constructor( private router: Router , private playerService:PlayerService , private matchService:MatchService) { }

  ngOnInit(): void {

    // this.matchs = JSON.parse(localStorage.getItem('matchs') || '[]') ;
    // this.players = JSON.parse(localStorage.getItem('players') || '[]') ;


      //  get all match
   this.matchService.getAllMatch().subscribe(
    (data)=>{
      console.log(data.matchs);
      this.matchs = data.matchs
    }
   )
    // get all players

    this.playerService.getAllPlayers().subscribe(
      (data)=>{
        console.log(data.players);
        this.players = data.players
      }
    )






  }



  deleteMatch(id:any){

//   let pos : any ;
//   for (let i = 0; i < this.matchs.length; i++) {
//     if(this.matchs[i].id == id){
//       pos = i ;

//     }
    
//   }

//   this.matchs.splice(pos,1)

//   localStorage.setItem('matchs',JSON.stringify(this.matchs)) ;

this.matchService.deleteMatch(id).subscribe(
  (data)=>{
    console.log(data.message);
    this.matchService.getAllMatch().subscribe(
      (data)=>{
        console.log(data.matchs);
        this.matchs = data.matchs
      }
     )
  }
)


 } 

 deletePlayer(id:any){

  // let pos : any ;
  // for (let i = 0; i < this.players.length; i++) {
  //   if(this.players[i].id == id){
  //     pos = i ;

  //   }
    
  // }

  // this.players.splice(pos,1)

  // localStorage.setItem('players',JSON.stringify(this.players)) ;

  this.playerService.deletePlayer(id).subscribe(
    (data)=>{
      console.log(data.message);
      this.playerService.getAllPlayers().subscribe(
        (data)=>{
          console.log(data.players);
          this.players = data.players
        }
      )

    }
  )

 } 

 editMatch(id:any){


    this.router.navigate([`editMatch/${id}`])
  

 }

 
 editPlayer(id:any){

  
    this.router.navigate([`editPlayer/${id}`])
    


 }

}
