// routes/search.ctx
import { Handlers, PageProps } from "$fresh/server.ts";
import { Nav } from "../components/Navigation.tsx";

interface Data {
    query: string
    isPOST?: boolean
}

export const handler: Handlers<Data> = {
    GET(req, ctx) {
        const url = new URL(req.url);
        const query = url.searchParams.get('q') || '';
        return ctx.render({query});
    },
    async POST(req, ctx) {
        const formData = await req.formData();
        const query = formData.get('q') as string;
        return ctx.render({query, isPOST: true});
    }
}

export default function Search({data}: PageProps<Data> ) {
    const { query, isPOST } = data || {query: ""};
    if (isPOST) {
        return (
            <>
            <Nav />
            <main class="p-4 mx-auto max-w-screen-md">
                <p>Query: {query}</p>
                <p><a href="/search">Try again</a></p>
            </main>
            </>
        );
    } else {
        return (
            <>
            <Nav />
              <main class="p-4 mx-auto max-w-screen-md">
                <form method="POST">
                    <input name="q" type="text" value={query} class="shadow-lg"/>
                    <input type="submit"/>
                </form>
              </main>
            </>
        )
    }
}