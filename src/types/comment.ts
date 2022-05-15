import { UserProperty, UserExample } from "./user";

export interface CommentProperty {
    id: string;
    owner: UserProperty;
    content: string;
    createdAt: Date;
}

export const CommentExample: CommentProperty = {
    id: "1",
    owner: UserExample,
    content: "This is a comment",
    createdAt: new Date()
}