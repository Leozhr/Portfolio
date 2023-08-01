'use client';
import { usePathname } from 'next/navigation';

const LinkToCheck = () => {
  const pathname = usePathname();
  const links = ['/profile', '/project', '/contact'];

  for (const link of links) {
    if (pathname.startsWith(link)) return true;
  }

  return false;
}

export { LinkToCheck };

