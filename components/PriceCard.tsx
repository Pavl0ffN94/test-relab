import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Image,
  Text,
  Tag,
  VStack,
  HStack,
} from '@chakra-ui/react';
import {FaRubleSign} from 'react-icons/fa';

import React from 'react';
import {StarsSlider} from './StarsSlider';
import {HeartIcon} from './HeartIcon';

export const PriceCard: React.FC = () => {
  return (
    <Card title='Быстрый просмотр' w='xs' p={2}>
      <CardBody display='flex' flexDir='column' gap={2}>
        <Box pos='relative' width='100%' h='50%'>
          <Image
            objectFit='fill'
            src='https://sohocase.ru/image/catalog/Xioami/iphone/iphone12promax.jpg'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Tag
            pos='absolute'
            left='0%'
            bottom='-5%'
            borderRadius={12}
            size='xs'
            fontSize='.8rem'
            bg='#d991d38a'
            w='17%'
            p={1}
            color='#e92626b3'>
            -14%
          </Tag>
        </Box>
        <Stack mt='6' spacing='3'>
          <HStack>
            <Heading size='md'>86 956</Heading>
            <Text as='del'> 99 990</Text>
          </HStack>
          <HStack color='#cd35b9'>
            <Text fontSize='lg' fontWeight='600'>
              85 251
            </Text>
            <FaRubleSign />
          </HStack>
          <Text as='abbr' fontSize={16} color='#877f7fd6'>
            Apple/Смартфон iPhone 12 Pro 128GB/6.1/2532x1170/OLED/128 ГБ
          </Text>
        </Stack>
        <StarsSlider />
        <Box
          p={2}
          w='50%'
          borderRadius={25}
          fontSize='lg'
          fontWeight='600'
          color='#271a1a'
          bg='linear-gradient(90deg, rgba(15,180,62,0.7791491596638656) 6%, rgba(224,255,0,1) 100%)'>
          РАССРОЧКА 0-0-6
        </Box>
        <HStack gap={5}>
          <Button _hover={{}} borderRadius={5} bg='#cd35b9' color='#fff'>
            В корзину
          </Button>
          <HeartIcon />
        </HStack>
      </CardBody>
    </Card>
  );
};
