import Navbar from '../components/Navbar';
import Link from 'next/link';

const units = [
  { id: 1, title: 'Yer Kabuğu ve Dünya’mızın Hareketleri', active: false },
  { id: 2, title: 'Besinlerimiz', active: false },
  { id: 3, title: 'Kuvvetin Etkileri', active: false },
  { id: 4, title: 'Maddenin Özellikleri', active: false },
  { id: 5, title: 'Aydınlatma ve Ses Teknolojileri', active: false },
  { id: 6, title: 'İnsan ve Çevre', active: false },
  { id: 7, title: 'Basit Elektrik Devreleri', active: true }
];

export default function TopicsPage() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-xl font-bold mb-4">Üniteler</h1>
        <ul className="space-y-3">
          {units.map((unit) => (
            <li key={unit.id}>
              {unit.active ? (
                <Link
                  href={`/topics/${unit.id}`}
                  className="text-blue-600 underline"
                >
                  {unit.title}
                </Link>
              ) : (
                <span className="text-gray-500">{unit.title} (Pasif)</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
