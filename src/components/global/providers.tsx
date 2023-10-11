'use client';

import { NextUIProvider } from '@nextui-org/react';
import AppNavbar from '../native/Navbar';
import MusicBar from '@/app/pages/musics/[categories]/[id]/MusicBar';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <main className='bg-background p-4 text-foreground dark'>
        <AppNavbar />
        {children}
        <MusicBar />
      </main>
    </NextUIProvider>
  );
}
