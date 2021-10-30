import { Test, TestingModule } from '@nestjs/testing';
import {ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service'
import { CronJobsService } from './cron-jobs/cron-jobs.service'

describe('ArticlesController', () => {
  let controller: ArticlesController;
  const mockArticleService = {}
  const mockCronService = {}

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlesController],
      providers: [ ArticlesService,  CronJobsService]
    })
    .overrideProvider(ArticlesService).useValue(mockArticleService)
    .overrideProvider(CronJobsService).useValue(mockCronService)
    .compile();

    controller = module.get<ArticlesController>(ArticlesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

});
