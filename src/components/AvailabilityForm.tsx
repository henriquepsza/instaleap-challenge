import { useRef, useState } from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';
import AvailabilityRequest from '../entities/AvailabilityRequest.ts';
import useAvailabilityTimeSlots from '../hooks/useAvailabilityTimeSlots.ts';
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

const AvailabilityForm = () => {
  // Create refs for each form field
  // const currencyCodeRef = useRef<HTMLInputElement>(null);
  // const startRef = useRef<HTMLInputElement>(null);
  // const endRef = useRef<HTMLInputElement>(null);
  // const slotSizeRef = useRef<HTMLSelectElement>(null);
  // const originNameRef = useRef<HTMLInputElement>(null);
  // const originAddressRef = useRef<HTMLInputElement>(null);
  // const destinationNameRef = useRef<HTMLInputElement>(null);
  // const destinationAddressRef = useRef<HTMLInputElement>(null);

  const [timeSlots, setTimeSlots] = useState(mockData);

  const { mutate } = useAvailabilityTimeSlots();

  // Function to handle form submission
  const handleSubmit = () => {
    const formData: AvailabilityRequest = {
      currency_code: 'USD',
      start: '2024-09-01T08:00:00Z',
      end: '2024-09-08T08:00:00Z',
      slot_size: 60,
      minimum_slot_size: 15,
      operational_models_priority: ['FULL_SERVICE'],
      fallback: true,
      store_reference: '101_FS',
      origin: {
        name: 'Chapati & Rolex, Gulu - Kampala Road',
        address: 'Luweero, Uganda',
        address_two: '',
        description: '',
        country: 'Uganda',
        city: 'Luweero',
        state: '',
        zip_code: '',
        latitude: 0.8327151823429905,
        longitude: 32.49982904419257,
      },
      destination: {
        name: 'TransMilenio, Suba',
        address: '111121 Bogotá, Colombia',
        address_two: '',
        description: '',
        country: 'Colombia',
        city: 'Bogotá',
        state: 'Bogotá',
        zip_code: '111121',
        latitude: 4.711,
        longitude: -74.0721,
      },
      job_items: [
        {
          id: 'Item001',
          name: 'Smartphone',
          photo_url: '',
          unit: 'pz',
          sub_unit: 'box',
          quantity: 2,
          sub_quantity: 1,
          quantity_found_limits: { max: 0, min: 0 },
          barcodes: [],
          weight: 0,
          volume: 0,
          price: 699.99,
          comment: '',
          picking_time_multiplier: 0,
          available_lots: [],
          claim_information: {
            max_time_to_claim_in_hours: 0,
            available_claim_actions: [],
          },
          attributes: {
            category: 'Electronics',
            plu: '',
            ean: '5678901234567',
            location: '',
            picking_index: '',
          },
        },
      ],
    };

    console.log('Form data:', formData);
    // Add logic here to send data to the API or process it as needed
    mutate(formData, {
      onSuccess: data => {
        console.log(data);
      },
      onError: err => {
        console.log(err);
      },
    });
  };

  const handleSelectSlot = (id: string) => {
    console.log('Selected Slot ID:', id);
    // Aqui você pode adicionar a lógica de manipulação para o slot selecionado
  };

  return (
    <Box p={4} borderWidth={1} borderRadius='lg' boxShadow='lg' marginTop={3}>
      <VStack spacing={4}>
        <Button colorScheme='blue' onClick={handleSubmit}>
          Check availability
        </Button>
        <AvailabilityCardContainer>
          {timeSlots.map((slot, index) => (
            <AvailabilityCard
              key={index}
              timeSlot={slot}
              onSelect={handleSelectSlot}
            />
          ))}
        </AvailabilityCardContainer>
      </VStack>
    </Box>
  );
};

export default AvailabilityForm;
