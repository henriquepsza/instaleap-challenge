import {
  Card,
  CardBody,
  Heading,
  HStack,
  Text,
  Button,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import AvailabilityResponse from '../entities/AvailabilityResponse.ts';

interface Props {
  timeSlot: AvailabilityResponse;
  onSelect: (id: string) => void; // Callback function to handle slot selection
}

const AvailabilityTimeSlotsCard = ({ timeSlot, onSelect }: Props) => {
  return (
    <Card>
      <CardBody>
        <HStack justifyContent={'space-between'} marginBottom={3}>
          <Heading fontSize={'xl'}>{timeSlot.store.name}</Heading>
          <Text fontSize={'sm'} color={'gray.500'}>
            {format(new Date(timeSlot.from), 'PPpp')} -{' '}
            {format(new Date(timeSlot.to), 'PPpp')}
          </Text>
        </HStack>
        <HStack justifyContent={'space-between'}>
          <Text fontSize={'sm'}>
            Operational Model: {timeSlot.operational_model}
          </Text>
          <Button
            colorScheme='teal'
            size='sm'
            onClick={() => onSelect(timeSlot.id)}
          >
            Select Slot
          </Button>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default AvailabilityTimeSlotsCard;
