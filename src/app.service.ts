import { Injectable } from '@nestjs/common';
import { Comments } from './utils/appSchema';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  comments(data: Array<Comments>): string {
    
  }
}
