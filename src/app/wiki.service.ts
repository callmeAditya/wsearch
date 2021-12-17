import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // unique

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  baseurl='https://en.wikipedia.org/w/api.php'

  constructor(private httpclient: HttpClient) { }

  onSearch(term: string){
    // const search= `${this.baseurl}?action=query&list=search&srsearch=${term}&format=json`
    // this.httpclient.get(search)
    // or like this
    const search= this.httpclient.get(this.baseurl,{
      params:{
        action:'query',
        format:'json',
        list:'search',
        utf8:'1',
        srsearch:term,
        origin:'*'
      }
    })
    return search
  }

}
