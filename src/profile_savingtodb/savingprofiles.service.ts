import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SavingProfilesService {
  constructor(private prisma: PrismaService) {}

  async saveProfiles(profilesArray) {
    const savedProfiles = [];
  
    for (const item of profilesArray) {
      const profile = item.profile;
  
      if (!profile.public_identifier) {
        throw new Error('public_identifier is missing in one of the profiles');
      }
  
      // Format the profile data to match the new schema
      const formattedProfile = this.formatProfileData(profile);
  
      // Save the formatted profile data to the database
      try {
        const savedProfile = await this.prisma.profile.create({
          data: formattedProfile,
        });
  
        savedProfiles.push(savedProfile);
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
          console.log(`Profile with public identifier ${formattedProfile.public_identifier} already exists.`);
        } else {
          throw error;
        }
      }
    }
  
    return savedProfiles;
  }

  formatProfileData(profile) {
    console.log('Educations:', profile.educations);
    console.log('Experiences:', profile.experiences);
    return {
      public_identifier: profile.public_identifier || 'No public identifier provided',
      name: profile.full_name || 'No name provided',
      city: profile.city || 'No city provided',
      state: profile.state || 'No state provided',
      country: profile.country || 'No country provided',
      summary: profile.summary || 'No summary provided',
      experiences: profile.experiences ? {
        create: profile.experiences.map(experience => ({
          title: experience.title || 'No title provided',
          company: experience.company || 'No company provided',
          description: experience.description || 'No description provided',
          location: experience.location || 'No location provided',
          starts_at: experience.starts_at ? new Date(experience.starts_at.year, experience.starts_at.month - 1, experience.starts_at.day) : new Date(),
          ends_at: experience.ends_at ? new Date(experience.ends_at.year, experience.ends_at.month - 1, experience.ends_at.day) : null,
          company_linkedin_profile_url: experience.company_linkedin_profile_url || 'No URL provided',
          logo_url: experience.logo_url || 'No logo URL provided',
        })),
      } : undefined,
      educations: profile.educations ? {
        create: profile.educations.map(education => ({
          school: education.school || 'No school provided',
          degree_name: education.degree_name || 'No degree name provided',
          field_of_study: education.field_of_study || 'No field of study provided',
          starts_at: education.starts_at ? new Date(education.starts_at.year, education.starts_at.month - 1, education.starts_at.day) : new Date(),
          ends_at: education.ends_at ? new Date(education.ends_at.year, education.ends_at.month - 1, education.ends_at.day) : null,
          description: education.description || 'No description provided',
          activities_and_societies: education.activities_and_societies || 'No activities and societies provided',
          grade: education.grade || 'No grade provided',
          logo_url: education.logo_url || 'No logo URL provided',
          school_linkedin_profile_url: education.school_linkedin_profile_url || 'No URL provided',
          location: education.location || 'No location provided',
        })),
      } : undefined,
    };
  }
}