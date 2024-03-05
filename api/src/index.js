import { Hono } from "hono";
import { cors } from "hono/cors";
import { Client } from "@neondatabase/serverless";

const app = new Hono();

app.use("/*", cors());

app.get("/jobposts", async (c) => {
  const query = c.req.query();
  const keys = Object.keys(query);
  if (!(keys.includes("p") && keys.length === 1)) {
    return c.json({
      error: "Invalid query string",
    });
  }

  const postsPerPage = 10;
  let sqlQuery;
  if (query.p.length > 5) {
    return c.json({
      error: "Page number is too large",
    });
  } else {
    if (/\D/.test(query.p)) {
      return c.json({
        error: "Invalid page number",
      });
    } else {
      if (query.p === "0") {
        return c.json({
          error: "Invalid page number",
        });
      } else {
        sqlQuery = `SELECT * FROM job_posts ORDER BY monthly_salary DESC OFFSET ${
          (parseInt(query.p) - 1) * postsPerPage
        } LIMIT ${postsPerPage};`;
      }
    }
  }

  const client = new Client(c.env.DATABASE_URL);
  await client.connect();

  const { rows: results } = await client.query(
    "SELECT count(*) FROM job_posts;"
  );
  const totalPosts = results[0].count;

  const { rows } = await client.query(sqlQuery);
  c.executionCtx.waitUntil(client.end());

  return c.json({
    totalPosts: totalPosts,
    requestedPosts: rows,
  });
});

export default app;
