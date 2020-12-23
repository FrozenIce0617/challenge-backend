process.env.NODE_ENV = 'test';
import * as request from 'supertest';
import server from '../../app';
import { Place } from '../../types';
import truncate from '../../utils/truncate';

describe('Places Route', () => {
  let mockData: Place;

  beforeAll(async () => {
    mockData = {
      keyword: 'Facebook',
      address: 'Facebook Full Address',
    };
  });

  describe('POST /place', () => {
    it('should add a new place', async () => {
      const response = await request(server).post('/place').send(mockData);

      expect(response.status).toBe(200);
      expect(response.body.status).toEqual(true);
      expect(response.body.data.keyword).toEqual(mockData.keyword);
      expect(response.body.data.address).toEqual(mockData.address);
    });

    it('should be failing due to no data', async () => {
      const response = await request(server).post('/place');

      expect(response.status).toBe(400);
      expect(response.body.status).toEqual(false);
    });
  });

  describe('GET /place', () => {
    it('should return all places', async () => {
      const response = await request(server).get('/place');

      expect(response.status).toBe(200);
      expect(response.body.status).toEqual(true);
    });
  });

  afterAll(async () => {
    await truncate();
  });
});
