import Navbar from '../components/Navbar';

export default function Notes() {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Ders Notların</h2>
        <textarea
          placeholder="Buraya notlarını yazabilirsin..."
          className="w-full h-64 p-2 border rounded"
        ></textarea>
        <p className="text-sm text-gray-500 mt-2">Notlar geçici olarak saklanır. Sayfa yenilenirse silinir.</p>
      </div>
    </>
  );
}
