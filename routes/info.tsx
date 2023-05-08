// routes/info.tsx

import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    async GET(req, ctx) {
        const resp = await ctx.render();
        resp.headers.set("X-Fresh-Header", `so fresh (from ${req.referrer})!`);
        return resp;
    }  
} 

export default function() {
    return (
        <main class="max-w-screen-md mx-auto">
            <h1 class="text-xl">Info</h1>
            <p>This is supposed to be an info page</p>
        </main>
    );
}