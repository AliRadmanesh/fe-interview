import Image from 'next/image';
import { Header, Container } from '@mantine/core';

import { ColorSchemeToggle } from '../ColorSchemeToggle';
import useStyles, { NAVBAR_HEIGHT } from './Navbar.styles';

export function Navbar() {
  const { classes } = useStyles();

  return (
    <Header height={NAVBAR_HEIGHT} mb="xl" className={classes.root}>
      <Container className={classes.navbar} fluid px="lg">
        <Image src="/favicon.svg" alt="Mantine Logo" width={28} height={28} />
        <ColorSchemeToggle />
      </Container>
    </Header>
  );
}
