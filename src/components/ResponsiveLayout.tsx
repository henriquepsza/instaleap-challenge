import { Grid, GridItem } from '@chakra-ui/react';
import SideMenu from './SideMenu.tsx';
import { Outlet } from 'react-router-dom';

const ResponsiveLayout = () => {
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main' `,
        md: `'nav nav' 'aside main'`,
      }}
      gridTemplateColumns={{ base: '1fr', md: '200px 1fr' }}
      gridTemplateRows={{ base: '1fr', md: '55px 1fr' }}
      gap='1'
      height='100vh'
    >
      <GridItem area='nav' bg='blue.500' padding='4' color='white'>
        Navbar
      </GridItem>
      <GridItem
        area='aside'
        bg='gray.500'
        padding='4'
        display={{ base: 'none', md: 'block' }}
      >
        <SideMenu />
      </GridItem>
      <GridItem area='main' padding='4'>
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default ResponsiveLayout;
