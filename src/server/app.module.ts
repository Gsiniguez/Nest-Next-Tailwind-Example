import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { NODE_ENV } from 'src/shared/constants/env';
import { BlogModule } from './modules/blog/blog.module';
import { AppController } from './page.controller';

@Module({
  imports: [
    BlogModule,
    RenderModule.forRootAsync(
      Next({ dev: NODE_ENV === 'development' }),
      { viewsDir: null }
    ),
  ],
  controllers: [AppController],
})
export class AppModule { }