import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Post } from './post.domain';

import { RestService } from './rest.service';

describe('RestService', () => {
  let service: RestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers : [RestService]
    });
    service = TestBed.inject(RestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check json validity', (fn : DoneFn) => {
    service.getCall().subscribe({
      next: (res ) => {
        const post = res as Post
        const actualUserId = post.userId
        const expectedUserId = 1

        expect(actualUserId).toBe(expectedUserId)
        fn()
      } 
    })
  })

});
