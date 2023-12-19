// savingprofiles.module.ts
import { Module } from '@nestjs/common';
import { ProfilesSavingController } from './savingprofiles.controller';
import { ProfilesSavingService } from './savingprofiles.service';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProfilesSavingController],
  providers: [ProfilesSavingService],
})
export class ProfilesSavingModule {}