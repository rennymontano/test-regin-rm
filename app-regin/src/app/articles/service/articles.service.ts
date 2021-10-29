import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../interface/article';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  BASE_URL = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getInitData(){
    return this.http.get(`${this.BASE_URL}/api/initData`);
  }

  getArticles(){
    return this.http.get(`${this.BASE_URL}/api/articles`);
  }

  deleteArticle(id: string, article: Article) {
    return this.http.put(`${this.BASE_URL}/api/delete?articleID=${id}`, article)
  }

}
