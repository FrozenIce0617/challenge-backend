import { Request, Response, Router } from 'express';
import placeService from '../../services/place';
const router = Router();

router.post('/place', async (req: Request, res: Response) => {
  const response = await placeService.addPlace(req.body);

  if (!response.status) return res.status(400).send(response);

  return res.status(200).send(response);
});

router.get('/place', async (req: Request, res: Response) => {
  const response = await placeService.getPlaces();

  if (!response.status) return res.status(400).send(response);

  return res.status(200).send(response);
});

export default router;
