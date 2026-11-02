import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class SimpleLoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: NextFunction) {
    console.log('Request masuk: ', req.method, req.originalUrl);
    
    next();
  }
}
