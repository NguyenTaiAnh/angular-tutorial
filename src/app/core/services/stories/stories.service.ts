import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { StoryApiService } from './stories.api';
import { StoriesModel, StoryUpdateModel } from './stories.model';
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
      tap((result) => {
        this.storyStateService.onGetStorySuccess(result);
      })
    );
  }

  addStory(story: StoriesModel) {
    this.storyStateService.onAddStoryRequest();
    this.storyApiService.addStory(story).pipe(
      catchError((error) => {
        this.storyStateService.onAddStoryFailure(error);
        return of(null);
      }),
      tap((result) => {
        this.storyStateService.onAddStorySuccess(result);
      })
    );
  }

  updateStory(story: StoryUpdateModel, id: any) {
    this.storyStateService.onUpdateStoryRequest();
    this.storyApiService.updateStory(story, id).pipe(
      catchError((error) => {
        this.storyStateService.onUpdateStoryFailure(error);
        return of(null);
      }),
      tap((result) => {
        this.storyStateService.onUpdateStorySuccess(result,id);
      })
    );
  }
}
