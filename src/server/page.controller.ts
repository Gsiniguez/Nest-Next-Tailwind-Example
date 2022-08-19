import { Controller, Get, Param, Render } from '@nestjs/common';


@Controller()
export class AppController {

  @Get('/')
  @Render('index')
  async home() {
    return {}
  }

  @Get(':id')
  @Render('id_blog')
  blogPost(@Param('id') id: string) {
    return { id };
  }


}
