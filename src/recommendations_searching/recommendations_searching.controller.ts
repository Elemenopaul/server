// recommendations.controller.ts
import { Controller, Get } from '@nestjs/common';
import { RecommendationsService } from './recommendations_searching.service';
import { Recommendation } from '@prisma/client';

@Controller('recommendations')
export class RecommendationsController {
  constructor(private recommendationsService: RecommendationsService) {}

  @Get()
  async getAllRecommendations(): Promise<Recommendation[]> {
    return this.recommendationsService.getAllRecommendations();
  }

  // Add more methods for other operations as needed
}