import { Component, OnInit } from '@angular/core';
import { faFileCode } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  faFileCode = faFileCode;

  constructor() { }

  ngOnInit(): void {
  }

}
