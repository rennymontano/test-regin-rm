import { Schema } from 'mongoose';

export const ArticleSchema = new Schema({
    created_at: String,
    title: String,
    author: String,
    story_id: Number,
    story_title: String,
    story_url: String,
    url: String,
    parent_id: Number,
    created_at_i: Number,
    isDelete: Boolean
})