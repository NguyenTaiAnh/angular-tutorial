import { Injectable } from "@angular/core";
import { Observable, of, timeout } from "rxjs";
import { StoriesModel, StoryUpdateModel } from "./stories.model";

@Injectable({
    providedIn: 'root',
})

export class StoryApiService {
    data:StoriesModel[] =[
        {
            id:"1",
            title:"OnePiece",
            tag:"one-piece",
            synopsis:"One piece description",
            author_id:"1",
            status:0,
            categoy_id:"1",
            image:"https://upload.wikimedia.org/wikipedia/vi/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
            views:100,
            likes:100,
            comment_id:1
        }
    ]
    getStoryList():Observable<any>{

        for(let i = 0; i < 10; i++){
            const item = {
                id: i.toString(),
                title:"OnePiece "+i.toString(),
                tag:"one-piece-"+i.toString(),
                synopsis:"One piece description "+i.toString(),
                author_id:"1",
                status:0,
                categoy_id:"1",
                image:"https://upload.wikimedia.org/wikipedia/vi/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
                views:100,
                likes:100,
                comment_id:1
            }
            this.data.push(item)
        }
        return of(this.data).pipe(timeout(1000));
    }

    addStory(payload: StoriesModel): Observable<any>{
        // this.data.push(payload);
        return of(payload).pipe(timeout(1000));
    }

    updateStory(storyUpdate: StoryUpdateModel, id:any): Observable<any>{
        return of(storyUpdate).pipe(timeout(1000));;
    }
    
    deleteStory(storyUpdate: StoryUpdateModel): Observable<any>{
        return of(storyUpdate).pipe(timeout(1000));
    }
}