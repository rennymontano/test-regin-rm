import { Document } from  'mongoose'

export interface Article extends Document {
    readonly id?: number;
    readonly created_at: string;
    readonly title: string;
    readonly author: string;
    readonly story_id: number;
    readonly story_title: string;
    readonly story_url: string;
    readonly url: string;
    readonly parent_id: number;
    readonly created_at_i: number;
    readonly isDelete: boolean;
}