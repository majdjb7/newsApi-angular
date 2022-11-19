import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class NewsapiservicesService {

  constructor(private _http:Http) { }

  //newsapiurl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=763f1ca41a5548b591d0908d687fed24";

  //technewsapiurl
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=763f1ca41a5548b591d0908d687fed24";

  //businessnewsapiurl
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=763f1ca41a5548b591d0908d687fed24";


  //topheading()

  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl)
  }

  //technews()
  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl)
  }

    //businessnews()
    businessNews():Observable<any>
    {
      return this._http.get(this.businessApiUrl)
    }

}
