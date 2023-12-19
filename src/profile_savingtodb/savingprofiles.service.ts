// savingprofiles.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Profile } from '@prisma/client'; // Correct import statement

@Injectable()
export class ProfilesSavingService {
  constructor(private prisma: PrismaService) {}

  async saveProfiles(profilesArray: Profile[]): Promise<any> { // Correct type annotation
    const savedProfiles = [];

    for (const profile of profilesArray) {
      const savedProfile = await this.prisma.profile.create({ // Correct usage
        data: profile,
      });
      savedProfiles.push(savedProfile);
    }

    return savedProfiles;
  }
}