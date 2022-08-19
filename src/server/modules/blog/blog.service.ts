/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from '@nestjs/common';


const BLOG_POSTS = [
    { title: 'Lorem Ipsum', id: 1 },
    { title: 'Dolore Sit', id: 2 },
    { title: 'Ame', id: 3 },
];


@Injectable()
export class BlogService {

    async getBlogPosts() {
        return BLOG_POSTS
    }

    getBlogPost(postId: number) {
        const blogPost = BLOG_POSTS.find(({ id }) => id === postId);

        if (!blogPost) {
            throw new NotFoundException();
        }

        return blogPost
    }
}
