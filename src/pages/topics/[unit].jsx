import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

const units = {
  7: {
    title: 'Basit Elektrik Devreleri',
    videoUrl: 'https://www.youtube.com/embed/8jMImxKqz-o', // Örnek video
    assignmentId: 1
  }
};

export default function TopicDetail() {
  const router = useRouter();
  const { unit } = router.query;
  const currentUnit = units[unit];

  if (!currentUnit) {
    return (
      <>
        <Navbar />
        <div className="p-6">
          <h1 className="text-xl font-bold">Bu ünite şu anda aktif değil.</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">{currentUnit.title}</h1>
        <div className="aspect-video mb-6">
          <iframe
            className="w-full h-full"
            src={currentUnit.videoUrl}
            title="Ünite Videosu"
            allowFullScreen
          />
        </div>
        <div className="flex space-x-4">
          <button className="bg-gray-300 px-4 py-2 rounded" disabled>
            ← Önceki Konu
          </button>
          <button className="bg-gray-300 px-4 py-2 rounded" disabled>
            Sonraki Konu →
          </button>
          <Link
            href={`/assignments/${currentUnit.assignmentId}`}
            className="bg-blue-600 text-wh
