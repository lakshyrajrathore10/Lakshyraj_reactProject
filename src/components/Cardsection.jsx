import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiLoader } from 'react-icons/fi';

const WaveDiv = () => {
  const [stories, setStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const storiesPerPage = 8;

  useEffect(() => {
    setIsLoading(true);
    fetch('https://mxpertztestapi.onrender.com/api/sciencefiction')
      .then(res => res.json())
      .then(data => {
        setStories(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setIsLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(stories.length / storiesPerPage);

  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = stories.slice(indexOfFirstStory, indexOfLastStory);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <div className="relative bg-gradient-to-br from-[#000b76] to-[#0a043c] text-white pt-28 pb-24 min-h-screen overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full overflow-hidden h-32">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192 C360,96 720,224 1080,192 C1260,176 1440,96 1440,96 L1440,0 L0,0 Z"
          >
            <animate 
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              values="
                M0,192 C360,96 720,224 1080,192 C1260,176 1440,96 1440,96 L1440,0 L0,0 Z;
                M0,160 C360,240 720,80 1080,160 C1260,210 1440,130 1440,130 L1440,0 L0,0 Z;
                M0,192 C360,96 720,224 1080,192 C1260,176 1440,96 1440,96 L1440,0 L0,0 Z
              "
            />
          </path>
        </svg>
      </div>

    
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        

       
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <FiLoader className="animate-spin text-4xl text-blue-300" />
          </div>
        )}

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {!isLoading && stories.length === 0 ? (
            <div className="col-span-full text-center py-10">
              <p className="text-xl text-blue-100">No stories found</p>
            </div>
          ) : (
            currentStories.map(story => {
              const description =
                story.Storyadvenure?.content?.[0]?.Paragraph?.[0] || 'No description available.';
              const firstImage = story.Image?.[0];

              return (
                <div
                  key={story._id}
                  className="group rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                 
                  <div className="relative h-48 overflow-hidden">
                    {firstImage ? (
                      <img
                        src={`https://mxpertztestapi.onrender.com/images/${firstImage}`}
                        alt={story.Title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                        <span className="text-gray-300">No Image</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <h3 className="text-white text-lg font-semibold truncate">{story.Title}</h3>
                    </div>
                  </div>

                  
                  <div className="bg-gradient-to-br from-blue-900/90 to-purple-900/90 p-5">
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2">{story.Title}</h3>
                    <p className="text-blue-100 text-sm line-clamp-3 mb-4">{description}</p>
                    <button
                      className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:from-blue-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-[1.02]"
                      onClick={() => alert(`Story selected: ${story.Title}`)}
                    >
                      Read Story
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        
        {!isLoading && stories.length > storiesPerPage && (
          <div className="flex justify-center items-center mt-12 gap-6 text-blue-200 font-medium select-none">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
                currentPage === 1
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-800/50 text-white hover:bg-blue-700/50'
              }`}
            >
              <FiChevronLeft className="text-lg" />
              Previous
            </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
                currentPage === totalPages
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-800/50 text-white hover:bg-blue-700/50'
              }`}
            >
              Next
              <FiChevronRight className="text-lg" />
            </button>
          </div>
        )}
      </div>

      
      <style jsx global>{`
        @keyframes twinkle {
          0% { opacity: 0.2; }
          100% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default WaveDiv;
