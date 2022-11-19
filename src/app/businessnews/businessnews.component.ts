import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service'

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

    // display data
    businessnewsDisplay:any = [];

  ngOnInit(): void {

    this._services.businessNews().subscribe((result)=>{
      this.businessnewsDisplay = JSON.parse(result._body).articles;
    })
  }

}
