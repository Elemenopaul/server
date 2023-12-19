import { Controller, Post, Body } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, catchError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Controller('proxycurl')
export class ProxycurlController {
  constructor(private httpService: HttpService) {}

  @Post()
  search(@Body() data: any) {
    const url = 'https://nubela.co/proxycurl/api/search/person/';
    const headers = { 'Authorization':'Bearer xX3lfD4060k_S3IXvSE3Vw' };
    const params = { ...data, enrich_profiles: 'enrich' };

    console.log('Authorization header:', headers['Authorization']);
    console.log(params);

    return this.httpService.get(url, { headers: headers, params: params })
      .pipe(
        tap(response => console.log(response)),
        map(response => response.data),
        catchError(error => {
            console.error('Error:', error);
            return throwError(() => error);
          })
      );
  }
}