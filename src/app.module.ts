import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivitiesModule } from './activities_searching/activities_searching.module';
import { ArticlesModule } from './articles_searching/articles_searching.module';
import { EducationModule } from './education_searching/education_searching.module';
import { ExperiencesModule } from './experiences_searching/experiences_searching.module';
import { ProfilesSearchingModule } from './profiles_searching/profiles_searching.module';
import { ProfilesSavingModule } from './profile_savingtodb/savingprofiles.module'; // Add this line
import { RecommendationsModule } from './recommendations_searching/recommendations_searching.module';
import { SimilarlyNamedProfilesModule } from './similarly_name_profiles_searching/similarly_named_profiles_searching.module';
import { ApiController } from './api.controller';

@Module({
  imports: [
    ActivitiesModule,
    ArticlesModule,
    EducationModule,
    ExperiencesModule,
    ProfilesSearchingModule,
    ProfilesSavingModule, // And add this line
    RecommendationsModule,
    SimilarlyNamedProfilesModule
  ],
  controllers: [AppController, ApiController],
  providers: [AppService],
})
export class AppModule {}