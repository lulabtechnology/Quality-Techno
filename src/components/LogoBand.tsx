import { manufacturers } from './site-data';

export function LogoBand() {
  return (
    <div className="card-panel mt-12 p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-4">
        {manufacturers.map((item) => (
          <div key={item} className="flex h-28 items-center justify-center rounded-2xl border border-line bg-mist px-4 text-center text-lg font-semibold text-navy">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
