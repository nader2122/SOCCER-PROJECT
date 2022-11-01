import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  addPlayerForm : FormGroup ; 
  title:any ;
  players :any ;
  player :any={} ;
  id:any ;
  
  
  constructor( private formBuilder : FormBuilder ,private activatedRoute:ActivatedRoute , private router : Router , private playerService:PlayerService) { }

 

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get('id') ;
    // this.players = JSON.parse(localStorage.getItem('players') || '[]') ;
    

    if (this.id) {
      this.title ="Edit Player"

    //   for (let i = 0; i < this.players.length; i++) {
    //     if (this.players[i].id == this.id) {
          
        // }
        
    //   }
    this.playerService.getPlayer(this.id).subscribe(
      (data)=>{
        console.log(data.player);
        
        this.player = data.player
        
      }
    )
    
    }else{
      this.title ="Add Player"
    }

    this.addPlayerForm = this.formBuilder.group({
      firstName:['',[Validators.required , Validators.minLength(3)]],
      lastName:['',[Validators.required, Validators.minLength(3)]],
      post:['',[Validators.required, Validators.minLength(2)]],
      team:['',[Validators.required,Validators.minLength(3)]],
      nTshirt:['',[Validators.required,Validators.maxLength(2)]],
      dateOfBirth:['',[Validators.required,Validators.minLength(3)]]
    })
  }


  save(f:any){

    if (this.id) {
  //     // edit
  //     for (let i = 0; i < this.players.length; i++) {
  //       if (this.players[i].id == this.id) {
  //         this.players[i] = f
  //         break
  //       }
        
  //     }

this.playerService.updatePlayer(this.player).subscribe(
  (data)=>{
    console.log(data.message);
  }
)

     }else{
      // console.log(f);
  
      
  //     let idPlayer = JSON.parse(localStorage.getItem('idPlayer') || '1') ;
 
  //     f.id = idPlayer ;
      f.role ="player" ;

      this.playerService.createPlayer(this.player).subscribe(
        (data)=>{
          console.log(data.message);
        }
      )
 
  //     this.players.push(f) ;
 
  //     localStorage.setItem('players', JSON.stringify(this.players)) ;
  //     localStorage.setItem('idPlayer', idPlayer + 1) ;
    }
     


     this.router.navigate(['dashboard'])
  }

}
