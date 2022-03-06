import { Link, useLoaderData } from "remix";

export type Post = {
  slug: string;
  title: string;
};

export const loader = async () => {
  const posts: Post[] = [
    {
      slug: "my-first-post",
      title: "My first post",
    },
    {
      slug: "90s-mixtape",
      title: "A Mixtape I made Just For You",
    },
  ];

  return posts;
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
