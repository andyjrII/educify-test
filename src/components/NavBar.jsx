import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='bg-white border-b border-gray-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <div className='flex items-center space-x-4'>
            <span className='text-2xl font-bold text-blue-600'>Educify</span>
            <Link to='#' className='text-sm text-gray-600 hover:text-blue-500'>
              Home
            </Link>
            <Link to='#' className='text-sm text-gray-600 hover:text-blue-500'>
              About
            </Link>
            <Link to='#' className='text-sm text-gray-600 hover:text-blue-500'>
              Blog
            </Link>
            <Link to='#' className='text-sm text-gray-600 hover:text-blue-500'>
              Explore All Categories
            </Link>
          </div>
          <div className='flex space-x-4 items-center'>
            <Link to='#' className='text-sm text-gray-600 hover:text-blue-500'>
              Become Link Tutor
            </Link>
            <button className='bg-blue-600 text-white px-4 py-1 rounded-full text-sm'>
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
