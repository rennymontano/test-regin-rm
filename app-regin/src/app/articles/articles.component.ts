import { Component, OnInit } from '@angular/core';
import * as moment from 'moment/moment';
import { ArticlesService } from './service/articles.service'
import { Article } from './interface/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  titleFirst: string = '';
  titleLarst: string = '';
  isDelete:boolean =  false;

  articles: any[] = [];
  orderedArticles: any []= [];

  constructor(private service: ArticlesService) { }

  ngOnInit(): void {
    this.titleFirst = 'HN Feed';
    this.titleLarst = 'We <3 hacker new!';
    this.getDataArticles();

  }

  getDataArticles() {
    this.orderedArticles = [];
    this.service.getArticles()
    .subscribe(
      (res: any) => {
        this.orderedArticles =  res.data;
    })
  }

  getInitData() {
    this.service.getInitData()
    .subscribe(
      (res: any) => {
        this.orderedArticles =  res.data;
    })
  }

  refreshArticle(event: any) {
    if(this.orderedArticles.length === 0) {
      this.getInitData()
    } else {
      this.getDataArticles();
    }
  }

  openUrl(url: string) {
      window.open(url,'_black');
  }

  deleteArticle(event: any, id: string) {
    const data: Article = this.orderedArticles.find((item: Article) => item._id === id);
    data.isDelete = true;
    this.service.deleteArticle(id, data).subscribe(
      (res: any) => {
        this.getDataArticles();
      }
    )
    event.stopPropagation();
  }

}
