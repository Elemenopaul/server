import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { searchPeople as searchPeopleFunction } from './searchPeople';

@Controller('api')
export class ApiController {
  @Get('searchPeople')
  searchPeople(@Req() req: Request, @Res() res: Response) {
    return searchPeopleFunction(req, res);
  }
}