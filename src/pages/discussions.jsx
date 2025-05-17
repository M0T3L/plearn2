import { useState } from 'react';
import Navbar from '../components/Navbar';
import DiscussionFeed from '../components/DiscussionFeed';

export default function Discussions() {
  const [tab, setTab] = useState('friends');
  const [aiMessages, setAiMessages] = useState([
    { user: 'Ali', text: '@pbot Devre elemanlarını açıklar mısın?', reply: 'Tabii! Devre elemanları: pil (enerji kaynağı), ampul (yük), anahtar (kontrol) ve iletken kablolardır.' },
    { user: 'Zeynep', text: 'Basit bir devre nasıl kurulur?', reply: null }
  ]);

  const handleAiSend = (text) => {
    let reply = null;
    if (text.toLowerCase().includes('@pbot')) {
      if (text.toLowerCase().includes('devre')) {
        reply = 'Devre ile ilgili bir soru sorduğun için teşekkürler. Devre elemanları pil, anahtar, iletken ve yüktür.';
      } else {
        reply = 'Sadece dersle ilgili soruları cevaplayabilirim.';
      }
    } else {
      reply = 'Lütfen sorunu "@pbot" ile etiketleyerek ve dersle ilgili olarak sor.';
    }

    setAiMessages(prev => [...prev, { user: 'Sen', text, reply }]);
  };

  const friendMessages = [
    { user: 'Ahmet', text: 'Devreyi paralel kurarsak ampuller parlak olur mu?' },
    { user: 'Merve', text: 'Seri devrede ampul patlarsa diğerleri de söner mi?' }
  ];

  return (
    <>
      <Navbar />
      <div className="p-4">
        <div className="flex space-x-4 mb-4">
          <button
            className={`px-4 py-2 rounded ${tab === 'friends' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setTab('friends')}
          >
            Arkadaşlarınla Tartış
          </button>
          <button
            className={`px-4 py-2 rounded ${tab === 'ai' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setTab('ai')}
          >
            Yapay Zeka ile Tartış
          </button>
        </div>

        {tab === 'friends' ? (
          <DiscussionFeed messages={friendMessages} inputEnabled={false} />
        ) : (
          <DiscussionFeed messages={aiMessages} inputEnabled={true} onSend={handleAiSend} />
        )}
      </div>
    </>
  );
}
