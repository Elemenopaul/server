// activities.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ActivitiesService } from './activities_searching.service';
import { Activity } from '@prisma/client';

@Controller('activities')
export class ActivitiesController {
  constructor(private activitiesService: ActivitiesService) {}

  @Get()
  async getAllActivities(): Promise<Activity[]> {
    return this.activitiesService.getAllActivities();
  }

  // Add more methods for other operations as needed
}