import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className="py-4 border-b-2 border-b-gray-300 drop-shadow-md fixed z-10 top-0 inset-x-0 bg-[#6d44fc] text-white">
      <Link to={'/'}>
        <h1 className="font-bold text-3xl uppercase text-center">
          My Blogs
        </h1>
      </Link>
    </header>
  );
}
