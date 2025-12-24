import { initTRPC } from "@trpc/server";

const posts = [
  {
    name: "Post 1",
    desc: "ligma balls",
  },
  {
    name: "Post 2",
    desc: "blah blah blah",
  },
  {
    name: "Post 3",
    desc: "gdsjlgj ljgl jsdklgj sjg kldsjl",
  },
  {
    name: "Post 4",
    desc: "skibidi bopbopbop",
  },
];

const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
  getPosts: trpc.procedure.query(() => {
    return { posts };
  }),
});

export type TrpcRouter = typeof trpcRouter;
