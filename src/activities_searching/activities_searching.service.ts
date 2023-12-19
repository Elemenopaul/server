// activities.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service'; 
import { Activity } from '@prisma/client';

@Injectable()
export class ActivitiesService {
  constructor(private prisma: PrismaService) {}

  async getAllActivities(): Promise<Activity[]> {
    return this.prisma.activity.findMany();
  }

  // Add more methods for other operations as needed
}