import type { ReactElement } from 'react';
import { Container } from '@mantine/core';

import { Navbar } from '../Navbar';

type LayoutProps = {
  children: ReactElement;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>
        <Container size="xl" px="lg">
          {children}
        </Container>
      </main>
    </>
  );
}
