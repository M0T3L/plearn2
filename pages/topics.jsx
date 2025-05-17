import Link from 'next/link';
import Navbar from '../components/Navbar';

const units = [
  "Yer Kabuğu ve Dünya’mızın Hareketleri",
  "Besinlerimiz",
  "Kuvvetin Etkileri",
  "Maddenin Özellikleri",
  "Aydınlatma ve Ses Teknolojileri",
  "İnsan ve Çevre",
  "Basit Elektrik Devreleri"
];

export default function Topics() {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Üniteler</h1>
        <ul className="space-y-2">
          {units.map((unit, index) => (
            <li key={index}>
              {index === 6 ? (
                <Link href={`/topics/${index + 1}`} className="text-blue-600 underline">
                  {index + 1}. Ünite: {unit}
                </Link>
              ) : (
                <span className="text-gray-400">{index + 1}. Ünite: {unit} (Pasif)</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
