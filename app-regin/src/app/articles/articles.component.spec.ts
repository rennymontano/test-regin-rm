import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ArticlesService } from '../articles/service/articles.service';

import { ArticlesComponent } from './articles.component';
import { of } from 'rxjs';

describe('ArticlesComponent', () => {
  let app: ArticlesComponent;
  let service: ArticlesService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ArticlesService, ArticlesComponent ],
    })
  });

  beforeEach(() => {
    service =  TestBed.inject(ArticlesService);
    app = TestBed.inject(ArticlesComponent)
  });


  it('should call getDataArticles()', () => {
    const getDataArticlesSpy = spyOn(app, 'getDataArticles');
    app.ngOnInit();
    expect(getDataArticlesSpy).toHaveBeenCalled();
  });

  
  it('should call getArticles', () => {
    const getArticlesSpy = spyOn((app as any).service, 'getArticles').and.returnValue(of({}));
    app.getDataArticles();
    expect(getArticlesSpy).toHaveBeenCalled();
  });

  it('should call getInitData', () => {
    const getInitDataSpy = spyOn((app as any).service, 'getInitData').and.returnValue(of({}));
    app.getInitData();
    expect(getInitDataSpy).toHaveBeenCalled();
  });

  it('should call refreshArticle', () => {
    const getDataArticlesSpy = spyOn(app, 'getDataArticles');
    app.refreshArticle('');
    expect(getDataArticlesSpy).toHaveBeenCalled();
  });

  it('should call openUrl', () => {
    app.openUrl('');
  });

  it('should call deleteArticle', () => {
    app.deleteArticle('', '');
  });

});
