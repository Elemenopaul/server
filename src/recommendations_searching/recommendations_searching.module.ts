// recommendations.module.ts
import { Module } from '@nestjs/common';
import { RecommendationsService } from './recommendations_searching.service';
import { RecommendationsController } from './recommendations_searching.controller';
import { PrismaModule } from '../prisma.module';


@Module({
  imports: [PrismaModule],
  controllers: [RecommendationsController],
  providers: [RecommendationsService],
})
export class RecommendationsModule {}