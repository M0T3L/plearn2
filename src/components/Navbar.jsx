import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <div className="space-x-4">
        {['/', '/topics', '/assignments', '/exams', '/discussions', '/notes'].map((path, i) => (
          <Link key={i} href={path}>{['Anasayfa','Konular','Ödevler','Sınavlar','Tartışma','Notlar'][i]}</Link>
        ))}
      </div>
      <div>
        <img src="/avatar.png" alt="Avatar" className="w-8 h-8 rounded-full inline" />
        <button className="ml-2">Çıkış Yap</button>
      </div>
    </nav>
  );
}
