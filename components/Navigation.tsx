import {Tab, TabIndicator, TabList, Tabs} from '@chakra-ui/react';
import Link from 'next/link';

export const Navigation = () => {
  return (
    <Tabs position='relative' size='md' variant='enclosed'>
      <TabList>
        <Tab>
          <Link href='/'>Главная</Link>
        </Tab>
        <Tab>
          <Link href='/login'>Войти</Link>
        </Tab>
      </TabList>
      <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='3px' />
    </Tabs>
  );
};
