import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Box,
  Text,
  VStack,
  Stack,
  Divider,
} from '@chakra-ui/react';
import JobResponse from '../entities/JobResponse.ts';

interface Props {
  job: JobResponse | null;
  isOpen: boolean;
  onClose: () => void;
}

const JobDetailDrawer = ({ job, isOpen, onClose }: Props) => {
  if (!job) return null;

  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose} size={'md'}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Job Details</DrawerHeader>
        <DrawerBody>
          <VStack align='start' spacing={4}>
            <Box>
              <Stack spacing={2}>
                <Text fontSize={'lg'}>
                  <Text as='span' fontWeight='bold'>
                    Job Number:
                  </Text>{' '}
                  {job.job_number}
                </Text>
                <Text fontSize={'md'}>Client: {job.client_id}</Text>
                <Text fontSize={'md'}>
                  Start Time: {new Date(job.start_time).toLocaleString()}
                </Text>
                <Text fontSize={'md'}>
                  End Time: {new Date(job.end_time).toLocaleString()}
                </Text>
              </Stack>
            </Box>
            <Divider />
            <Box>
              <Stack spacing={2}>
                <Text fontSize={'lg'} fontWeight={'bold'}>
                  Origin
                </Text>
                <Text fontSize={'md'}>Name: {job.origin.name}</Text>
                <Text fontSize={'md'}>Address: {job.origin.address}</Text>
                {job.origin.address_two && (
                  <Text fontSize={'md'}>
                    Address 2: {job.origin.address_two}
                  </Text>
                )}
                <Text fontSize={'md'}>City: {job.origin.city}</Text>
                <Text fontSize={'md'}>Country: {job.origin.country}</Text>
                {job.origin.description && (
                  <Text fontSize={'md'}>
                    Description: {job.origin.description}
                  </Text>
                )}
                <Text fontSize={'md'}>
                  Coordinates: {job.origin.coordinates.lat},{' '}
                  {job.origin.coordinates.lng}
                </Text>
              </Stack>
            </Box>
            <Divider />
            <Box>
              <Stack spacing={2}>
                <Text fontSize={'lg'} fontWeight={'bold'}>
                  Destination
                </Text>
                <Text fontSize={'md'}>Name: {job.destination.name}</Text>
                <Text fontSize={'md'}>Address: {job.destination.address}</Text>
                {job.destination.address_two && (
                  <Text fontSize={'md'}>
                    Address 2: {job.destination.address_two}
                  </Text>
                )}
                <Text fontSize={'md'}>City: {job.destination.city}</Text>
                <Text fontSize={'md'}>Country: {job.destination.country}</Text>
                {job.destination.description && (
                  <Text fontSize={'md'}>
                    Description: {job.destination.description}
                  </Text>
                )}
                <Text fontSize={'md'}>
                  Coordinates: {job.destination.coordinates.lat},{' '}
                  {job.destination.coordinates.lng}
                </Text>
              </Stack>
            </Box>
            <Divider />
            {job.items.length > 0 && (
              <Box>
                <Stack spacing={2}>
                  <Text fontSize={'lg'} fontWeight={'bold'}>
                    Items
                  </Text>
                  {job.items.map((item, index) => (
                    <Box key={index} mb={3}>
                      <Text fontSize={'md'}>Name: {item.name}</Text>
                      <Text fontSize={'md'}>Quantity: {item.quantity}</Text>
                      <Text fontSize={'md'}>
                        Price: {item.presentation.price.amount}{' '}
                        {item.presentation.price.currency_code}
                      </Text>
                      <Text fontSize={'md'}>
                        Category: {item.attributes.category}
                      </Text>
                      <Text fontSize={'md'}>EAN: {item.attributes.ean}</Text>
                    </Box>
                  ))}
                </Stack>
              </Box>
            )}
            <Divider />
            {job.payment_info && (
              <Box>
                <Stack spacing={2}>
                  <Text fontSize={'lg'} fontWeight={'bold'}>
                    Payment Information
                  </Text>
                  <Text fontSize={'md'}>
                    Method: {job.payment_info.payment.method}
                  </Text>
                  <Text fontSize={'md'}>
                    Status: {job.payment_info.payment.payment_status}
                  </Text>
                  <Text fontSize={'md'}>
                    Details: {job.payment_info.payment.payment_status_details}
                  </Text>
                  <Text fontSize={'md'}>
                    Reference: {job.payment_info.payment.reference}
                  </Text>
                  <Text fontSize={'md'}>
                    Amount: {job.payment_info.payment.value}{' '}
                    {job.payment_info.currency_code}
                  </Text>
                  {job.payment_info.invoice?.reference && (
                    <Text fontSize={'md'}>
                      Invoice Reference: {job.payment_info.invoice.reference}
                    </Text>
                  )}
                  <Divider />
                  <Text fontSize={'lg'} fontWeight={'bold'}>
                    Price Breakdown
                  </Text>
                  <Text fontSize={'md'}>
                    Order Value: {job.payment_info.prices.order_value}{' '}
                    {job.payment_info.currency_code}
                  </Text>
                  <Text fontSize={'md'}>
                    Subtotal: {job.payment_info.prices.subtotal}{' '}
                    {job.payment_info.currency_code}
                  </Text>
                  <Text fontSize={'md'}>
                    Shipping Fee: {job.payment_info.prices.shipping_fee}{' '}
                    {job.payment_info.currency_code}
                  </Text>
                  <Text fontSize={'md'}>
                    Taxes: {job.payment_info.prices.taxes}{' '}
                    {job.payment_info.currency_code}
                  </Text>
                  <Text fontSize={'md'}>
                    Discounts: {job.payment_info.prices.discounts}{' '}
                    {job.payment_info.currency_code}
                  </Text>
                </Stack>
              </Box>
            )}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default JobDetailDrawer;
