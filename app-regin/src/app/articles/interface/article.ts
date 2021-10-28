export interface Article {
    _id?: string;
    created_at: string;
    title: string;
    author: string;
    story_id: number;
    story_title: string;
    story_url: string;
    url: string;
    parent_id: number;
    created_at_i: number;
    isDelete: boolean;
    __v?: number;
}