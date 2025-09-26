import { servicios } from "@/data/servicios";

export default function Buscar() {
  return (
    <main className="mx-auto max-w-6xl p-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {servicios.map(s => (
        <a key={s.slug} href={`/servicio/${s.slug}`} className="block rounded-xl border p-4 hover:shadow">
          <h3 className="font-semibold">{s.nombre}</h3>
          <p className="text-sm text-gray-600">{s.ciudad}</p>
          <p className="text-sm">⭐ {s.rating}</p>
        </a>
      ))}
    </main>
  );
}