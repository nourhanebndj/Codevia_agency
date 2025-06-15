import React from 'react';
import Layout from '../components/Layout';

const Policy = () => {
  return (
    <Layout>
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          We collect personal data only to improve your experience and deliver requested services.
        </p>
        <p className="text-gray-700">
          We never share your information with third parties. By using this site, you agree to our terms.
        </p>
      </section>
    </Layout>
  );
};

export default Policy;
