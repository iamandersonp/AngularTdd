import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { UserService } from './user.service';
import { User } from '../models/user.interface';

describe('UserService', () => {
  // Used to create a fake data
  let httpMock: HttpTestingController;

  // To create the service
  let service: UserService;

  beforeEach(() => {
    // inject the fake httpclient
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verify there is no pending request
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Observable<User[]>', () => {
    // Create a fake data of users
    const mockUsers: User[] = [
      {
        login: 'mojombo',
        id: 1,
        node_id: 'MDQ6VXNlcjE=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/1?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/mojombo',
        html_url: 'https://github.com/mojombo',
        followers_url:
          'https://api.github.com/users/mojombo/followers',
        following_url:
          'https://api.github.com/users/mojombo/following{/other_user}',
        gists_url:
          'https://api.github.com/users/mojombo/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/mojombo/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/mojombo/subscriptions',
        organizations_url:
          'https://api.github.com/users/mojombo/orgs',
        repos_url:
          'https://api.github.com/users/mojombo/repos',
        events_url:
          'https://api.github.com/users/mojombo/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/mojombo/received_events',
        type: 'User',
        site_admin: false
      },
      {
        login: 'defunkt',
        id: 2,
        node_id: 'MDQ6VXNlcjI=',
        avatar_url:
          'https://avatars.githubusercontent.com/u/2?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/defunkt',
        html_url: 'https://github.com/defunkt',
        followers_url:
          'https://api.github.com/users/defunkt/followers',
        following_url:
          'https://api.github.com/users/defunkt/following{/other_user}',
        gists_url:
          'https://api.github.com/users/defunkt/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/defunkt/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/defunkt/subscriptions',
        organizations_url:
          'https://api.github.com/users/defunkt/orgs',
        repos_url:
          'https://api.github.com/users/defunkt/repos',
        events_url:
          'https://api.github.com/users/defunkt/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/defunkt/received_events',
        type: 'User',
        site_admin: false
      }
    ];
    // Call the getAll method and suscribe
    service.getAll().subscribe((users: User[]) => {
      expect(users.length).toBe(2);
      expect(users).toEqual(mockUsers);
      expect(users[0].login).toBeDefined();
    });

    // Test the api url is correct
    const req = httpMock.expectOne(
      'https://api.github.com/users'
    );
    // test the method must be get
    expect(req.request.method).toBe('GET');
    // Resolve the request with fake data
    req.flush(mockUsers);
  });
});
