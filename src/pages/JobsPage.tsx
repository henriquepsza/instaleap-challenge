import { Alert, Box, Heading, Spinner, Text, useToast } from '@chakra-ui/react';
import GenericGrid from '../components/GenericGrid.tsx';
import CardContainer from '../components/CardContainer.tsx';
import JobCard from '../components/JobCard.tsx';
import useJob from '../hooks/useJob.ts';
import { useState } from 'react';
import JobResponse from '../entities/JobResponse.ts';
import JobDetailDrawer from '../components/JobDetailDrawer.tsx';
import useUpdateJob from '../hooks/useUpdateJob.ts';
import UpdateJobRequest from '../entities/UpdateJobRequest.ts';
import JSONServerClient from '../services/api-client-json-server.ts';

const jobIdClient = new JSONServerClient<null, { id: string }>('jobIds');

const JobsPage = () => {
  const { data, isLoading, error } = useJob(
    'c78b1fd1-bdf9-48f8-8f2a-b73c1e7b6d68'
  );

  jobIdClient.getAll().then(data => console.log('JOBS: ', data));

  const [selectedJob, setSelectedJob] = useState<JobResponse | null>(null);
  const { mutate: updateJob } = useUpdateJob();
  const toast = useToast();

  const handleSelectJob = (job: JobResponse) => {
    setSelectedJob(job);
  };

  const handleBill = (job: JobResponse, amount: number) => {
    // Update the prices object with the new amount
    const updatedJob: UpdateJobRequest = {
      prices: {
        subtotal: amount - (job.payment_info?.prices?.shipping_fee || 0),
        shipping_fee: job.payment_info?.prices?.shipping_fee || 0,
        discounts: job.payment_info?.prices?.discounts || 0,
        taxes: job.payment_info?.prices?.taxes || 0,
        order_value: amount,
        attributes: job.payment_info?.prices?.attributes || [],
      },
      payment: {
        payment_status: job.payment_info?.payment?.payment_status || '',
        method: job.payment_info?.payment?.method || '',
        id: job.payment_info?.payment?.id || '',
        reference: job.payment_info?.payment?.reference || '',
        value: amount,
        payment_status_details:
          job.payment_info?.payment?.payment_status_details || '',
        method_details: job.payment_info?.payment?.method_details || '',
        blocking_policy: job.payment_info?.payment?.blocking_policy || '',
      },
      invoice: {
        reference: job.payment_info?.invoice?.reference || '',
        attachments: job.payment_info?.invoice?.attachments || [],
      },
    };

    updateJob(
      { id: job.id, request: updatedJob },
      {
        onSuccess: data => {
          // console.log(data);
          toast({
            title: 'Billing processed.',
            description: `Billing of $${data.payment.value.toFixed(2)} was processed successfully.`,
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
      }
    );

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
