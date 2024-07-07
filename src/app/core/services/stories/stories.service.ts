import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { StoryApiService } from './stories.api';
import { StoryStateService } from './stories.state';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  constructor(
    private storyStateService: StoryStateService,
    private storyApiService: StoryApiService
  ) {}

  getStories() {
    this.storyStateService.onGetStoryRequest();

    return this.storyApiService.getStoryList().pipe(
      catchError((error) => {
        console.log(error);
        return of(null);
      }),
      tap((result)=>{
        this.storyStateService.onGetStorySuccess(result);
      })
    );
  }
}
