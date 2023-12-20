// savingprofiles.module.ts
import { Module } from '@nestjs/common';
import { ProfilesSavingController } from './savingprofiles.controller';
import { SavingProfilesService } from './savingprofiles.service';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProfilesSavingController],
  providers: [SavingProfilesService],
})
export class ProfilesSavingModule {}