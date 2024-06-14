'use client';
import React, {memo, useState} from 'react';
import {Box, Flex, Icon, Text} from '@chakra-ui/react';
import {StarIcon} from '@chakra-ui/icons';

export const StarsSlider: React.FC = () => {
  const [rating, setRating] = useState<number | null>(87);

  return (
    <Flex align='center' mb={2}>
      {[1, 2, 3, 4, 5].map(value => (
        <Icon
          key={value}
          as={StarIcon}
          w={6}
          h={6}
          color={value <= (rating ?? 0) ? '#cd35b9' : 'gray.300'}
          cursor='pointer'
        />
      ))}
      <Text color='#877f7fd6' ml={2} fontSize='lg'>
        {rating ? rating : 'Нет оценок'}
      </Text>
    </Flex>
  );
};
