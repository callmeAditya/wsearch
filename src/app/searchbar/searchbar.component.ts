import { Component, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @Output() submitted= new EventEmitter<string>()

  constructor() { }

  term = ''



  ngOnInit(): void {
  }

  onInput(event: Event) {
    const parsed = event.target as HTMLInputElement
    this.term = (parsed.value)
    // console.log(this.term);
  }

  onSubmit(e: Event){
    e.preventDefault()
// console.log(this.term);
this.submitted.emit(this.term)

  }

}
