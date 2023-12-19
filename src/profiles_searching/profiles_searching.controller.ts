// profiles_searching.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ProfilesSearchingService } from './profiles_searching.service';
import { Profile } from '@prisma/client';

@Controller('profiles')
export class ProfilesSearchingController {
  constructor(private profilesSearchingService: ProfilesSearchingService) {}

  @Get()
  async getAllProfiles(): Promise<Profile[]> {
    return this.profilesSearchingService.getAllProfiles();
  }

  // Add more methods for other operations as needed
}