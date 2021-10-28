import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { MongooseModule } from '@nestjs/mongoose'
import { ArticleSchema  } from './schema/article.schema'
import { HttpModule } from '@nestjs/axios'
import { CronJobsService } from './cron-jobs/cron-jobs.service';

@Module({
    imports: [ MongooseModule.forFeature([
        {name:'Article', schema: ArticleSchema}
    ]),
    HttpModule
    ],
    controllers: [ArticlesController],
    providers: [ArticlesService, CronJobsService],
})
export class ArticlesModule {}
