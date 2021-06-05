import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  public blogs: BlogCard[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

export interface BlogCard {
  id: number;
  iconSrc: string;
  title: string;
  subTitle: string;
  imgSrc: string;
  description: string;
}
