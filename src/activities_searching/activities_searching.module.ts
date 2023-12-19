// activities.module.ts
import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities_searching.service';
import { ActivitiesController } from './activities_searching.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ActivitiesController],
  providers: [ActivitiesService],
})
export class ActivitiesModule {}