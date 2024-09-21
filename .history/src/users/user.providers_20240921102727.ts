import { Connection } from 'mongoose';
import { UserSchema } from './user.schema';
import { USER_MODEL } from 'src/constants';

export const usersProviders = [
  {
    provide: USER_MODEL,
    useFactory: (connection: Connection) => connection.model('Cat', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
