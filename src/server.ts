import app from './app';
import { PORT } from './config';

app.listen(PORT, () => {
  console.log(`🚀 app running on port ${PORT}`);
});
