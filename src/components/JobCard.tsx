import {
  Alert,
  Box,
  Card,
  CardBody,
  Heading,
  Text,
  VStack,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  HStack,
} from '@chakra-ui/react';
import JobResponse from '../entities/JobResponse.ts';
import { useState } from 'react';

interface Props {
  job: JobResponse;
  onSelect: (job: JobResponse) => void;
  onBill: (job: JobResponse, amount: number) => void; // New prop for billing action
}

const JobCard = ({ job, onSelect, onBill }: Props) => {
  if (job === null || job === undefined)
    return <Alert bg={'red'}>No job available</Alert>;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [billingAmount, setBillingAmount] = useState(
    job.payment_info?.prices.order_value || 0
  );

  const handleBilling = () => {
    onOpen();
  };

  const handleConfirmBilling = () => {
    onBill(job, billingAmount);

    onClose();
  };

  return (
    <Box>
      <Card>
        <CardBody>
          <VStack alignItems='start' spacing={3}>
            <Heading fontSize={'xl'}>{job.job_number}</Heading>
            <Text fontSize={'sm'}>Store: {job.store.name}</Text>
            <Text fontSize={'md'}>Recipient: {job.recipient.name}</Text>
            <Text fontSize={'sm'}>
              Start: {new Date(job.start_time).toLocaleString()}
            </Text>
            <Text fontSize={'sm'}>
              End: {new Date(job.end_time).toLocaleString()}
            </Text>
            <HStack>
              <Button colorScheme='blue' onClick={handleBilling}>
                Bill
              </Button>
              <Button colorScheme='blue' onClick={() => onSelect(job)}>
                Details
              </Button>
            </HStack>
          </VStack>
        </CardBody>
      </Card>

      {/* Billing Confirmation Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Billing</ModalHeader>
          <ModalBody>
            <Text>Enter the amount to bill:</Text>
            <Input
              type='number'
              value={billingAmount}
              onChange={e => setBillingAmount(parseFloat(e.target.value))}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='gray' onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='teal' ml={3} onClick={handleConfirmBilling}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default JobCard;
