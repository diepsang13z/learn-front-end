import { Metadata } from 'next';

import './globals.css';
import { Inter } from 'next/font/google';
import AppFooter from '@/components/app.footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import AppHeader from '@/components/app.header';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '_bluegem blogs',
  description: 'welcome to _bluegem blogs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        <Container style={{ minHeight: 'calc(100vh - 130px' }}>
          {children}
        </Container>
        <AppFooter />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
