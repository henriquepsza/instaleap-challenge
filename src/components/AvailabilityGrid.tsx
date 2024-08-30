import { Box, SimpleGrid } from '@chakra-ui/react';
import AvailabilityCardContainer from './AvailabilityCardContainer.tsx';
import AvailabilityCard from './AvailabilityCard.tsx';
import AvailabilityResponse from '../entities/AvailabilityResponse.ts';

interface Props {
  timeSlots: AvailabilityResponse;
  onSelect: (id: string) => void;
}

const AvailabilityGrid = ({ timeSlots, onSelect }: Props) => {
  if (timeSlots === null || timeSlots === undefined) return null;

  return (
    <Box padding={'10px'}>
      <SimpleGrid
        columns={{ 'sm': 1, 'md': 2, 'lg': 3, 'xl': 4, '2xl': 5 }}
        spacing={6}
      >
        {timeSlots.map((slot, index) => (
          <AvailabilityCardContainer key={index}>
            <AvailabilityCard timeSlot={slot} onSelect={onSelect} />
          </AvailabilityCardContainer>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default AvailabilityGrid;
