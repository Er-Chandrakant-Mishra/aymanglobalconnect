// Authentication endpoint intentionally left empty.
// No auth is required for the current version of the site.
export const GET = () => {
  return new Response("Auth not configured", { status: 404 });
};

export const POST = () => {
  return new Response("Auth not configured", { status: 404 });
};

