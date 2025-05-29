import React from 'react';
import Header from './components/Header';
import CardSection from './components/Cardsection';

function App() {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center mt-32 space-y-6 px-4 sm:px-6 md:px-0">
        <h1 className="text-black text-3xl font-bold text-center">Science Fiction Stories</h1>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
            New
          </button>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-yellow-600 transition">
            In Progress
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition">
            Complete
          </button>
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-700 transition">
            Clear All
          </button>
        </div>
      </div>

      <CardSection />
    </>
  );
}

export default App;
