import { Grid, GridItem } from '@chakra-ui/react';
import AvailabilityTimeSlots from "./AvailabilityTimeSlots.tsx";

const ResponsiveLayout = () => {
    return (
        <Grid
            // Definindo as áreas da grade para diferentes tamanhos de tela
            templateAreas={{
                base: `'nav' 'main' `, // Layout para telas pequenas
                md: `'nav nav' 'main main'`, // Layout para telas médias e maiores
            }}
            // Definindo as colunas da grade para diferentes tamanhos de tela
            gridTemplateColumns={{ base: '1fr', md: '200px 1fr' }}
            gridTemplateRows={{ base: '1fr', md: '55px 1fr' }}
            gap='1'
            height='100vh'
        >
            <GridItem area='nav' bg='blue.500' padding='4' color='white'>
                Navbar
            </GridItem>
            <GridItem area='main' padding='4'>
                <AvailabilityTimeSlots />
            </GridItem>
        </Grid>
    );
};

export default ResponsiveLayout;
