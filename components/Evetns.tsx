'use client';

import {formatDateTime} from '@/helpers';
import {Box, List, ListItem, Text, VStack} from '@chakra-ui/react';
import {useEffect, useState} from 'react';

interface IEvent {
  ctime: number;
  event: string;
}

export const EventList = () => {
  const [events, setEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    const socket = new WebSocket('wss://test.dev-relabs.ru/event');

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = event => {
      const newEvent = JSON.parse(event.data);
      setEvents(prevEvents => [...prevEvents, newEvent]);
    };

    socket.onerror = error => {
      console.error('WebSocket error:', error);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <Box w='100%' padding={2} h='80%' overflowY='auto'>
      <List spacing={3}>
        {events.map(data => (
          <ListItem
            display='flex'
            flexDir='row'
            justifyContent='space-between'
            gap={5}
            borderBottom='1px solid grey'
            key={data.event}
            padding='0.5rem'>
            <Text> {formatDateTime(data.ctime)}</Text>
            <Text>{data.event}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
