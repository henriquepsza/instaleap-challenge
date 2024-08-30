import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Box,
  Text,
} from '@chakra-ui/react';
import JobResponse from '../entities/JobResponse.ts';

interface Props {
  job: JobResponse | null;
  isOpen: boolean;
  onClose: () => void;
}

const JobDetailDrawer = ({ job, isOpen, onClose }: Props) => {
  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Job Details</DrawerHeader>
        <DrawerBody>
          {job && (
            <Box>
              <Text fontSize={'lg'}>Job Number: {job.job_number}</Text>
              <Text fontSize={'md'}>Client ID: {job.client_id}</Text>
              <Text fontSize={'md'}>
                Start Time: {new Date(job.start_time).toLocaleString()}
              </Text>
              <Text fontSize={'md'}>
                End Time: {new Date(job.end_time).toLocaleString()}
              </Text>
              <Text fontSize={'md'}>State: {job.state}</Text>
              <Text fontSize={'md'}>Store: {job.store.name}</Text>
              <Text fontSize={'md'}>Recipient: {job.recipient.name}</Text>
              <Text fontSize={'md'}>Total Items: {job.total_items}</Text>
            </Box>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default JobDetailDrawer;
