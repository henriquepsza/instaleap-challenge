import { useRef } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  HStack,
} from '@chakra-ui/react';
import AvailabilityRequest from '../entities/AvailabilityRequest.ts';

const AvailabilityTimeSlotsForm = () => {
  // Create refs for each form field
  const currencyCodeRef = useRef<HTMLInputElement>(null);
  const startRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLInputElement>(null);
  const slotSizeRef = useRef<HTMLSelectElement>(null);
  const originNameRef = useRef<HTMLInputElement>(null);
  const originAddressRef = useRef<HTMLInputElement>(null);
  const destinationNameRef = useRef<HTMLInputElement>(null);
  const destinationAddressRef = useRef<HTMLInputElement>(null);

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
          replacement: {
            replacement_mode: '',
            suggested_replacements: [],
          },
          available_lots: [],
          kit_info: {
            id: '',
            number: 0,
            price: 0,
          },
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
  };

  return (
    <Box p={4} borderWidth={1} borderRadius='lg' boxShadow='lg' marginTop={3}>
      <VStack spacing={4}>
        {/* Currency Code Input */}
        <FormControl id='currency_code' isRequired>
          <FormLabel>Currency Code</FormLabel>
          <Input ref={currencyCodeRef} placeholder='Enter currency code' />
        </FormControl>
        <HStack spacing={4} width='full'>
          {/* Start Date Input */}
          <FormControl id='start' isRequired>
            <FormLabel>Start Date</FormLabel>
            <Input type='datetime-local' ref={startRef} />
          </FormControl>
          {/* End Date Input */}
          <FormControl id='end' isRequired>
            <FormLabel>End Date</FormLabel>
            <Input type='datetime-local' ref={endRef} />
          </FormControl>
        </HStack>
        {/* Slot Size Select */}
        <FormControl id='slot_size' isRequired>
          <FormLabel>Slot Size (minutes)</FormLabel>
          <Select ref={slotSizeRef}>
            <option value={15}>15</option>
            <option value={30}>30</option>
            <option value={45}>45</option>
            <option value={60}>60</option>
          </Select>
        </FormControl>
        {/* Origin Name Input */}
        <FormControl id='origin_name' isRequired>
          <FormLabel>Origin Name</FormLabel>
          <Input ref={originNameRef} placeholder='Enter origin name' />
        </FormControl>
        {/* Origin Address Input */}
        <FormControl id='origin_address' isRequired>
          <FormLabel>Origin Address</FormLabel>
          <Input ref={originAddressRef} placeholder='Enter origin address' />
        </FormControl>
        {/* Destination Name Input */}
        <FormControl id='destination_name' isRequired>
          <FormLabel>Destination Name</FormLabel>
          <Input
            ref={destinationNameRef}
            placeholder='Enter destination name'
          />
        </FormControl>
        {/* Destination Address Input */}
        <FormControl id='destination_address' isRequired>
          <FormLabel>Destination Address</FormLabel>
          <Input
            ref={destinationAddressRef}
            placeholder='Enter destination address'
          />
        </FormControl>
        {/* Submit Button */}
        <Button colorScheme='blue' onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default AvailabilityTimeSlotsForm;
