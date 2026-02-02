
import React, { useState } from 'react';
import { Sparkles, Send } from 'lucide-react';
import { askSparky } from '../services/geminiService';

interface Props {
  topic: string;
}

const SparkyAssistant: React.FC<Props> = ({ topic }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    const result = await askSparky(topic, question);
    setAnswer(result);
    setLoading(false);
    setQuestion('');
  };

  return (
    <div className="bg-indigo-50 rounded-2xl p-6 border-2 border-indigo-100 my-10 shadow-sm">
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-indigo-500 p-2 rounded-full text-white">
          <Sparkles size={20} />
        </div>
        <h3 className="text-xl font-bold text-indigo-900 brand-font">Ask Sparky about {topic}!</h3>
      </div>
      
      {answer && (
        <div className="bg-white p-4 rounded-xl border border-indigo-100 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <p className="text-indigo-800 font-medium">Sparky says:</p>
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}

      <form onSubmit={handleAsk} className="relative">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={`Ask Sparky anything about ${topic}...`}
          className="w-full bg-white border-2 border-indigo-200 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:border-indigo-500 transition-colors text-gray-700"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !question.trim()}
          className="absolute right-2 top-2 bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600 disabled:opacity-50 transition-all"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Send size={20} />
          )}
        </button>
      </form>
      <p className="mt-2 text-[10px] text-indigo-400 font-medium text-center">
        Powered by AI Assistant &bull; Always check with a teacher or parent.
      </p>
    </div>
  );
};

export default SparkyAssistant;
