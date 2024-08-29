import { useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import AvailabilityCardContainer from './AvailabilityCardContainer.tsx';
import AvailabilityCard from './AvailabilityCard.tsx';
import AvailabilityResponse from '../entities/AvailabilityResponse.ts';

const mockData: AvailabilityResponse[] = [
  {
    id: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcm9tIjoiMjAyNC0wOS0wMVQwODowMDowMC4wMDBaIiwidG8iOiIyMDI0LTA5LTAxVDA5OjU5OjAwLjAwMFoiLCJvcGVyYXRpb25hbE1vZGVsIjoiRlVMTF9TRVJWSUNFIiwic3RhcnRUaW1lQnlUYXNrIjp7IkZVTExfU0VSVklDRSI6eyJzdGFydERhdGUiOiIyMDI0LTA5LTAxVDA3OjE3OjAwLjAwMFoiLCJzdGVwc0R1cmF0aW9uIjpbMTUsMiw3LDE0LDVdfX0sInJlYXNvbiI6IkZBTExCQUNLIiwiam9iUXVvdGVJZCI6ImE5NjcyOTUxLWU4ZGMtNGNhZC05Y2YxLTM2ZDQ0NDFhYWI0OCIsImV4cGlyZXNBdCI6IjIwMjQtMDgtMjlUMTc6MjY6MzcuOTYzWiIsImlhdCI6MTcyNDk1MTQ5OCwiZXhwIjoxNzI0OTUyMzk4fQ.08UMdYEEIpVLhsOjjEU9bwl9pgsfi9wC1HF3MHnyajw',
    from: '2024-09-01T08:00:00.000Z',
    to: '2024-09-01T09:59:00.000Z',
    operational_model: 'FULL_SERVICE',
    store: {
      id: '1c7b37ce-763b-40a7-b547-fac7fbf7e2cb',
      name: 'Solutions FS',
    },
    description: 'FALLBACK',
    expires_at: '2024-08-29T17:26:37.963Z',
  },
  {
    id: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcm9tIjoiMjAyNC0wOS0wMVQxMDowMDowMC4wMDBaIiwidG8iOiIyMDI0LTA5LTAxVDExOjU5OjAwLjAwMFoiLCJvcGVyYXRpb25hbE1vZGVsIjoiRlVMTF9TRVJWSUNFIiwic3RhcnRUaW1lQnlUYXNrIjp7IkZVTExfU0VSVklDRSI6eyJzdGFydERhdGUiOiIyMDI0LTA5LTAxVDA5OjE3OjAwLjAwMFoiLCJzdGVwc0R1cmF0aW9uIjpbMTUsMiw3LDE0LDVdfX0sInJlYXNvbiI6IkZBTExCQUNLIiwiam9iUXVvdGVJZCI6ImE5NjcyOTUxLWU4ZGMtNGNhZC05Y2YxLTM2ZDQ0NDFhYWI0OCIsImV4cGlyZXNBdCI6IjIwMjQtMDgtMjlUMTc6MjY6MzcuOTYzWiIsImlhdCI6MTcyNDk1MTQ5OCwiZXhwIjoxNzI0OTUyMzk4fQ.hRsM-egOwKCX8ET7qjswZhJddL_a67NkkmKTU2KW2_8',
    from: '2024-09-01T10:00:00.000Z',
    to: '2024-09-01T11:59:00.000Z',
    operational_model: 'FULL_SERVICE',
    store: {
      id: '1c7b37ce-763b-40a7-b547-fac7fbf7e2cb',
      name: 'Solutions FS',
    },
    description: 'FALLBACK',
    expires_at: '2024-08-29T17:26:37.963Z',
  },
];

const AvailabilityGrid = () => {
  const [timeSlots, setTimeSlots] = useState(mockData);

  const handleSelectSlot = (id: string) => {
    console.log('Selected Slot ID:', id);
    // Aqui você pode adicionar a lógica de manipulação para o slot selecionado
  };

  return (
    <Box padding={'10px'}>
      <SimpleGrid
        columns={{ 'sm': 1, 'md': 2, 'lg': 3, 'xl': 4, '2xl': 5 }}
        spacing={6}
      >
        {timeSlots.map((slot, index) => (
          <AvailabilityCardContainer>
            <AvailabilityCard
              key={index}
              timeSlot={slot}
              onSelect={handleSelectSlot}
            />
          </AvailabilityCardContainer>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default AvailabilityGrid;
