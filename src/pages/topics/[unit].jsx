import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';

export default function TopicDetail() {
  const router = useRouter();
  const { unit } = router.query;

  if (unit !== '7') return (
    <>
      <Navbar />
      <div className="p-4">Bu ünite şu anda aktif değil.</div>
    </>
  );

  return (
    <>
      <Navbar />
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Basit Elektrik Devreleri</h1>
        <div className="mb-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/iZYedWOERN0"
            title="Basit Devre Videosu"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex space-x-4">
          <button className="bg-gray-300 px-4 py-2 rounded" disabled>◀ Önceki</button>
          <button className="bg-gray-300 px-4 py-2 rounded" disabled>Sonraki ▶</button>
          <button
            onClick={() => router.push('/assignments/devre1')}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Ödeve Git
          </button>
        </div>
      </div>
    </>
  );
}
