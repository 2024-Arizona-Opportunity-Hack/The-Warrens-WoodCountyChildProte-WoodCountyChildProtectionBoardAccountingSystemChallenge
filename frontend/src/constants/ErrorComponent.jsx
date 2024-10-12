import React from 'react';

export default function ErrorComponent() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-10 bg-white shadow-lg rounded-lg">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Something great is being built here!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We're working hard to bring something amazing. Please come back soon!
        </p>
        <p className="text-gray-500">
          Meanwhile, you can follow our updates or contact us for more info.
        </p>
      </div>
    </div>
  );
}
