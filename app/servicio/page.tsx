import { servicios } from "@/data/servicios";

export default function Detalle({ params }: { params: { slug: string } }) {
  const s = servicios.find(x => x.slug === params.slug);
  if (!s) return <main className="p-6">No encontrado</main>;
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold">{s.nombre}</h1>
      <p className="text-gray-600">{s.ciudad}</p>
      <p className="mt-4">⭐ {s.rating}</p>
    </main>
  );
}