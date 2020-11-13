import { SetupServer } from '@src/server';
import supertest from 'supertest';

// rodará antes de todos os testes da aplicação
beforeAll(() => {
  const server = new SetupServer();

  server.init();

  global.testRequest = supertest(server.getApp());
});
