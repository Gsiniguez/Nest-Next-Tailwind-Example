import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        BlogController,],
    providers: [
        BlogService,],
})
export class BlogModule { }
