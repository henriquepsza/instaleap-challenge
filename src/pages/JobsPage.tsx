import { Alert, Box, Heading, Spinner, Text } from '@chakra-ui/react';
import GenericGrid from '../components/GenericGrid.tsx';
import CardContainer from '../components/CardContainer.tsx';
import JobCard from '../components/JobCard.tsx';
import useJob from '../hooks/useJob.ts';

const JobsPage = () => {
  const { data, isLoading, error } = useJob(
    'c78b1fd1-bdf9-48f8-8f2a-b73c1e7b6d68'
  );

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
        <CardContainer>{data && <JobCard job={data} />}</CardContainer>
      </GenericGrid>
    </Box>
  );
};

export default JobsPage;
