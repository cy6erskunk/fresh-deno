import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Counter from "../islands/Counter.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await fetch('http://localhost:8000/api/joke');
    const joke = await resp.text();
    return ctx.render({joke})
  }
}

export default function Home({data}: PageProps<{joke: string}>) {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <nav class="p-4 mx-auto max-w-screen-md">
        <a href="/info">Info</a>
      </nav>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. This is satic HTML server from ./routes/index.tsxfile.
        </p>
        <p>And here we have a dynamic island:</p>
        <Counter start={3} />
        <p>{data?.joke ? data.joke : "No kidding then"}</p>
      </div>
    </>
  );
}
