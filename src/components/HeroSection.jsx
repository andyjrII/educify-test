const HeroSection = () => {
  return (
    <section className='bg-blue-50 py-16'>
      <div className='max-w-7xl mx-auto px-14 flex flex-wrap -mx-2'>
        <div className='w-full md:w-2/3 px-2'>
          <h1 className='text-7xl font-bold mb-4'>
            Achieve Your Goals with
            <span className='text-blue-600'>Personalized</span> Learning!
          </h1>
          <p className='text-gray-600 mb-6 text-2xl'>
            Experience engaging and effective lessons and courses.
          </p>

          <div className='flex flex-col sm:flex-row items-center mb-6 relative'>
            <input
              type='text'
              placeholder='Search for a className'
              className='border border-gray-300 px-4 py-3 rounded-l-full w-full sm:w-80'
            />
            <div className='relative'>
              <input
                type='text'
                placeholder='Class location'
                className='border border-gray-300 px-4 py-3 rounded-r-full w-full sm:w-80 pl-10'
              />
              <button className='absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-2 rounded-full'>
                Search
              </button>
            </div>
          </div>

          <div className='flex justify-center items-center space-x-4 text-sm text-gray-500'>
            <span>Excellent</span>
            <span>★ 4.8/5</span>
            <span>438 reviews on Trustpilot</span>
          </div>
        </div>

        <div className='w-full md:w-1/3 px-2'>
          <img
            src='https://img.freepik.com/free-photo/college-students-different-ethnicities-cramming_23-2149891363.jpg?ga=GA1.1.1017611029.1747432969&semt=ais_hybrid&w=740'
            alt='Hero Image'
            className='mx-auto rounded-lg shadow-md w-full h-full object-cover md:w-98 md:h-60 lg:w-[600px] lg:h-[300px]'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
