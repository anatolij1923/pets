export default function App() {
  return (
    <div>
      <h1>pets</h1>
      {posts.map((post) => {
        return (
          <div>
            <h2>{post.name}</h2>
            <p>{post.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
