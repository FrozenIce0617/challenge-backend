process.env.NODE_ENV = 'test';
import { Session } from '../../types';
import sessionService from '.';
import truncate from '../../utils/truncate';

describe('Session Service', () => {
  let mockData: Session;

  beforeAll(async () => {
    mockData = {
      start: new Date('2020-11-08T16:10:44.769Z'),
      end: new Date('2020-11-08T16:40:08.654Z'),
      sensor: 'sensor data',
    };
  });

  describe('POST /session', () => {
    it('should create a new session', async () => {
      const { data, status } = await sessionService.addSession(mockData);

      expect(status).toBe(true);
      expect(data.start).toEqual(mockData.start);
      expect(data.end).toEqual(mockData.end);
      expect(data.sensor).toEqual(mockData.sensor);
    });
  });

  describe('GET /session', () => {
    it('should get all sessions', async () => {
      const { data, status } = await sessionService.getSessions();

      expect(status).toBe(true);
      expect(data[0].start).toEqual(mockData.start);
      expect(data[0].end).toEqual(mockData.end);
      expect(data[0].sensor).toEqual(mockData.sensor);
    });
  });

  afterAll(async () => {
    await truncate();
  });
});
