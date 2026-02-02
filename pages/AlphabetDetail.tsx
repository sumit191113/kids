
import React from 'react';
import { Volume2, Apple, Star, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AlphabetDetail: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-500">
      <Link to="/alphabets" className="inline-flex items-center text-indigo-600 font-semibold mb-8 hover:underline">
        <ArrowLeft size={18} className="mr-2" /> Back to All Alphabets
      </Link>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-indigo-50">
        <div className="bg-indigo-600 px-8 py-10 text-white flex flex-col items-center">
          <h1 className="text-5xl sm:text-7xl font-extrabold brand-font mb-2">A for Apple</h1>
          <p className="text-indigo-100 text-xl font-medium tracking-wide">The First Letter of the Alphabet</p>
        </div>

        <div className="p-8 sm:p-12">
          {/* Main Visual and Phonics Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-red-50 rounded-full flex items-center justify-center border-4 border-red-200 relative">
                <Apple size={160} className="text-red-500" />
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-white p-3 rounded-2xl shadow-lg">
                  <Star size={24} fill="currentColor" />
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 brand-font">Let's Learn About 'A'</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The letter <strong>A</strong> is the first letter in the English alphabet. It is a very special letter because it is a vowel! Every single word you speak will likely have a vowel in it.
              </p>
              
              <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                <h3 className="font-bold text-indigo-900 mb-2 flex items-center">
                  <Volume2 className="mr-2" size={20} /> Pronunciation Guide
                </h3>
                <p className="text-indigo-800 italic">"Aa" sounds like "Ah" as in "Apple" or "Ant".</p>
                <p className="text-gray-500 text-sm mt-2">Try saying it slowly: <span className="font-bold text-indigo-600">Ah-puhl</span></p>
              </div>
            </div>
          </div>

          <div className="prose prose-indigo max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 brand-font mb-4">Educational Explanation: What is an Apple?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              An apple is a sweet, crunchy fruit that grows on trees. Apples come in many different colors like bright red, shiny green, and golden yellow. Did you know that there are thousands of different types of apples in the world? Apples are very healthy for kids because they are full of fiber and vitamins that help you grow strong and keep your heart healthy.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              When you cut an apple in half, you can see the white flesh inside and tiny brown seeds in the center. It is important to remember that while the fruit is delicious, we usually don't eat the core or the seeds. Apples are used to make many yummy things like apple juice, apple pie, and even apple sauce!
            </p>

            <h2 className="text-2xl font-bold text-gray-900 brand-font mb-4 mt-8">Writing the Letter A</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Learning to write the letter A is easy! Follow these simple steps:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h4 className="font-bold text-gray-800 mb-2 underline">Uppercase 'A'</h4>
                <ol className="text-sm text-gray-600 list-decimal ml-4 space-y-1">
                  <li>Start at the top point.</li>
                  <li>Draw a slanted line down to the left.</li>
                  <li>Go back to the top and draw a slanted line down to the right.</li>
                  <li>Draw a horizontal line across the middle to connect them.</li>
                </ol>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h4 className="font-bold text-gray-800 mb-2 underline">Lowercase 'a'</h4>
                <ol className="text-sm text-gray-600 list-decimal ml-4 space-y-1">
                  <li>Draw a small circle in the middle.</li>
                  <li>Add a short line down on the right side.</li>
                  <li>Make sure the line touches the circle!</li>
                </ol>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 brand-font mb-4">Activity Corner: Find the 'A's!</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Can you find all the words that start with the letter A in this list? 
              <br /><br />
              <strong>Ant</strong>, Ball, <strong>Alligator</strong>, Cat, <strong>Astronaut</strong>, Dog, <strong>Axe</strong>.
              <br /><br />
              Great job! Notice how your mouth opens wide when you start saying these words. That is the sound of the letter A working hard!
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link to="/alphabets/b" className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-lg">
          Next: B for Ball <ArrowLeft className="ml-2 rotate-180" size={20} />
        </Link>
      </div>
    </div>
  );
};

export default AlphabetDetail;
