import { Grid, GridItem } from '@chakra-ui/react';
import AvailabilityTimeSlotsPage from "../pages/AvailabilityTimeSlotsPage.tsx";

const ResponsiveLayout = () => {
    return (
        <Grid

            templateAreas={{
                base: `'nav' 'main' `,
                md: `'nav nav' 'main main'`,
            }}
            gridTemplateColumns={{ base: '1fr', md: '200px 1fr' }}
            gridTemplateRows={{ base: '1fr', md: '55px 1fr' }}
            gap='1'
            height='100vh'
        >
            <GridItem area='nav' bg='blue.500' padding='4' color='white'>
                Navbar
            </GridItem>
            <GridItem area='main' padding='4'>
                <AvailabilityTimeSlotsPage />
            </GridItem>
        </Grid>
    );
};

export default ResponsiveLayout;
