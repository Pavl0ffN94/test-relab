import {EventList} from '@/components/Evetns';

import {Box, Text} from '@chakra-ui/react';

export default function Home() {
  return (
    <main>
      <Box display='flex' height='90vh' width='100vw' flexDir='column' overflow='hidden'>
        <Box display='flex' flexDir='row' width='100%' gap={5} justifyContent='center'>
          <Box padding='1rem' w='50%'>
            <Text>Первый столбец: здесь может быть другой контент</Text>
          </Box>
          <Box padding='1rem' h='100vh' w='50%'>
            <Text>Список событий:</Text>
            <EventList />
          </Box>
        </Box>
      </Box>
    </main>
  );
}
