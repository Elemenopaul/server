// experiences.module.ts
import { Module } from '@nestjs/common';
import { ExperiencesService } from './experiences_searching.service';
import { ExperiencesController } from './experiences_searching.controller';
import { PrismaModule } from '../prisma.module';


@Module({
  imports: [PrismaModule],
  controllers: [ExperiencesController],
  providers: [ExperiencesService],
})
export class ExperiencesModule {}