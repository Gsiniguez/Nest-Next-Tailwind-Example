/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('/api/blogs')
export class BlogController {
    constructor(private service: BlogService) { }

    @Get('')
    listBlogPosts() {
        return this.service.getBlogPosts();
    }

    @Get(':id')
    getBlogPostById(@Param('id', new ParseIntPipe()) id: number) {
        return this.service.getBlogPost(id);
    }
}
