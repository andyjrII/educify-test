const TutorsSection = () => {
  return (
    <section className='bg-white py-12'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-center text-2xl sm:text-3xl font-semibold text-gray-800 mb-8'>
          Meet 2k+ Tutors
        </h2>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3'>
          <div className='bg-white shadow rounded-lg overflow-hidden'>
            <div className='relative'>
              <img
                src='https://randomuser.me/api/portraits/women/65.jpg'
                alt='Devon Lane'
                className='w-full h-48 object-cover'
              />
              <span className='absolute bottom-2 left-2 bg-blue-600 text-white text-xs font-medium px-2 py-0.5 rounded'>
                Get 1st Lesson Free
              </span>
            </div>
            <div className='p-3 text-sm text-gray-700'>
              <div className='font-semibold text-gray-800'>
                Devon Lane
                <span className='float-right font-bold text-gray-900'>
                  $14/h
                </span>
              </div>
              <div className='mt-1 text-xs text-gray-600'>
                🧑‍🏫 Math Tutor • ⭐ 4.8 (1.2k Reviews)
                <br />
                📍 Online, Nigeria
              </div>
            </div>
          </div>

          <div className='bg-white shadow rounded-lg overflow-hidden'>
            <div className='relative'>
              <img
                src='https://randomuser.me/api/portraits/women/44.jpg'
                alt='Bessie Cooper'
                className='w-full h-48 object-cover'
              />
              <span className='absolute bottom-2 left-2 bg-blue-600 text-white text-xs font-medium px-2 py-0.5 rounded'>
                Get 1st Lesson Free
              </span>
            </div>
            <div className='p-3 text-sm text-gray-700'>
              <div className='font-semibold text-gray-800'>
                Bessie Cooper
                <span className='float-right font-bold text-gray-900'>
                  $14/h
                </span>
              </div>
              <div className='mt-1 text-xs text-gray-600'>
                🧑‍🏫 Math Tutor • ⭐ 4.3 (2.5k Reviews)
                <br />
                📍 Online, Nigeria
              </div>
            </div>
          </div>

          <div className='bg-white shadow rounded-lg overflow-hidden'>
            <div className='relative'>
              <img
                src='https://randomuser.me/api/portraits/men/23.jpg'
                alt='Ronald Richards'
                className='w-full h-48 object-cover'
              />
              <span className='absolute bottom-2 left-2 bg-blue-600 text-white text-xs font-medium px-2 py-0.5 rounded'>
                Get 1st Lesson Free
              </span>
            </div>
            <div className='p-3 text-sm text-gray-700'>
              <div className='font-semibold text-gray-800'>
                Ronald Richards
                <span className='float-right font-bold text-gray-900'>
                  $14/h
                </span>
              </div>
              <div className='mt-1 text-xs text-gray-600'>
                🧑‍🏫 Math Tutor • ⭐ 4.2 (3.6k Reviews)
                <br />
                📍 Online, Nigeria
              </div>
            </div>
          </div>

          <div className='bg-white shadow rounded-lg overflow-hidden'>
            <div className='relative'>
              <img
                src='https://randomuser.me/api/portraits/women/12.jpg'
                alt='Savannah Nguyen'
                className='w-full h-48 object-cover'
              />
              <span className='absolute bottom-2 left-2 bg-blue-600 text-white text-xs font-medium px-2 py-0.5 rounded'>
                Get 1st Lesson Free
              </span>
            </div>
            <div className='p-3 text-sm text-gray-700'>
              <div className='font-semibold text-gray-800'>
                Savannah Nguyen
                <span className='float-right font-bold text-gray-900'>
                  $14/h
                </span>
              </div>
              <div className='mt-1 text-xs text-gray-600'>
                🧑‍🏫 Math Tutor • ⭐ 4.3 (2.5k Reviews)
                <br />
                📍 Online, Nigeria
              </div>
            </div>
          </div>

          <div className='bg-white shadow rounded-lg overflow-hidden'>
            <div className='relative'>
              <img
                src='https://randomuser.me/api/portraits/men/5.jpg'
                alt='Guy Hawkins'
                className='w-full h-48 object-cover'
              />
              <span className='absolute bottom-2 left-2 bg-blue-600 text-white text-xs font-medium px-2 py-0.5 rounded'>
                Get 1st Lesson Free
              </span>
            </div>
            <div className='p-3 text-sm text-gray-700'>
              <div className='font-semibold text-gray-800'>
                Guy Hawkins
                <span className='float-right font-bold text-gray-900'>
                  $14/h
                </span>
              </div>
              <div className='mt-1 text-xs text-gray-600'>
                🧑‍🏫 Math Tutor • ⭐ 4.6 (1.9k Reviews)
                <br />
                📍 Online, Nigeria
              </div>
            </div>
          </div>
        </div>

        <div className='mt-10 text-center'>
          <button className='bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:from-purple-600 hover:to-blue-600 transition-all duration-300'>
            Book a free trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default TutorsSection;
