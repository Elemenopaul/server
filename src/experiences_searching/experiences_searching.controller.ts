// experiences.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ExperiencesService } from './experiences_searching.service';
import { Experience } from '@prisma/client';

@Controller('experiences')
export class ExperiencesController {
  constructor(private experiencesService: ExperiencesService) {}

  @Get()
  async getAllExperiences(): Promise<Experience[]> {
    return this.experiencesService.getAllExperiences();
  }

  // Add more methods for other operations as needed
}