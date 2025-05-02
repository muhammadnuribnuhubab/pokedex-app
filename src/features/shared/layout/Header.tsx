// src/features/shared/layout/Header.tsx

'use client';

import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { Logo } from '@/features/shared/ui/Logo';
import { SearchInput } from '@/features/shared/widgets/SearchInput';
import clsx from 'clsx';

export const Header: FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (pathname === '/') {
      const handleScroll = () => {
        const heroHeight = 400;
        setShowSearch(window.scrollY > heroHeight);
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setShowSearch(true);
    }
  }, [pathname]);

  return (
    <header
      className={clsx(
        'fixed top-0 z-999 w-full transition-colors',
        showSearch
          ? 'bg-white shadow-[0px_4px_24px_0px_#B4B2B240]'
          : 'bg-primary-300'
      )}
    >
      <div
        className={clsx(
          'container mx-auto px-4 py-3 md:py-5 flex items-center gap-2 justify-center',
          showSearch && 'md:justify-between'
        )}
      >
        <Logo hideText={showSearch} />

        {showSearch && (
          <div className='max-w-xs w-full'>
            <SearchInput
              placeholder='Search Pokémon'
              className='!text-[2vh] md:!text-[2.5vh]'
              onChange={(value) => {
                const newQuery = value ? `?q=${encodeURIComponent(value)}` : '';
                router.push(`/search${newQuery}`);
              }}
            />
          </div>
        )}
      </div>
    </header>
  );
};
