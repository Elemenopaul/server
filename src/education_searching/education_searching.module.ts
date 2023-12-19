// education.module.ts
import { Module } from '@nestjs/common';
import { EducationService } from './education_searching.service';
import { EducationController } from './education_searching.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EducationController],
  providers: [EducationService],
})
export class EducationModule {}