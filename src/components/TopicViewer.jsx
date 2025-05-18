import { useRouter } from 'next/router';
import Link from 'next/link';

export default function TopicViewer() {
  const router = useRouter();

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-semibold">Basit Elektrik Devreleri</h1>
      
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-96"
          src="https://www.youtube.com/embed/iZYedWOERN0"
          title="Basit Elektrik Devreleri"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex gap-4 mt-4">
        <button className="bg-gray-300 px-4 py-2 rounded cursor-not-allowed" disabled>← Önceki</button>
        <button className="bg-gray-300 px-4 py-2 rounded cursor-not-allowed" disabled>Sonraki →</button>
        <Link href="/assignments/7">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Ödeve Git</button>
        </Link>
      </div>
    </div>
  );
}
