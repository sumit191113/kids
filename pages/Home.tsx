
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section - NO ADS ABOVE THE FOLD */}
      <section className="relative overflow-hidden bg-indigo-50 pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-indigo-950 mb-6 brand-font leading-tight">
            Nurturing Young Minds through <br />
            <span className="text-indigo-600">Fun & Playful Learning</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Welcome to KiddoStudy, a comprehensive educational platform designed specifically for children aged 3 to 10. Our mission is to support parents and teachers with structured, high-quality, and completely free learning resources.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/alphabets" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200 flex items-center justify-center">
              Explore Alphabets <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/numbers" className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-100 font-bold rounded-2xl hover:bg-indigo-50 transition-all flex items-center justify-center">
              Learn Numbers
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-yellow-400 opacity-20"><Star size={64} fill="currentColor" /></div>
        <div className="absolute bottom-10 right-10 text-pink-400 opacity-20"><Heart size={64} fill="currentColor" /></div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column - SEO Rich Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-indigo max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 brand-font mb-4">Why Early Childhood Learning Matters?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The first few years of a child's life are critical for brain development. Research consistently shows that early exposure to basic concepts like literacy, numeracy, and problem-solving sets the foundation for future academic success. At KiddoStudy, we focus on a balanced approach that combines traditional teaching methods with modern, interactive explanations.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 brand-font mb-4">Our Educational Philosophy</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe that learning should never be a chore. Instead, it should be an adventure. Our curriculum is designed by education experts to ensure that every lesson is accessible, engaging, and age-appropriate. Whether your child is just starting with the ABCs or mastering complex counting, our resources are here to guide them every step of the way.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 brand-font mb-4">A Trusted Resource for Parents & Teachers</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                For parents, KiddoStudy offers a safe, curated environment where children can learn independently or as a family activity. For teachers, we provide structured lesson materials and pronunciation guides that can easily be integrated into any classroom setting. We strictly adhere to high educational standards to ensure our content remains factual, objective, and purely educational.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl my-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-yellow-600" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-bold text-yellow-800 brand-font">Pro Learning Tip!</h3>
                    <div className="mt-2 text-yellow-700">
                      <p>
                        Try reading our alphabet sections aloud with your child. Phonics—the relationship between letters and sounds—is one of the most effective ways to build reading fluency early on.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 brand-font mb-4">What Your Child Will Learn Here</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0">
                {[
                  "Recognition of Uppercase and Lowercase Letters",
                  "Building Phonic Awareness and Vocabulary",
                  "Understanding Numbers and Quantity Concepts",
                  "Daily Life Usage of Mathematical Skills",
                  "Developing Focus and Attention Span",
                  "Curiosity about Animals, Nature, and Objects"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-gray-600">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-gray-600 leading-relaxed mt-8">
                By focusing on multisensory learning—combining visuals, audio-focused pronunciation guides, and interactive thinking—we help children retain information longer. Our website is updated regularly with new lessons, activities, and expert advice to keep the learning journey fresh and exciting for your little one.
              </p>
            </div>
          </div>

          {/* Right Column - Sidebar with secondary info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 brand-font mb-4">Quick Navigation</h4>
              <div className="space-y-3">
                <Link to="/alphabets" className="block p-3 bg-indigo-50 text-indigo-700 rounded-xl font-semibold hover:bg-indigo-100 transition-colors">Start ABCs</Link>
                <Link to="/numbers" className="block p-3 bg-indigo-50 text-indigo-700 rounded-xl font-semibold hover:bg-indigo-100 transition-colors">Start 123s</Link>
                <Link to="/about" className="block p-3 bg-gray-50 text-gray-700 rounded-xl font-semibold hover:bg-gray-100 transition-colors">Who We Are</Link>
              </div>
            </div>

            <div className="bg-indigo-600 rounded-2xl p-8 text-white shadow-xl">
              <h4 className="text-2xl font-bold brand-font mb-4">Stay Curious!</h4>
              <p className="text-indigo-100 mb-6">
                Learning is a gift that lasts a lifetime. Encourage your child to ask "Why?" every day.
              </p>
              <div className="h-1 w-12 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
