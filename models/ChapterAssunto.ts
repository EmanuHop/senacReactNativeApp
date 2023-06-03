import { Tag } from "./Tag";
import { Usuario } from "./Usuario";


export interface ChapterAssunto{
    id: number;
    key: number,
    title: string,
    description: string,
    author: Usuario,
    tags: Tag[] | undefined,
    time: string,
    views: number,
    comments: number,
    like: number,
    unlike: number,
    respondida: boolean
}