// profiles_searching.module.ts
import { Module } from '@nestjs/common';
import { ProfilesSearchingService } from './profiles_searching.service';
import { ProfilesSearchingController } from './profiles_searching.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProfilesSearchingController],
  providers: [ProfilesSearchingService],
})
export class ProfilesSearchingModule {}