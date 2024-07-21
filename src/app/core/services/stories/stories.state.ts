import { Injectable } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { StoriesModel, StoryUpdateModel } from './stories.model';

@Injectable({
  providedIn: 'root',
})
export class StoryStateService {
  storyForm: FormGroup<{
    id: FormControl<string>;
    title: FormControl<string>;
    tag: FormControl<string>;
    synopsis: FormControl<string>;
    author_id: FormControl<string>;
    status: FormControl<number>;
    categoy_id: FormControl<string>;
    image: FormControl<string>;
    views: FormControl<number>;
    likes: FormControl<number>;
    comment_id: FormControl<number>;
  }> = this.fb.group({
    id: '',
    title: '',
    tag: '',
    synopsis: '',
    author_id: '',
    status: 0,
    categoy_id: '',
    image: '',
    views: 0,
    likes: 0,
    comment_id: 0,
  });

  storyState = new BehaviorSubject<{
    loading: boolean;
    error?: string;
    data: StoriesModel[];
    pageInfo: {};
  }>({
    loading: false,
    error: '',
    data: [],
    pageInfo: {
      total: 0,
      pageNumber: 0,
      pages: 1,
      pageSize: 10,
    },
  });
  storiesForm$ = this.storyState.asObservable();
  addStoryState = new BehaviorSubject<{
    loading: boolean;
    error?: string;
  }>({
    loading: false,
    error: '',
  });

  updateStoryState = new BehaviorSubject<{
    loading: boolean;
    error?: string;
  }>({
    loading: false,
    error: '',
  });

  constructor(private fb: NonNullableFormBuilder) {}

  onGetStoryRequest() {
    this.storyState.next({
      ...this.storyState.getValue(),
      loading: true,
      error: '',
      data: [],
    });
  }
  onGetStorySuccess(result: StoriesModel[]) {
    this.storyState.next({
      ...this.storyState.getValue(),
      loading: false,
      error: '',
      data: result,
    });
  }
  onGetStoryFailure(error: string) {
    this.storyState.next({
      ...this.storyState.getValue(),
      loading: false,
      error: error,
      data: this.storyState.getValue().data,
    });
  }

  onAddStoryRequest() {
    this.addStoryState.next({
      loading: true,
      error: '',
    });
  }
  onAddStorySuccess(result: StoriesModel) {
    this.storyState.next({
      ...this.storyState.getValue(),
      loading: false,
      error: '',
    });

    this.addStoryState.next({
      loading: false,
      error: '',
    });
  }

  onAddStoryFailure(error: string) {
    this.addStoryState.next({
      loading: false,
      error: error,
    });
  }

  onUpdateStoryRequest() {
    this.updateStoryState.next({
      loading: true,
      error: '',
    });
  }

  onUpdateStorySuccess(updateStory: StoryUpdateModel, id: any) {
    this.storyState.next({
      ...this.storyState.getValue(),
      loading: false,
      error: '',
      data: this.storyState.getValue().data.map((item: StoriesModel) => {
        return item.id == id ? { ...item, ...updateStory } : item;
      }),
    });
    this.updateStoryState.next({
      error: "",
      loading: false
    });
  }

  onUpdateStoryFailure(error:string){
    this.updateStoryState.next({
        loading:false,
        error: error
    })
  }
}
