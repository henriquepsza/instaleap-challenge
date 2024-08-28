import { Box, Heading } from '@chakra-ui/react';
import AvailabilityTimeSlotsForm from '../components/AvailabilityTimeSlotsForm.tsx';

const AvailabilityTimeSlotsPage = () => {
  return (
    <Box>
      <Heading textAlign='center'>AvailabilityTimeSlotsPage</Heading>
      <AvailabilityTimeSlotsForm />
    </Box>
  );
};

export default AvailabilityTimeSlotsPage;
