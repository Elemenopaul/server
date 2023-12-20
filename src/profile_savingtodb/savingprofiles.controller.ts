// savingprofiles.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { SavingProfilesService } from './savingprofiles.service';
import { Profile } from '@prisma/client'; // Correct import statement

@Controller('api')
export class ProfilesSavingController {
  constructor(private readonly profilesSavingService: SavingProfilesService) {}

  @Post('saveProfiles')
  async saveProfiles(@Body() profilesArray: Profile[]) { // Correct type annotation
    return this.profilesSavingService.saveProfiles(profilesArray);
  }
}