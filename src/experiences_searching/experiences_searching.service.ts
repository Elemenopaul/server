// experiences.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Experience } from '@prisma/client';

@Injectable()
export class ExperiencesService {
  constructor(private prisma: PrismaService) {}

  async getAllExperiences(): Promise<Experience[]> {
    return this.prisma.experience.findMany();
  }

  // Add more methods for other operations as needed
}