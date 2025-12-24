import { trpcRouter } from "@pets/backend";
import { createTRPCReact } from "@trpc/react-query";

const trpc = createTRPCReact<TrpcRouter>();
