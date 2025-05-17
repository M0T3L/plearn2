export default function Greeting({ student, tasks }) {
  return (
    <div className="p-4">
      <h1>Hoşgeldin, {student}!</h1>
      {tasks.length > 0 && (
        <div className="mt-2">
          <h2>Yapman gerekenler:</h2>
          <ul>
            {tasks.map((t,i) => <li key={i}>{t.type}: {t.title}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
