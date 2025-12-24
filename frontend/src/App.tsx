export default function App() {
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
