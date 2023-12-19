// profiles_searching.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Profile } from '@prisma/client';

@Injectable()
export class ProfilesSearchingService {
  constructor(private prisma: PrismaService) {}

  async getAllProfiles(): Promise<Profile[]> {
    return this.prisma.profile.findMany();
  }

  // Add more methods for other operations as needed
}