import mongoose from 'mongoose';
import { ENV_VARS } from '../constants/index.js';
import { env } from '../utils/env.js';

export const initMongoDB = async () => {
  const connectionLink = `mongodb+srv://${env(ENV_VARS.MONGODB_USER)}:${env(
    ENV_VARS.MONGODB_PASSWORD,
  )}@${env(ENV_VARS.MONGODB_URL)}/${env(
    ENV_VARS.MONGODB_DB,
  )}?retryWrites=true&w=majority&appName=Cluster0`;

  try {
    await mongoose.connect(connectionLink);
    console.log('Successfully established database connection!');
  } catch (err) {
    console.log(err);
    throw err;
  }
  //    try {
  //     const user = env('MONGODB_USER');
  //     const pwd = env('MONGODB_PASSWORD');
  //     const url = env('MONGODB_URL');
  //     const db = env('MONGODB_DB');
  //     await mongoose.connect(
  //       `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority`,
  //     );
  //     console.log('Mongo connection successfully established!');
  //   } catch (err) {
  //     console.log('Error while setting up mongo connection', err);
  //     throw err;
  //   }
};
