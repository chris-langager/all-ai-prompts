import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const promptsRouter = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) => {
    return [
      {
        text: "this sure could be a prompt",
        tags: ["openai", "gpt4"],
      },
    ];
  }),
});
