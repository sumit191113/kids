
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Star, ArrowRight } from 'lucide-react';

const alphabetData = [
  { letter: 'A', word: 'Apple', color: 'bg-red-50 text-red-600 border-red-100', path: '/alphabets/a' },
  { letter: 'B', word: 'Ball', color: 'bg-blue-50 text-blue-600 border-blue-100', path: '#' },
  { letter: 'C', word: 'Cat', color: 'bg-orange-50 text-orange-600 border-orange-100', path: '#' },
  { letter: 'D', word: 'Dog', color: 'bg-yellow-50 text-yellow-600 border-yellow-100', path: '#' },
  { letter: 'E', word: 'Elephant', color: 'bg-purple-50 text-purple-600 border-purple-100', path: '#' },
  { letter: 'F', word: 'Fish', color: 'bg-cyan-50 text-cyan-600 border-cyan-100', path: '#' },
  { letter: 'G', word: 'Giraffe', color: 'bg-emerald-50 text-emerald-600 border-emerald-100', path: '#' },
  { letter: 'H', word: 'Horse', color: 'bg-amber-50 text-amber-600 border-amber-100', path: '#' },
  { letter: 'I', word: 'Igloo', color: 'bg-indigo-50 text-indigo-600 border-indigo-100', path: '#' },
  { letter: 'J', word: 'Jellyfish', color: 'bg-pink-50 text-pink-600 border-pink-100', path: '#' },
  { letter: 'K', word: 'Kangaroo', color: 'bg-orange-50 text-orange-600 border-orange-100', path: '#' },
  { letter: 'L', word: 'Lion', color: 'bg-yellow-50 text-yellow-600 border-yellow-100', path: '#' },
  { letter: 'M', word: 'Monkey', color: 'bg-brown-50 text-amber-900 border-amber-200', path: '#' },
  { letter: 'N', word: 'Nest', color: 'bg-green-50 text-green-600 border-green-100', path: '#' },
  { letter: 'O', word: 'Orange', color: 'bg-orange-50 text-orange-500 border-orange-200', path: '#' },
  { letter: 'P', word: 'Penguin', color: 'bg-slate-50 text-slate-700 border-slate-200', path: '#' },
  { letter: 'Q', word: 'Queen', color: 'bg-purple-50 text-purple-500 border-purple-200', path: '#' },
  { letter: 'R', word: 'Rabbit', color: 'bg-rose-50 text-rose-500 border-rose-200', path: '#' },
  { letter: 'S', word: 'Sun', color: 'bg-yellow-50 text-yellow-500 border-yellow-200', path: '#' },
  { letter: 'T', word: 'Tiger', color: 'bg-orange-50 text-orange-700 border-orange-200', path: '#' },
  { letter: 'U', word: 'Umbrella', color: 'bg-blue-50 text-blue-400 border-blue-200', path: '#' },
  { letter: 'V', word: 'Van', color: 'bg-gray-50 text-gray-600 border-gray-200', path: '#' },
  { letter: 'W', word: 'Whale', color: 'bg-sky-50 text-sky-600 border-sky-200', path: '#' },
  { letter: 'X', word: 'Xylophone', color: 'bg-violet-50 text-violet-600 border-violet-200', path: '#' },
  { letter: 'Y', word: 'Yak', color: 'bg-stone-50 text-stone-600 border-stone-200', path: '#' },
  { letter: 'Z', word: 'Zebra', color: 'bg-neutral-50 text-neutral-800 border-neutral-300', path: '#' },
];

const AlphabetsList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-500">
      {/* SEO Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-indigo-950 mb-6 brand-font">
          Learn the Alphabet: A to Z for Kids
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover the wonderful world of letters! Learning the alphabet is the first step toward reading and writing. 
          Explore each letter below with fun words and colorful cards.
        </p>
      </div>

      <section className="prose prose-indigo max-w-none mb-12">
        <h2 className="text-3xl font-bold text-gray-900 brand-font">Why Learning Letters is Fun?</h2>
        <p className="text-gray-600 leading-relaxed">
          The English alphabet consists of 26 letters, starting with 'A' and ending with 'Z'. Each letter has its own unique sound 
          and can be written in two ways: <strong>Uppercase</strong> (big letters) and <strong>Lowercase</strong> (small letters). 
          By associating letters with common objects—like 'A' for Apple or 'B' for Ball—children can build their vocabulary and 
          phonics skills much faster.
        </p>
      </section>

      {/* Alphabets Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {alphabetData.map((item) => (
          <Link
            key={item.letter}
            to={item.path}
            className={`group relative flex flex-col items-center justify-center p-8 rounded-3xl border-2 ${item.color} shadow-sm transition-all hover:scale-105 hover:shadow-md cursor-pointer`}
          >
            <span className="text-5xl sm:text-6xl font-black brand-font mb-2 group-hover:scale-110 transition-transform">
              {item.letter}
            </span>
            <span className="text-sm font-bold uppercase tracking-widest opacity-80">
              {item.word}
            </span>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Star size={16} fill="currentColor" />
            </div>
            {item.path === '#' && (
               <span className="absolute bottom-2 text-[8px] font-medium text-gray-400">Coming Soon</span>
            )}
          </Link>
        ))}
      </div>

      <section className="mt-20 bg-indigo-50 rounded-3xl p-8 sm:p-12 border border-indigo-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-indigo-950 brand-font mb-6">Tips for Parents</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-indigo-600 p-1 rounded-full text-white mt-1 mr-3 flex-shrink-0">
                  <ArrowRight size={14} />
                </div>
                <p className="text-indigo-900"><strong>Daily Practice:</strong> Spend 5-10 minutes each day going through a few letters. Consistency is key!</p>
              </li>
              <li className="flex items-start">
                <div className="bg-indigo-600 p-1 rounded-full text-white mt-1 mr-3 flex-shrink-0">
                  <ArrowRight size={14} />
                </div>
                <p className="text-indigo-900"><strong>Phonics Sound:</strong> Don't just teach the letter name; teach the sound it makes (e.g., "Ah" for A).</p>
              </li>
              <li className="flex items-start">
                <div className="bg-indigo-600 p-1 rounded-full text-white mt-1 mr-3 flex-shrink-0">
                  <ArrowRight size={14} />
                </div>
                <p className="text-indigo-900"><strong>Use Visuals:</strong> Point to objects around the house that start with specific letters.</p>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
             <div className="bg-white p-8 rounded-full shadow-inner border-8 border-indigo-200">
                <BookOpen size={120} className="text-indigo-500" />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlphabetsList;
