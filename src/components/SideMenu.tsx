import { Box, Button, Heading, List, ListItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface SideMenuOptions {
  name: string;
  navigation: string;
}

const SideMenu = () => {
  const menuOptions: SideMenuOptions[] = [
    {
      name: 'Check Availability',
      navigation: 'check-availability',
    },
    {
      name: 'Jobs',
      navigation: 'jobs',
    },
  ];
  return (
    <Box>
      <Heading fontSize={'2xl'} marginBottom={3}>
        Side menu
      </Heading>
      <List>
        {menuOptions.map((option, index) => (
          <ListItem key={index} paddingY={2}>
            <Link to={`/${option.navigation}`}>
              <Button variant={'link'}>{option.name}</Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideMenu;
