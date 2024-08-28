import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  HStack,
} from '@chakra-ui/react';

// Interface para os campos necessários, conforme a documentação da API.
interface AvailabilityForm {
  currency_code: string;
  start: string;
  end: string;
  slot_size: number;
  origin_name: string;
  origin_address: string;
  origin_latitude: number;
  origin_longitude: number;
  destination_name: string;
  destination_address: string;
  destination_latitude: number;
  destination_longitude: number;
}

const AvailabilityTimeSlotsForm = () => {
  // Estado para armazenar os valores do formulário
  const [formValues, setFormValues] = useState<AvailabilityForm>({
    currency_code: '',
    start: '',
    end: '',
    slot_size: 15,
    origin_name: '',
    origin_address: '',
    origin_latitude: 0,
    origin_longitude: 0,
    destination_name: '',
    destination_address: '',
    destination_latitude: 0,
    destination_longitude: 0,
  });

  // Função para lidar com as mudanças nos campos de texto
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [id]: value,
    }));
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = () => {
    console.log('Form data:', formValues);
    // Aqui deve-se adicionar a lógica para enviar os dados para a API ou processá-los conforme necessário.
  };

  return (
    <Box p={4} borderWidth={1} borderRadius='lg' boxShadow='lg' marginTop={3}>
      <VStack spacing={4}>
        {/*<FormControl id='currency_code' isRequired>*/}
        {/*    <FormLabel>Currency Code</FormLabel>*/}
        {/*    <Input*/}
        {/*        id='currency_code'*/}
        {/*        placeholder='Enter currency code'*/}
        {/*        value={formValues.currency_code}*/}
        {/*        onChange={handleChange}*/}
        {/*    />*/}
        {/*</FormControl>*/}
        <HStack spacing={4} width='full'>
          <FormControl id='start' isRequired>
            <FormLabel>Start Date</FormLabel>
            <Input
              type='datetime-local'
              id='start'
              value={formValues.start}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id='end' isRequired>
            <FormLabel>End Date</FormLabel>
            <Input
              type='datetime-local'
              id='end'
              value={formValues.end}
              onChange={handleChange}
            />
          </FormControl>
        </HStack>
        <FormControl id='slot_size' isRequired>
          <FormLabel>Slot Size (minutes)</FormLabel>
          <Select
            id='slot_size'
            value={formValues.slot_size}
            onChange={handleChange}
          >
            <option value={15}>15</option>
            <option value={30}>30</option>
            <option value={45}>45</option>
            <option value={60}>60</option>
          </Select>
        </FormControl>
        <FormControl id='origin_name' isRequired>
          <FormLabel>Origin Name</FormLabel>
          <Input
            id='origin_name'
            placeholder='Enter origin name'
            value={formValues.origin_name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id='origin_address' isRequired>
          <FormLabel>Origin Address</FormLabel>
          <Input
            id='origin_address'
            placeholder='Enter origin address'
            value={formValues.origin_address}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id='destination_name' isRequired>
          <FormLabel>Destination Name</FormLabel>
          <Input
            id='destination_name'
            placeholder='Enter destination name'
            value={formValues.destination_name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id='destination_address' isRequired>
          <FormLabel>Destination Address</FormLabel>
          <Input
            id='destination_address'
            placeholder='Enter destination address'
            value={formValues.destination_address}
            onChange={handleChange}
          />
        </FormControl>
        <Button colorScheme='blue' onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default AvailabilityTimeSlotsForm;
