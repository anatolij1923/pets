import { trpc } from "../lib/trpc";

export default function PostsPage() {
  const { isLoading, isFetching, isError, error, data } =
    trpc.getPosts.useQuery();

  if (isLoading || isFetching) {
    return <span>Loading ...</span>;
  }
  if (isError) {
    return <span>Error - {error.message}...</span>;
  }

  return (
    <div>
      <h1>pets</h1>
      {data?.posts.map((post) => {
        return (
          <div key={post.name}>
            <h2>{post.name}</h2>
            <p>{post.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
