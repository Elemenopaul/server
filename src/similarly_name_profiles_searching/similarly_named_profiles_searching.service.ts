// similarly_named_profiles.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { SimilarlyNamedProfile } from '@prisma/client';

@Injectable()
export class SimilarlyNamedProfilesService {
  constructor(private prisma: PrismaService) {}

  async getAllSimilarlyNamedProfiles(): Promise<SimilarlyNamedProfile[]> {
    return this.prisma.similarlyNamedProfile.findMany();
  }

  // Add more methods for other operations as needed
}