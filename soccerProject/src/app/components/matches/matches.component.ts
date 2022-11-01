import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
 
  matchs :any ;

  constructor( private matchService : MatchService) { }

  ngOnInit(): void {

    // this.matchs = JSON.parse(localStorage.getItem('matchs'))

    this.matchService.getAllMatch().subscribe(
      (data)=>{
        this.matchs = data.matchs
      }
    )

 
    
  }

}
