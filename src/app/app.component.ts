import { Component } from '@angular/core';

import { WikiService } from './wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search';
  pages=[];

  constructor(public wikiservice:WikiService){}

  onTerm(value:string){
    // console.log('i am value ',value);   
    this.wikiservice.onSearch(value).subscribe((res:any)=>{
      // console.log(res);
      this.pages=res.query.search;
    
    })
  }

  
}
