process.env.NODE_ENV = 'test';
import { Place } from '../../types';
import placeService from '.';
import truncate from '../../utils/truncate';

describe('Place Service', () => {
  let mockData: Place;

  beforeAll(async () => {
    mockData = {
      keyword: 'Facebook',
      address: 'Facebook Full Address',
    };
  });

  describe('POST /place', () => {
    it('should create a new place', async () => {
      const { data, status } = await placeService.addPlace(mockData);

      expect(status).toBe(true);
      expect(data.keyword).toEqual(mockData.keyword);
      expect(data.address).toEqual(mockData.address);
    });
  });

  describe('GET /place', () => {
    it('should get all places', async () => {
      const { data, status } = await placeService.getPlaces();

      expect(status).toBe(true);
      expect(data[0].keyword).toEqual(mockData.keyword);
      expect(data[0].address).toEqual(mockData.address);
    });
  });

  afterAll(async () => {
    await truncate();
  });
});
