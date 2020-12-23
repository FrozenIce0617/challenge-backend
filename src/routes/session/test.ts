process.env.NODE_ENV = 'test';
import * as request from 'supertest';
import server from '../../app';
import { Session } from '../../types';
import truncate from '../../utils/truncate';

describe('Sessions Route', () => {
  let mockData: Session;

  beforeAll(async () => {
    mockData = {
      start: new Date('2020-11-08T16:10:44.769Z'),
      end: new Date('2020-11-08T16:40:08.654Z'),
      sensor: 'sensor data',
    };
  });

  describe('POST /session', () => {
    it('should add a new session', async () => {
      const response = await request(server).post('/session').send(mockData);

      expect(response.status).toBe(200);
      expect(response.body.status).toEqual(true);
      expect(new Date(response.body.data.start)).toEqual(mockData.start);
      expect(new Date(response.body.data.end)).toEqual(mockData.end);
      expect(response.body.data.sensor).toEqual(mockData.sensor);
    });

    it('should be failing due to no data', async () => {
      const response = await request(server).post('/session');

      expect(response.status).toBe(400);
      expect(response.body.status).toEqual(false);
    });
  });

  describe('GET /session', () => {
    it('should return all sessions', async () => {
      const response = await request(server).get('/session');

      expect(response.status).toBe(200);
      expect(response.body.status).toEqual(true);
    });
  });

  afterAll(async () => {
    await truncate();
  });
});
