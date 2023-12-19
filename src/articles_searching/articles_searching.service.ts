// articles.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Article } from '@prisma/client';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  async getAllArticles(): Promise<Article[]> {
    return this.prisma.article.findMany();
  }

  // Add more methods for other operations as needed
}