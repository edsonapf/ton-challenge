import 'reflect-metadata';
import startDatabase from './database';
import initiateServer from './server';

const initiateApp = async () => {
  await startDatabase();
  initiateServer();
};

initiateApp();
