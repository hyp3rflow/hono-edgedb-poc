import { serve } from '$std/http/server.ts';
import { Hono } from 'hono';
import { client, e, $infer } from '$eql';
import { z } from 'zod';

const app = new Hono();

const userReq = z.object({
  name: z.string(),
  age: z.number(),
});

app.get('/', c => c.text('Hello world'));

app.get('/list', async c => {
  const users = await e
    .select(e.User, () => ({
      name: true,
      age: true,
    }))
    .run(client);
  return c.json({ users });
});

app.post('/add', async c => {
  const req = await c.req.json();
  const d = userReq.safeParse(req);
  if (!d.success) {
    return new Response(d.error.toString(), { status: 400 });
  }
  await e.insert(e.User, d.data).run(client);
  return new Response(null, {
    status: 200,
  });
});

serve(app.fetch);
