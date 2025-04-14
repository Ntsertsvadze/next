// app/blog/page.tsx
export const revalidate = 30; // ISR every 30 seconds

const posts = [
  { slug: "post-1", title: "პოსტი 1" },
  { slug: "post-2", title: "პოსტი 2" },
];

export default function BlogList() {
  return (
    <div>
      <h1>ბლოგი</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
