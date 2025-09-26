import { Servicio } from "@/data/servicios";
export default function CardServicio({ s }: { s: Servicio }) {
  return (
    <a href={`/servicio/${s.slug}`} className="block rounded-xl border p-4 hover:shadow">
      <h3 className="font-semibold">{s.nombre}</h3>
      <p className="text-sm text-gray-600">{s.ciudad}</p>
      <p className="text-sm">⭐ {s.rating}</p>
    </a>
  );
}