import { TrpcProvider } from "./lib/trpc";
import PostsPage from "./pages/PostsPage";

export default function App() {
  return (
    <TrpcProvider>
      <PostsPage />
    </TrpcProvider>
  );
}
