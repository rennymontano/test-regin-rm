import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../interface/article';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getInitData(){
    return this.http.get('/api/initData');
  }

  getArticles(){
    return this.http.get('/api/articles');
  }

  deleteArticle(id: string, article: Article) {
    return this.http.put(`/api/delete?articleID=${id}`, article)
  }

}
