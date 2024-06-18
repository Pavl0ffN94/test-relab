'use client';
import {Tabs, TabList, Tab, TabIndicator} from '@chakra-ui/react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect, useState} from 'react';

export const Navigation = () => {
  const pathname = usePathname();
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    switch (pathname) {
      case '/':
        setSelectedTab(0);
        break;
      case '/login':
        setSelectedTab(1);
        break;
      case '/shop':
        setSelectedTab(2);
        break;
      default:
        setSelectedTab(0);
    }
  }, [pathname]);

  const handleTabChange = index => {
    setSelectedTab(index);
  };

  return (
    <Tabs
      position='relative'
      size='md'
      variant='enclosed'
      index={selectedTab}
      onChange={handleTabChange}>
      <TabList>
        <Tab>
          <Link href='/'>Главная</Link>
        </Tab>
        <Tab>
          <Link href='/login'>Войти</Link>
        </Tab>
        <Tab>
          <Link href='/shop'>Магазин</Link>
        </Tab>
      </TabList>
      <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='3px' />
    </Tabs>
  );
};
