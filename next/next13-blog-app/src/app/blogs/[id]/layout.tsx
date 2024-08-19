import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '_bluegem blogs details',
  description: '_bluegem blogs details',
};

export default function ViewDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
