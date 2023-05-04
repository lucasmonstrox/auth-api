import './module-alias';
import { app } from './env';
import { makeMikroORM } from '@/adapters/mikroOrm';
import { makeExpress } from '@/ports/express';

makeMikroORM()
  .then(() => {
    const express = makeExpress();
    express.listen(app.port, () => {
      console.log(`Server is running on port ${app.port}`);
    });
  })
  .catch(console.error);
