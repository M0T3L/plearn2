export default function DiscussionFeed({ messages, inputEnabled, onSend }) {
  return (
    <div className="p-4">
      <ul className="space-y-2 mb-4">
        {messages.map((msg, i) => (
          <li key={i} className="border p-2 rounded">
            <strong>{msg.user}:</strong> {msg.text}
            {msg.reply && (
              <div className="ml-4 text-sm text-gray-600 mt-1">
                <strong>PBot:</strong> {msg.reply}
              </div>
            )}
          </li>
        ))}
      </ul>
      <input
        type="text"
        disabled={!inputEnabled}
        placeholder={inputEnabled ? "Mesaj yaz..." : "Bu demo girişlidir"}
        className="border p-2 w-full rounded"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && inputEnabled && onSend) {
            onSend(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
  );
}
