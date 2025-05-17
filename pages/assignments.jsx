import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Assignments() {
  const assignments = [
    { id: 'devre1', title: 'Basit Devre Kurma' },
    { id: 'devre2', title: 'Ampul Parlaklığı ve Direnç' }
  ];

  return (
    <>
      <Navbar />
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Ödevler</h1>
        <ul className="space-y-2">
          {assignments.map(a => (
            <li key={a.id}>
              <Link href={`/assignments/${a.id}`} className="text-blue-600 underline">
                {a.title}
              </Link>
            </li>
          ))}
        </u
