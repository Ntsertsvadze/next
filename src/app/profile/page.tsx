// SSR
export const dynamic = "force-dynamic"; 

async function getProfile() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return res.json();
}

export default async function ProfilePage() {
  const user = await getProfile();
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
