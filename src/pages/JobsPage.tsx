import { Alert, Box, Heading, Spinner, Text } from '@chakra-ui/react';
import GenericGrid from '../components/GenericGrid.tsx';
import CardContainer from '../components/CardContainer.tsx';
import JobCard from '../components/JobCard.tsx';
import useJob from '../hooks/useJob.ts';
import { useState } from 'react';
import JobResponse from '../entities/JobResponse.ts';
import JobDetailDrawer from '../components/JobDetailDrawer.tsx';

const JobsPage = () => {
  const { data, isLoading, error } = useJob(
    'c78b1fd1-bdf9-48f8-8f2a-b73c1e7b6d68'
  );

  const [selectedJob, setSelectedJob] = useState<JobResponse | null>(null);

  const handleSelectJob = (job: JobResponse) => {
    setSelectedJob(job);
  };

  const handleBill = (job: JobResponse, amount: number) => {
    // Update the prices object with the new amount
    const updatedJob = {
      ...job,
      payment_info: {
        ...job.payment_info,
        prices: {
          ...job.payment_info?.prices,
          order_value: amount,
          subtotal: amount - (job.payment_info?.prices?.shipping_fee || 0),
        },
        payment: {
          ...job.payment_info?.payment,
          value: amount,
        },
      },
    };

    // Log the updated job for debugging
    console.log(updatedJob);
  };

  if (isLoading) return <Spinner />;

  if (error) return <Alert>{error.message}</Alert>;

  return (
    <Box textAlign={'center'}>
      <Heading>Jobs Page</Heading>
      {data && (
        <Text fontSize='md' mt={2} mb={4}>
          Select a card to see the details
        </Text>
      )}
      <GenericGrid>
        <CardContainer>
          {data && (
            <JobCard
              job={data}
              onSelect={handleSelectJob}
              onBill={handleBill}
            />
          )}
        </CardContainer>
      </GenericGrid>

      <JobDetailDrawer
        job={selectedJob}
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </Box>
  );
};

export default JobsPage;
