import { useRef } from 'react';
import {
  Card,
  CardBody,
  Heading,
  Text,
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  VStack,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { AvailabilityTimeSlot } from '../entities/AvailabilityResponse.ts';

interface Props {
  timeSlot: AvailabilityTimeSlot;
  onSelect: (id: string) => void; // Callback function to handle slot selection
}

const AvailabilityTimeSlotsCard = ({ timeSlot, onSelect }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  const handleConfirm = () => {
    onClose();
    onSelect(timeSlot.id);
  };

  return (
    <>
      <Card maxWidth={'250px'}>
        <CardBody>
          <Heading fontSize={'xl'}>Store: {timeSlot.store.name}</Heading>
          <VStack mt={3} mb={3} alignItems={'start'}>
            <Text>From: {format(new Date(timeSlot.from), 'PPpp')}</Text>
            <Text>To: {format(new Date(timeSlot.to), 'PPpp')}</Text>
          </VStack>

          <Button colorScheme='teal' size='sm' onClick={onOpen}>
            Select Slot
          </Button>
        </CardBody>
      </Card>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Confirm Slot Selection
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to select this time slot?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='teal' onClick={handleConfirm} ml={3}>
                Confirm
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default AvailabilityTimeSlotsCard;
