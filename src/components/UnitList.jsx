import Link from 'next/link';

const units = [
  'Yer Kabuğu ve Dünya’mızın Hareketleri',
  'Besinlerimiz',
  'Kuvvetin Etkileri',
  'Maddenin Özellikleri',
  'Aydınlatma ve Ses Teknolojileri',
  'İnsan ve Çevre',
  'Basit Elektrik Devreleri',
];

export default function UnitList() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Üniteler</h1>
      <ul className="space-y-2">
        {units.map((unit, index) => (
          <li key={index} className="p-4 border rounded flex justify-between items-center">
            <span>{index + 1}. {unit}</span>
            {index === 6 ? (
              <Link
                href={`/topics/${index + 1}`}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Göz At
              </Link>
            ) : (
              <button className="bg-gray-400 text-white px-3 py-1 rounded opacity-50" disabled>
                Pasif
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
