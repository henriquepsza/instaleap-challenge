import { Box, Button, VStack } from '@chakra-ui/react';

interface Props {
  onSubmit: () => void;
}

const AvailabilityButton = ({ onSubmit }: Props) => {
  return (
    <Box marginTop={3}>
      <VStack spacing={4}>
        <Button colorScheme='blue' onClick={onSubmit}>
          Check availability
        </Button>
      </VStack>
    </Box>
  );
};

export default AvailabilityButton;
