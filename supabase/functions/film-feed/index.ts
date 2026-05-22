import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const FEED_URL =
  "https://easyware.webaissance.com/feeds/Vickers/parsefeed.php?key=7j*pQn)l36";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const upstream = await fetch(FEED_URL, {
      headers: { "User-Agent": "VickersTheatreSite/1.0" },
    });

    if (!upstream.ok) {
      const body = await upstream.text();
      console.error("Upstream feed error", upstream.status, body.slice(0, 200));
      return new Response(
        JSON.stringify({ error: "FEED_UNAVAILABLE", status: upstream.status }),
        {
          status: 502,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const xml = await upstream.text();
    return new Response(xml, {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "text/xml; charset=utf-8",
        "Cache-Control": "public, max-age=300",
      },
    });
  } catch (err) {
    console.error("film-feed error", err);
    return new Response(
      JSON.stringify({ error: "SERVICE_FAILED" }),
      {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
