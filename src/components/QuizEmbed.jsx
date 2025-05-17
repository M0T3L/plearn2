export default function QuizEmbed() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Kısa Değerlendirme</h2>
      <div className="overflow-auto border rounded">
        <iframe
          src="https://quizizz.com/embed/quiz/5fa3dc8a1f40e2001b033ee1" 
          width="100%" 
          height="500"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
