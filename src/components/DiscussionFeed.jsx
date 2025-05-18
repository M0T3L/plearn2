import { useState } from 'react';

export default function DiscussionFeed() {
  const [tab, setTab] = useState('arkadas');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'Ayşe', text: 'Ampul devreye nasıl bağlanmalı?' },
    { from: 'Mehmet', text: 'Kırmızı kablo + kutbuna gider genelde.' },
    { from: 'Sen', text: '@pbot Devre elemanlarını açıklar mısın?' },
    { from: 'PBot', text: 'Tabii! Devre elemanları arasında pil, ampul, kablo ve anahtar bulunur. Her birinin görevleri farklıdır.' }
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: 'Sen', text: input }];

    if (input.includes('@pbot')) {
      const botReply =
        input.includes('devre') || input.includes('eleman') ? {
          from: 'PBot',
          text: 'Tabii! Devre elemanları arasında pil, ampul, kablo ve anahtar bulunur. Her birinin görevleri farklıdır.'
        } : {
          from: 'PBot',
          text: 'Sadece ders ile ilgili soru sorabilirsin.'
        };
      newMessages.push(botReply);
    }

    setMessages(newMessages);
    setInput('');
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-4">
        <button
          onClick={() => setTab('arkadas')}
          className={`px-4 py-2 ${tab === 'arkadas' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Arkadaşlarınla Tartış
        </button>
        <button
          onClick={() => setTab('pbot')}
          className={`px-4 py-2 ${tab === 'pbot' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          PBot ile Tartış
        </button>
      </div>

      <div className="bg-white p-4 border rounded h-80 overflow-y-auto">
        {messages
          .filter(m => tab === 'arkadas' ? m.from !== 'PBot' : true)
          .map((m, i) => (
            <div key={i} className="mb-2">
              <strong>{m.from}:</strong> {m.text}
            </div>
          ))}
      </div>

      {tab === 'arkadas' ? (
        <input
          type="text"
          placeholder="Yorum yap (devre dışı)..."
          disabled
          className="w-full p-2 border rounded bg-gray-100"
        />
      ) : (
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Bir şeyler yaz (@pbot...)"
            className="flex-grow p-2 border rounded"
          />
          <button onClick={handleSend} className="bg-green-500 text-white px-4 rounded">Gönder</button>
        </div>
      )}
    </div>
  );
}
