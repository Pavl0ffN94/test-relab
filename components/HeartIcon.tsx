'use client';

import React, {useState} from 'react';
import {IconButton, Icon} from '@chakra-ui/react';
import {FaHeart} from 'react-icons/fa';

export const HeartIcon: React.FC = () => {
  const [isFilled, setIsFilled] = useState(false);

  const handleHeartClick = () => {
    setIsFilled(prev => !prev);
  };

  return (
    <IconButton
      fontSize={23}
      aria-label='Heart'
      icon={<Icon as={FaHeart} color={isFilled ? 'red.500' : 'gray.500'} />}
      onClick={handleHeartClick}
      variant='ghost'
    />
  );
};
