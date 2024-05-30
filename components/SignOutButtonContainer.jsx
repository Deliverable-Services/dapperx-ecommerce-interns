import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { LogOut, CircleUserRound } from 'lucide-react';

const SignOutButtonContainer = ({ handleAuth, setProfileOpen }) => {
  const signOutButton = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!signOutButton?.current?.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
  }, [setProfileOpen]);

  return (
    <div
      className='bg-slate h-20 w-40 fixed right-7 top-24 items-start p-3 justify-around gap-3 flex flex-col'
      ref={signOutButton}
    >
      <Link href={'/profile'} className='flex gap-2 items-center'>
        <CircleUserRound className='size-5' />
        My profile
      </Link>
      <button onClick={handleAuth} className='flex gap-2 items-center'>
        <LogOut className='size-5' />
        Sign out
      </button>
    </div>
  );
};

export default SignOutButtonContainer;
