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

const JobsPage = () => {
  const { data: jobs, isLoading, error } = useJob();

  const [selectedJob, setSelectedJob] = useState<JobResponse | null>(null);
  const { mutate: updateJob } = useUpdateJob();
  const toast = useToast();

  const handleSelectJob = (job: JobResponse) => {
    setSelectedJob(job);
  };

  const handleBill = (job: JobResponse, amount: number) => {
    // Atualiza o objeto de preços com o novo valor
    const updatedJob: UpdateJobRequest = {
      prices: {
        subtotal: amount - (job.payment_info?.prices?.shipping_fee || 0),
        shipping_fee: job.payment_info?.prices?.shipping_fee || 10, // Default para 10 se não existir
        discounts: job.payment_info?.prices?.discounts || 0,
        taxes: job.payment_info?.prices?.taxes || 0,
        order_value: amount,
        attributes: job.payment_info?.prices?.attributes || [
          {
            name: 'Base Price',
            type: 'ORDER_VALUE',
            value: amount - (job.payment_info?.prices?.shipping_fee || 10),
          },
        ],
      },
      payment: {
        payment_status: 'IN_PROGRESS',
        method: 'PAYMENT_TERMINAL',
        id: job.payment_info?.payment?.id || 'payment_12345',
        reference: job.payment_info?.payment?.reference || 'VISA *3939',
        value: amount,
        payment_status_details:
          job.payment_info?.payment?.payment_status_details ||
          'Payment is currently being processed',
        method_details:
          job.payment_info?.payment?.method_details ||
          'Payment using credit card',
        blocking_policy:
          job.payment_info?.payment?.blocking_policy || 'CHECKOUT',
      },
      invoice: {
        reference: job.payment_info?.invoice?.reference || 'INV-2024-12345',
        attachments: job.payment_info?.invoice?.attachments || [],
      },
    };

    updateJob(
      { id: job.id, request: updatedJob },
      {
        onSuccess: data => {
          console.log(data);
          toast({
            title: 'Billing processed.',
            description: `Billing of $${amount.toFixed(2)} was processed successfully.`,
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
        },
        onError: err => {
          console.log(err);
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
  };

  if (isLoading) return <Spinner />;

  if (error) return <Alert>{error.message}</Alert>;

  return (
    <Box textAlign={'center'}>
      <Heading>Jobs Page</Heading>
      {jobs && (
        <Text fontSize='md' mt={2} mb={4}>
          Select a card to see the details
        </Text>
      )}
      <GenericGrid>
        {jobs &&
          jobs.map((job, index) => (
            <CardContainer key={index}>
              <JobCard
                job={job}
                onSelect={handleSelectJob}
                onBill={handleBill}
              />
            </CardContainer>
          ))}
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
