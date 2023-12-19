// similarly_named_profiles.controller.ts
import { Controller, Get } from '@nestjs/common';
import { SimilarlyNamedProfilesService } from './similarly_named_profiles_searching.service';
import { SimilarlyNamedProfile } from '@prisma/client';

@Controller('similarly_named_profiles')
export class SimilarlyNamedProfilesController {
  constructor(private similarlyNamedProfilesService: SimilarlyNamedProfilesService) {}

  @Get()
  async getAllSimilarlyNamedProfiles(): Promise<SimilarlyNamedProfile[]> {
    return this.similarlyNamedProfilesService.getAllSimilarlyNamedProfiles();
  }

  // Add more methods for other operations as needed
}