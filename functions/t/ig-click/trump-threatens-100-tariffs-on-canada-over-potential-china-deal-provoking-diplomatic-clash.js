export async function onRequest() {{
  return new Response(null, {{
    status: 204,
    headers: {{
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
    }},
  }});
}}
