import { createStyles } from '@mantine/core';

export const NAVBAR_HEIGHT = 60;

export default createStyles(() => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
}));
