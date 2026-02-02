
import React from 'react';
import { Hash, Fingerprint, Calendar, ShoppingCart } from 'lucide-react';

const Numbers: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-500">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-indigo-900 brand-font mb-4">Counting Numbers 1 to 10</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Numbers are all around us! From counting toys to knowing your age, numbers help us understand the world.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Main Content */}
          <section className="prose prose-indigo max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 brand-font">Introduction to Numbers</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Counting is one of the very first math skills children learn. It helps develop "number sense," which is the ability to understand quantities and how they relate to each other. When we count from 1 to 10, we are building a ladder that leads to bigger numbers and even more exciting math adventures like addition and subtraction!
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 my-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                <div key={n} className="aspect-square bg-white border-2 border-indigo-100 rounded-2xl flex items-center justify-center text-3xl font-bold text-indigo-600 shadow-sm hover:scale-105 transition-transform">
                  {n}
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 brand-font">Why Do We Use Numbers Every Day?</h3>
            <p className="text-gray-600 leading-relaxed">
              Numbers aren't just for school; we use them every single day! Here are some fun ways we use numbers at home and outside:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
              <div className="flex items-start p-4 bg-blue-50 rounded-xl">
                <Calendar className="text-blue-500 mr-3 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-blue-900">Dates & Birthdays</h4>
                  <p className="text-sm text-blue-800">We use numbers to know when it's our birthday or what day of the week it is.</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-green-50 rounded-xl">
                <ShoppingCart className="text-green-500 mr-3 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-green-900">At the Store</h4>
                  <p className="text-sm text-green-800">We count how many apples we want to buy and look at the price tags.</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-purple-50 rounded-xl">
                <Fingerprint className="text-purple-500 mr-3 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-purple-900">Your Body</h4>
                  <p className="text-sm text-purple-800">You have 2 eyes, 1 nose, and 10 fingers. Your body is a number machine!</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-orange-50 rounded-xl">
                <Hash className="text-orange-500 mr-3 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-orange-900">Phone Numbers</h4>
                  <p className="text-sm text-orange-800">Numbers help us call our parents or grandparents to say hello.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 brand-font">Let's Practice Counting!</h3>
            <p className="text-gray-600 leading-relaxed">
              The best way to learn numbers is to touch things while you count them. This is called "one-to-one correspondence." If you have blocks or toy cars, line them up and touch each one as you say the number: "One... Two... Three..."
            </p>

            <h3 className="text-2xl font-bold text-gray-900 brand-font">The Concept of Zero</h3>
            <p className="text-gray-600 leading-relaxed">
              Before we get to 1, there is a very special number called <strong>Zero (0)</strong>. Zero means "nothing" or "empty." If you have a bowl of cookies and you eat them all, you have zero cookies left! Zero is a very important placeholder that helps us make bigger numbers like 10, 20, and 100 later on.
            </p>
          </section>
        </div>

        <aside className="lg:col-span-1 space-y-8">
          <div className="bg-indigo-900 text-white rounded-3xl p-8 sticky top-24">
            <h4 className="text-2xl font-bold brand-font mb-6">Learning Goals</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Recognize numbers 1-10</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Understand quantity</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Sequence numbers correctly</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Count objects in daily life</span>
              </li>
            </ul>
            <div className="mt-10 p-4 bg-indigo-800 rounded-2xl border border-indigo-700">
              <p className="text-sm italic opacity-90">"Pure mathematics is, in its way, the poetry of logical ideas." - Albert Einstein</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Numbers;
