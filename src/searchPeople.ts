// pages/api/searchpeople.js

import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function searchPeople(req: Request, res: Response) {
  console.log('Received request');
  const { name, surname, company, school, location, title } = req.query;

  const where: {
    first_name?: { contains: string },
    last_name?: { contains: string },
    experiences?: { some: any },
    education?: { some: { school: { contains: string } } },
  } = {};

  const experiences: {
    company?: { contains: string },
    location?: { contains: string },
    title?: { contains: string },
  } = {};

  if (name) where.first_name = { contains: name as string };
  if (surname) where.last_name = { contains: surname as string };
  if (company) experiences.company = { contains: company as string };
  if (school) where.education = { some: { school: { contains: school as string } } };
  if (location) experiences.location = { contains: location as string };
  if (title) experiences.title = { contains: title as string };

  if (Object.keys(experiences).length > 0) {
    where.experiences = { some: experiences };
  }

  const people = await prisma.profile.findMany({ where, include: { experiences: true, education: true } });

  console.log(JSON.stringify(people, null, 2)); // Log the entire people array
  
  if (people.length > 0) {
    console.log(people[0].experiences); // Log the experiences of the first person
    console.log(people[0].education); // Log the education of the first person
  } else {
    console.log('No people found');
  }
  
  res.send(people);
}