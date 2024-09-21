import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: dtbProvideKey,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.MONGODB_URI),
  },
];
