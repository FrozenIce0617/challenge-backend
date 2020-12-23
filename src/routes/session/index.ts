import { Request, Response, Router } from 'express';

import sessionService from '../../services/session';

const router = Router();

router.post('/session', async (req: Request, res: Response) => {
  const response = await sessionService.addSession(req.body);

  if (!response.status) return res.status(400).send(response);

  return res.status(200).send(response);
});

router.get('/session', async (req: Request, res: Response) => {
  const response = await sessionService.getSessions();

  if (!response.status) return res.status(400).send(response);

  return res.status(200).send(response);
});

export default router;
