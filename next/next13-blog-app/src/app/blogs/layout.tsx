import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '_bluegem blogs list',
  description: '_bluegem blogs list',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
