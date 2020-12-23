import { Application } from 'express';

import placeRoute from './place';
import sessionRoute from './session';

export class Routes {
  public routes(app: Application): void {
    app.use('/', placeRoute);
    app.use('/', sessionRoute);
  }
}
