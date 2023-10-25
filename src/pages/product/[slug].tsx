import { useRouter } from "next/router";

export default function ProductPage() {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.back()}>Voltar</button>
      {router.query.slug}
    </div>
  );
}
