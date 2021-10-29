import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { CreateArticleDto } from './dto/ceate-article-dto';
import { Article } from './interfaces/article';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class ArticlesService {

    constructor(
        @InjectModel('Article') private readonly articleModel: Model<Article>,
        private http: HttpService
    ) {}

    async getArticles(): Promise<Article[]> {
        const articles = await this.articleModel.find();
       return articles;
    }

    async updateArticle(articleID: string, newArticle: CreateArticleDto): Promise<Article> {
        const article = await this.articleModel.findByIdAndUpdate(articleID, newArticle);
        return article;
    }

    getExternalData(): Observable<AxiosResponse<CreateArticleDto[]>> {
        return this.http.get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs')
    }

}
