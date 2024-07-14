import { StoryStateService } from './../../../core/services/stories/stories.state';
import { Component, Injector } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { TableSearchObservableFunc } from '../../../core/models/table.model';
import { StoriesModel } from '../../../core/services/stories/stories.model';
import { StoryService } from '../../../core/services/stories/stories.service';
import {
  initAdminTable,
  TABLE_COLUMN_MAPPING,
} from '../../../core/token/table-column-mapping.token';
import { BaseListComponent } from '../../../shared/base/base-list.component';
import { BaseListInterface } from '../../../shared/base/base-list.interfece';
@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.scss',
  providers: [
    {
      provide: TABLE_COLUMN_MAPPING,
      useFactory: () => {
        return {
          ...initAdminTable(),
        };
      },
    },
  ],
})
export class StoriesComponent
  extends BaseListComponent
  implements BaseListInterface
{

  constructor(private injector: Injector, private _storyService: StoryService, private _storyState: StoryStateService) {
    super(injector);
    this.createTableColumn();
    this.getSearchObservableFunc = this.getSearchObservableFunc.bind(this);
    this.fetchData();
  }
  actionPageLink: string = '';
  createTableColumn(): void {
    this.tableColumn = [
      this.tableColumnMapping.STORIES.id,
      this.tableColumnMapping.STORIES.title,
      this.tableColumnMapping.STORIES.tag,
      this.tableColumnMapping.STORIES.synopsis,
      this.tableColumnMapping.STORIES.author_id,
      this.tableColumnMapping.STORIES.status,
      this.tableColumnMapping.STORIES.categoy_id,
      this.tableColumnMapping.STORIES.image,
      this.tableColumnMapping.STORIES.views,
      this.tableColumnMapping.STORIES.likes,
      this.tableColumnMapping.STORIES.action
    ];
  }
  getSearchObservableFunc(): TableSearchObservableFunc {
    throw new Error('Method not implemented.');
  }

  fetchData(){
    this._storyService.getStories().pipe(
      catchError((error)=> {
        this._storyState.onGetStoryFailure(error);
        return of(null);
      }),
      tap(result=> {
        console.log("api response: ", result);
        this.tableDataList = result;
      }),
    ).subscribe();
  }
}
