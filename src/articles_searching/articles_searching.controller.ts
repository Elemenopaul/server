// articles.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ArticlesService } from './articles_searching.service';
import { Article } from '@prisma/client';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Get()
  async getAllArticles(): Promise<Article[]> {
    return this.articlesService.getAllArticles();
  }

  // Add more methods for other operations as needed
}