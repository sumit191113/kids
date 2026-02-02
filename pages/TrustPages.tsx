
import React from 'react';

const PolicyLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="max-w-4xl mx-auto px-4 py-16 animate-in fade-in duration-300">
    <h1 className="text-4xl font-bold text-gray-900 brand-font mb-8 text-center">{title}</h1>
    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm prose prose-indigo max-w-none">
      {children}
    </div>
    <p className="mt-8 text-center text-gray-400 text-xs">NO ADVERTISEMENTS ON THIS PAGE AS PER POLICY</p>
  </div>
);

export const Privacy: React.FC = () => (
  <PolicyLayout title="Privacy Policy">
    <p>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
    <p>At KiddoStudy, we take your privacy—and especially your child's privacy—very seriously. We comply with COPPA (Children's Online Privacy Protection Act) guidelines.</p>
    <h3>Data Collection</h3>
    <p>We do not collect personal information from children. We do not require account creation for learners to access our content. Standard server logs and analytics are used solely to improve our educational offerings and do not identify individual users.</p>
    <h3>Cookies</h3>
    <p>We use cookies to provide basic website functionality and to serve non-intrusive, relevant educational advertisements through partners like Google AdSense. You can disable cookies in your browser settings at any time.</p>
  </PolicyLayout>
);

export const Terms: React.FC = () => (
  <PolicyLayout title="Terms & Conditions">
    <p>By using KiddoStudy Kids Learning, you agree to the following terms:</p>
    <ol>
      <li>Content provided on this site is for educational purposes only.</li>
      <li>You may use our materials for personal, non-commercial use in homes or classrooms.</li>
      <li>Redistribution or modification of our content for commercial profit is strictly prohibited.</li>
      <li>While we strive for accuracy, we are not responsible for errors or omissions in educational content.</li>
    </ol>
  </PolicyLayout>
);

export const Disclaimer: React.FC = () => (
  <PolicyLayout title="Disclaimer">
    <p>The information on KiddoStudy Kids Learning is provided "as is." We make no warranties about the completeness or reliability of our educational content. Any action you take upon the information you find on this website is strictly at your own risk.</p>
    <p>KiddoStudy contains links to external websites that are not provided or maintained by us. We do not guarantee the accuracy or relevance of information on these external sites.</p>
  </PolicyLayout>
);

export const Contact: React.FC = () => (
  <PolicyLayout title="Contact Us">
    <p>We love hearing from parents, teachers, and learners! If you have suggestions for new topics, found a typo, or just want to say hello, please reach out.</p>
    <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 my-8">
      <p className="m-0 text-indigo-900 font-bold">General Inquiries:</p>
      <p className="m-0 text-indigo-700">hello@kiddostudy.learning</p>
      <p className="mt-4 mb-0 text-indigo-900 font-bold">Educational Collaborations:</p>
      <p className="m-0 text-indigo-700">edu-partners@kiddostudy.learning</p>
    </div>
    <p>We aim to respond to all inquiries within 48 hours during business days.</p>
  </PolicyLayout>
);
