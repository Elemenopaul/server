// similarly_named_profiles.module.ts
import { Module } from '@nestjs/common';
import { SimilarlyNamedProfilesService } from './similarly_named_profiles_searching.service';
import { SimilarlyNamedProfilesController } from './similarly_named_profiles_searching.controller';
import { PrismaModule } from '../prisma.module';


@Module({
  imports: [PrismaModule],
  controllers: [SimilarlyNamedProfilesController],
  providers: [SimilarlyNamedProfilesService],
})
export class SimilarlyNamedProfilesModule {}