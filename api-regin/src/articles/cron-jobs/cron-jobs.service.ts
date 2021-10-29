import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ArticlesService } from '../articles.service';
import {CreateArticleDto} from '../dto/ceate-article-dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { Article } from '../interfaces/article';

@Injectable()
export class CronJobsService {

    private readonly logger = new Logger(CronJobsService.name)
    constructor(private service: ArticlesService,
        @InjectModel('Article') private articleModel: Model<Article>,
    ){}


    //@Cron(CronExpression.EVERY_30_MINUTES)
    @Cron(CronExpression.EVERY_HOUR)
    showTaskHour() {
        this.logger.debug("Proceso de descarga de datos Externos y guardado de Datos")
        this.service.getExternalData().subscribe(resp => {
            resp.data['hits'].map(item => {
                this.saveDataBase(item)
             })
        });
    }

    saveDataBase(item: CreateArticleDto): string {

        const stTitle = item.story_title? item.story_title: item.title;
        if(!stTitle) return;

        const stUrl = item.story_url? item.story_url: item.url;
        if(!stUrl) return;
    
        const data: CreateArticleDto = {
            created_at: item.created_at,
            title: item.title,
            author: item.author,
            story_id: item.story_id,
            story_title: stTitle,
            story_url: item.story_url,
            url: item.url,
            parent_id: item.parent_id,
            created_at_i: item.created_at_i,
            isDelete: false
        }
    
        const newHit = new this.articleModel(data);
    
        this.articleModel.findOne({"created_at_i": data.created_at_i}, 'type value', function (err, array) {
            
            if(array !== null) return;
    
            return newHit.save();
        });
    
        return;
    
    }

}
