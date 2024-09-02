import { Box, Heading, useToast } from '@chakra-ui/react';
import AvailabilityButton from '../components/AvailabilityButton.tsx';
import GenericGrid from '../components/GenericGrid.tsx';
import AvailabilityRequest from '../entities/AvailabilityRequest.ts';
import useAvailabilityTimeSlots from '../hooks/useAvailabilityTimeSlots.ts';
import { useState } from 'react';
import AvailabilityResponse from '../entities/AvailabilityResponse.ts';
import useAddJob from '../hooks/useAddJob.ts';
import CardContainer from '../components/CardContainer.tsx';
import AvailabilityCard from '../components/AvailabilityCard.tsx';
import JSONServerClient from '../services/api-client-json-server.ts';

const jobIdClient = new JSONServerClient<{ id: string }, { id: string }>(
  'jobIds'
);

const AvailabilityTimeSlotsPage = () => {
  const { mutate: getTimeSlots } = useAvailabilityTimeSlots();
  const [timeSlots, setTimeSlots] = useState<AvailabilityResponse>([]);
  const { mutate: addJob } = useAddJob();
  const toast = useToast();

  // Function to handle submission
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

    // console.log('Form data:', formData);
    // Add logic here to send data to the API or process it as needed
    getTimeSlots(formData, {
      onSuccess: data => {
        // console.log(data);
        setTimeSlots(data);
      },
      onError: err => {
        // console.log(err);
        toast({
          title: 'Error.',
          description: err.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      },
    });
  };

  const generateClientReference = () => `Order${Date.now()}`;

  const handleSelectSlot = (id: string) => {
    const jobRequest = {
      slot_id: id,
      client_reference: generateClientReference(),
      recipient: {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone_number: '+256789012345',
      },
      payment_info: {
        currency_code: 'USD',
        prices: {
          order_value: 699.99,
        },
        payment: {
          method: 'CASH',
        },
      },
      add_delivery_code: true,
      contact_less: {
        comment: 'LeaveAtTheDoor',
        cash_receiver: 'John Doe',
        phone_number: '+256789098765',
      },
    };

    console.log('jobRequest:', jobRequest);

    addJob(jobRequest, {
      onSuccess: data => {
        console.log(data);
        jobIdClient.post({ id: data.job_id }).then(data => console.log(data));
        toast({
          title: 'Job created.',
          description: `Job was created successfully.`,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      },
      onError: err => {
        // console.log(err);
        toast({
          title: 'Error.',
          description: err.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      },
    });
  };

  return (
    <Box>
      <Heading textAlign='center'>Availability Time Slots Page</Heading>
      <AvailabilityButton onSubmit={handleSubmit} />
      <GenericGrid>
        {timeSlots.map((slot, index) => (
          <CardContainer key={index}>
            <AvailabilityCard timeSlot={slot} onSelect={handleSelectSlot} />
          </CardContainer>
        ))}
      </GenericGrid>
    </Box>
  );
};

export default AvailabilityTimeSlotsPage;
