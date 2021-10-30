import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../interface/article';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  BASE_URL = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getInitData(): Observable<any>{
    return this.http.get(`${this.BASE_URL}/api/initData`);
  }

  getArticles(): Observable<any>{
    return this.http.get(`${this.BASE_URL}/api/articles`);
  }

  deleteArticle(id: string, article: Article): Observable<any> {
    return this.http.put(`${this.BASE_URL}/api/delete?articleID=${id}`, article)
  }

}
