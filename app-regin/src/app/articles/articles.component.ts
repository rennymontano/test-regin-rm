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
    this.service.getArticles()
    .subscribe(
      (res: any) => {
        this.orderedArticles =  this.orderDate(res.data);
        if(this.orderedArticles.length > 0) {
          console.log(this.orderedArticles)
        } else {
          this.getInitData()
        }
    })
  }

  getInitData() {
    this.service.getInitData()
    .subscribe(
      (res: any) => {
        this.orderedArticles =  this.orderDate(res.data);
    })
  }

  openUrl(url: string) {
      window.open(url,'_black');
  }

  deleteArticle(event: any, id: string) {
    const data: Article = this.orderedArticles.find((item: Article) => item._id === id);
    data.isDelete = true;
    this.service.deleteArticle(id, data).subscribe(
      (res: any) => {
        console.log(res)
        this.getDataArticles();
      }
    )
    event.stopPropagation();
  }

  orderDate(items: any[]): any[] {
    return items.sort(function(a, b) {
      a = moment(a.created_at, 'YYYY-MM-DD HH:mm:ss');
      b = moment(b.created_at, 'YYYY-MM-DD HH:mm:ss');
      return a > b ? -1 : a < b ? 1 : 0;
    });
  }

}
