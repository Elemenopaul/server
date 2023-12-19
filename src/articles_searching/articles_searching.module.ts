// articles.module.ts
import { Module } from '@nestjs/common';
import { ArticlesService } from './articles_searching.service';
import { ArticlesController } from './articles_searching.controller';
import { PrismaModule } from '../prisma.module';


@Module({
  imports: [PrismaModule],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}