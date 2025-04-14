// SSG , ISR
export const dynamic = "auto"; 

export default async function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>პოსტი: {params.slug}</h1>
      <p>აქ იქნება დეტალები პოსტზე.</p>
    </div>
  );
}
