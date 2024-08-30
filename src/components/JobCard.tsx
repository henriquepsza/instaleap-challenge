import {
  Alert,
  Box,
  Card,
  CardBody,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import JobResponse from '../entities/JobResponse.ts';

interface Props {
  job: JobResponse;
}

const JobCard = ({ job }: Props) => {
  if (job === null || job === undefined)
    return <Alert bg={'red'}>No job available</Alert>;

  return (
    <Box>
      <Card>
        <CardBody>
          <VStack align='start' spacing={3}>
            <Heading fontSize={'xl'}>{job.job_number}</Heading>
            <Text fontSize={'sm'}>Store: {job.store.name}</Text>
            <Text fontSize={'md'}>Recipient: {job.recipient.name}</Text>
            <Text fontSize={'sm'}>
              Start: {new Date(job.start_time).toLocaleString()}
            </Text>
            <Text fontSize={'sm'}>
              End: {new Date(job.end_time).toLocaleString()}
            </Text>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default JobCard;
