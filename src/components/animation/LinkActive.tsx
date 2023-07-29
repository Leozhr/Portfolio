import Link from 'next/link';
import { usePathname } from 'next/navigation';

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const LinkActive = ({ href, children, className }: LinkProps) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link href={href} className={`${className} ${isActive ? 'active' : ''}`}>
      {children}
    </Link>
  );
};

export { LinkActive };

