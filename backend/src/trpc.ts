import { initTRPC } from "@trpc/server";

const posts = [
  {
    name: "Post about shitting in bed",
    desc: "Never shittin where im sleepin",
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
    name: "Post about someting",
    desc: "Never fgkljdfklgjdfskl",
  },
];

const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
  getPosts: trpc.procedure.query(() => {
    return { posts };
  }),
});

export type trpcRouter = typeof trpcRouter;
