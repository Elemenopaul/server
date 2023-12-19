// education.controller.ts
import { Controller, Get } from '@nestjs/common';
import { EducationService } from './education_searching.service';
import { Education } from '@prisma/client';

@Controller('education')
export class EducationController {
  constructor(private educationService: EducationService) {}

  @Get()
  async getAllEducation(): Promise<Education[]> {
    return this.educationService.getAllEducation();
  }

  // Add more methods for other operations as needed
}