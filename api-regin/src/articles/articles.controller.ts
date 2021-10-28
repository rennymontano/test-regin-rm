import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Put, Query, Res } from '@nestjs/common';
import {CreateArticleDto} from './dto/ceate-Article.dto';
import { ArticlesService } from './articles.service';
import { CronJobsService } from './cron-jobs/cron-jobs.service';

@Controller('/api')
export class ArticlesController {

    constructor(private service: ArticlesService, private cronJob: CronJobsService){}

    @Get('/articles')
    async getArticles(@Res() res) {
        const articles = await this.service.getArticles();
        return res.status(HttpStatus.OK).json({
            data: articles
        });
    }

    @Put('/delete')
    async updateArticles(@Res() res, @Body() createArticleDto: CreateArticleDto, @Query('articleID') articleID) {
        const article = await this.service.updateArticle(articleID, createArticleDto);
        if(!article) throw new NotFoundException('El articulo no existe')
        return res.status(HttpStatus.OK).json({
            message: "Articulo ya fue atualizado",
            data: article
        });
    }

    @Get('/initData')
    async getInitData(@Res() res) {
        const init = await this.cronJob.showTaskHour();
        const articles = await this.service.getArticles();
        return res.status(HttpStatus.OK).json({
            data: articles
        });
    }
}
