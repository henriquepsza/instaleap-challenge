import { Box, SimpleGrid } from '@chakra-ui/react';
import AvailabilityCardContainer from './AvailabilityCardContainer.tsx';
import AvailabilityCard from './AvailabilityCard.tsx';
import AvailabilityResponse from '../entities/AvailabilityResponse.ts';

interface Props {
  timeSlots: AvailabilityResponse;
}

const AvailabilityGrid = ({ timeSlots }: Props) => {
  const handleSelectSlot = (id: string) => {
    console.log('Selected Slot ID:', id);
  };

  if (timeSlots === null || timeSlots === undefined) return null;

  return (
    <Box padding={'10px'}>
      <SimpleGrid
        columns={{ 'sm': 1, 'md': 2, 'lg': 3, 'xl': 4, '2xl': 5 }}
        spacing={6}
      >
        {timeSlots.map((slot, index) => (
          <AvailabilityCardContainer key={index}>
            <AvailabilityCard timeSlot={slot} onSelect={handleSelectSlot} />
          </AvailabilityCardContainer>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default AvailabilityGrid;
