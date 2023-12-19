// savePeople.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function savePeople(peopleToSave) {
  // Validate each person
  for (const person of peopleToSave) {
    if (!person.firstName || !person.lastName) {
      throw new Error('Each person must have a firstName and lastName');
    }
  }

  try {
    // Use Prisma to save each person to the database
    const savedPeople = await Promise.all(peopleToSave.map(person => prisma.profile.create({ data: person })));

    console.log('People saved successfully:', savedPeople);

    // Return the saved people
    return savedPeople;
  } catch (error) {
    console.error('Error saving people:', error);

    // Throw the error to be handled by the calling function
    throw error;
  }
}