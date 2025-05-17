import Navbar from '../components/Navbar';
import Greeting from '../components/Greeting';

export default function Home() {
  // Göstermelik öğrenci ve görev verisi
  const student = "Ahmet";
  const tasks = [
    { type: "Ödev", title: "Elektrik Devresi İncelemesi" },
    { type: "Ödev", title: "Devre Elemanları Sürükle-Bırak" },
    { type: "Sınav", title: "Elektrik Devreleri Mini Quiz" }
  ];

  return (
    <>
      <Navbar />
      <Greeting student={student} tasks={tasks} />
    </>
  );
}
