import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Nav } from "../components/Navigation.tsx";
import Countdown from "../islands/Countdown.tsx";
import Counter from "../islands/Counter.tsx";
import { handler as jokeHandler } from "./api/joke.ts";

export const handler: Handlers = {
  async GET(req: Request, ctx) {
    const url = new URL(req.url);
    const resp = jokeHandler(req, ctx);
    const joke = await resp.text();
    return ctx.render({ joke });
  },
};

export default function Home({ data }: PageProps<{ joke: string }>) {
  const date = new Date();
  date.setSeconds(date.getSeconds() + 10);

  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <Nav />
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. This is satic HTML server from
          ./routes/index.tsxfile.
        </p>
        <p>And here we have a dynamic island:</p>
        <Counter start={3} />
        <p>{data?.joke ? data.joke : "No kidding then"}</p>
        <p>And another island:</p>
        <Countdown target={date.toISOString()} />
      </div>
    </>
  );
}
