import CardServicio from "@/components/CardServicio";
import { servicios } from "@/data/servicios";

export default function Buscar() {
  return (
    <main className="mx-auto max-w-6xl p-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {servicios.map(s => <CardServicio key={s.slug} s={s} />)}
    </main>
  );
}