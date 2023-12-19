// education.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Education } from '@prisma/client';

@Injectable()
export class EducationService {
  constructor(private prisma: PrismaService) {}

  async getAllEducation(): Promise<Education[]> {
    return this.prisma.education.findMany();
  }

  // Add more methods for other operations as needed
}