// recommendations.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Recommendation } from '@prisma/client';

@Injectable()
export class RecommendationsService {
  constructor(private prisma: PrismaService) {}

  async getAllRecommendations(): Promise<Recommendation[]> {
    return this.prisma.recommendation.findMany();
  }

  // Add more methods for other operations as needed
}