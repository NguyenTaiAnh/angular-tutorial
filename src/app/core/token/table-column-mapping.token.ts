import { inject, InjectionToken } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TableColumn } from '../models/table.model';

export type TableColumnMapping = {
  CATEGORIES: {
    id: TableColumn;
    name: TableColumn;
  };
  STORIES: {
    id: TableColumn;
    title: TableColumn;
    tag: TableColumn;
    synopsis: TableColumn;
    author_id: TableColumn;
    status: TableColumn;
    categoy_id: TableColumn;
    image: TableColumn;
    views: TableColumn;
    likes: TableColumn;
    // comment_id: TableColumn;
  };
  CHAPTER: {
    id: TableColumn;
    story_id: TableColumn;
    content: TableColumn;
  };
  AUTHOR: {
    id: TableColumn;
    name: TableColumn;
  };
};
export const TABLE_COLUMN_MAPPING = new InjectionToken('Table Column Mapping', {
  factory: () => {
    return {} as TableColumnMapping;
  },
});

export function initAdminTable(): Pick<TableColumnMapping, 'STORIES'> {
  return {
    STORIES: {
      id: {
        field: 'id',
        header: translate('Field.StoryId'),
        search: 'text',
        isTextEllipsis: true,
      },
      title: {
        field: 'title',
        header: translate('Field.StoryName'),
        search: 'text',
        isTextEllipsis: true,
      },
      tag: {
        field: 'tag',
        header: translate('Field.StoryTag'),
        search: 'text',
        isTextEllipsis: true,
      },
      synopsis: {
        field: 'synopsis',
        header: translate('Field.StorySynopsis'),
        search: 'text',
        isTextEllipsis: true,
      },
      author_id: {
        field: 'author_id',
        header: translate('Field.AuthorId'),
        search: 'text',
        isTextEllipsis: true,
      },
      status: {
        field: 'status',
        header: translate('Field.Status'),
        search: 'text',
        isTextEllipsis: true,
      },
      categoy_id: {
        field: 'categoy_id',
        header: translate('Field.CategoryId'),
        search: 'text',
        isTextEllipsis: true,
      },
      image: {
        field: 'image',
        header: translate('Field.Image'),
        search: 'text',
        isTextEllipsis: true,
      },
      views: {
        field: 'views',
        header: translate('Field.Views'),
        search: 'text',
        isTextEllipsis: true,
      },
      likes: {
        field: 'likes',
        header: translate('Field.Likes'),
        search: 'text',
        isTextEllipsis: true,
      },
      ...getActionColumn(),
    },
  };
}

function translate(key: string): string {
  return inject(TranslateService).instant(key);
}
function getActionColumn(): { action: TableColumn } {
    return {
      action: {
        header: translate('Field.Action'),
        isCustom: true,
        isAction: true,
      },
    };
  }
