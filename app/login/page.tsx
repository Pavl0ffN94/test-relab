import Link from 'next/link';
import {Box, Stack, Text} from '@chakra-ui/react';
import {SignInForm} from '@/components/SignInForm';

export default async function Signin() {
  return (
    <Box
      margin='0 auto'
      width='50vw'
      height='50vh'
      display='flex'
      flexDir='column'
      alignItems='center'
      justifyContent='center'>
      <Text fontSize='6xl'>Авторизация</Text>
      <SignInForm />
    </Box>
  );
}
