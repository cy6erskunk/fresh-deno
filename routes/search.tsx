// routes/search.ctx
import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.5/server.ts";
import { Nav } from "../components/Navigation.tsx";

interface Data {
    query: string
}

export const hander: Handlers<Data> = {
    GET(req, ctx) {
        const url = new URL(req.url);
        const query = url.searchParams.get('q') || '';
        return ctx.render({query});
    }
}

export default function Search({data = {query: ''}}: PageProps<Data> ) {
    const { query } = data;
    return (
        <>
        <Nav />
        <main class="p-4 mx-auto max-w-screen-md">
            <form method="GET">
                <input name="q" type="text" value={query}/>
                <input type="submit"/>
            </form>
        </main>
        </>
    )
}