import { of } from 'rxjs';
import { Article } from '../interface/article';
import { ArticlesService } from './articles.service';

describe('Test Articles Service', () => {
  let service: ArticlesService;
  let httpClientSpy: {post: jasmine.Spy, get: jasmine.Spy, put: jasmine.Spy };
  const mockResult = { "data": { "id": 1, "article": 'NodeJs' } }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put']);
    service = new ArticlesService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test should return the object of all articles', (done: DoneFn) => {

    httpClientSpy.get.and.returnValue(of(mockResult))

    service.getArticles()
    .subscribe(res => {
      expect(res).toEqual(mockResult)
      done()
    })

  });

  it('test should return the object of all articles start data', (done: DoneFn) => {

    httpClientSpy.get.and.returnValue(of(mockResult))

    //servicio de inicio de datos
    service.getInitData()
    .subscribe(res => {
      expect(res).toEqual(mockResult)
      done()
    })

  });

  it('test should return the object of all articles start data', (done: DoneFn) => {

    const id = '123456'
    const mockArticle: Article =         {
      "_id": "6",
      "created_at": "2021-10-28T16:35:34.000Z",
      "title": '',
      "author": "spmurrayzzz",
      "story_id": 29,
      "story_title": "Consistent",
      "story_url": "",
      "url": '',
      "parent_id": 29,
      "created_at_i": 16,
      "isDelete": false,
  }

    httpClientSpy.put.and.returnValue(of(mockArticle))

    //servicio de inicio de datos
    service.deleteArticle(id, mockArticle)
    .subscribe(res => {
      expect(res).toEqual(mockArticle)
      done()
    })

  });

});
