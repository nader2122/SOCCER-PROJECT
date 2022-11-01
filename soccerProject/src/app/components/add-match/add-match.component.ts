import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormBuilder} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  addMatchForm : FormGroup ;

  match:any = {} 
  title :any;
  id : any ;
  matchs : any ;

  constructor( private formBuilder : FormBuilder , private activatedRoute :ActivatedRoute , private router : Router , private matchService:MatchService) { }




  ngOnInit(): void {

// this.matchs = JSON.parse(localStorage.getItem('matchs') || '[]') ;
this.id = this.activatedRoute.snapshot.paramMap.get('id') ;


if(this.id){

   this.title ="Edit Match"

  // for (let i = 0; i < this.matchs.length; i++) {
  //   if (this.matchs[i].id == this.id) {
  //   this.match = this.matchs[i]
    
  //   }
    
  // }
  this.matchService.getMatch(this.id).subscribe(
    (data)=>{
      console.log(data.match);
      this.match = data.match
    }
  )

}else{

  this.title ="Add Match"

}


    this.addMatchForm = this.formBuilder.group({
      teamOne:[''],
      teamTwo:[''],
      scoreOne:[''],
      scoreTwo:['']

    })
  
  }


  save(){

if (this.id) {
  // edit

  // for (let i = 0; i < this.matchs.length; i++) {
  //   if (this.matchs[i].id == this.id) {
  //     this.matchs[i] = this.match
  //     break ;
  //   }
    
  // }

  // localStorage.setItem("matchs",JSON.stringify(this.matchs)) ;

  this.matchService.updateMatch(this.match).subscribe(
    (data)=>{
      console.log(data.message);
    }
  )

}
else{

// add
// console.log(this.match);

// let idMatch = JSON.parse(localStorage.getItem("idMatch") || "1") ;



// this.match.id = idMatch ;

 this.match.role ="match" ;


// this.matchs.push(this.match)

// localStorage.setItem("matchs",JSON.stringify(this.matchs)) ;
// localStorage.setItem("idMatch", idMatch + 1) ;

this.matchService.createMatch(this.match).subscribe(
  (data)=>{
    console.log(data.message);
  }
)

}
this.router.navigate(['dashboard'])
  }

}
