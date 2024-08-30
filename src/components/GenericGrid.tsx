import { ReactNode } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';

interface Props {
  // timeSlots: AvailabilityResponse;
  // onSelect: (id: string) => void;
  children: ReactNode;
}

const GenericGrid = ({ children }: Props) => {
  // if (timeSlots === null || timeSlots === undefined) return null;

  return (
    <Box padding={'10px'}>
      <SimpleGrid
        columns={{ 'sm': 1, 'md': 2, 'lg': 3, 'xl': 4, '2xl': 5 }}
        spacing={6}
      >
        {children}
      </SimpleGrid>
    </Box>
  );
};

export default GenericGrid;
