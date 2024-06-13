'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {Input, Button, Box} from '@chakra-ui/react';
import {ModalError} from '../modalError';
import Link from 'next/link';
import {useForm} from 'react-hook-form';
import {ErrorPopover} from './ErrorPopover';

export const SignInForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async data => {
    data.password = data.password.replace(/\s+/g, '');
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Имитация запроса
    console.log(data);
    setLoading(false);
    router.push('/');
  };

  return (
    <>
      <form style={{opacity: loading ? 0.3 : 1}} onSubmit={handleSubmit(onSubmit)}>
        <Box
          display='flex'
          flexDir='column'
          alignItems='center'
          justifyContent='center'
          gap={3}>
          <Input
            type='email'
            name='email'
            placeholder='Email'
            size='md'
            variant='outline'
            _hover={{}}
            htmlSize={35}
            width='auto'
            isRequired={true}
            {...register('email', {
              required: 'Поле обязательно',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Введите правильный формат email',
              },
              minLength: {
                value: 5,
                message: 'Не менее 5 символов',
              },
            })}
          />
          {errors?.email && errors.email.message && (
            <ErrorPopover errorMessage={errors.email.message.toString()} />
          )}
          <Input
            type='password'
            name='password'
            htmlSize={35}
            width='auto'
            placeholder='Password'
            size='md'
            variant='outline'
            _hover={{}}
            isRequired={true}
            {...register('password', {
              required: 'Поле обязательно',
              minLength: {
                value: 8,
                message: 'Не менее 8 символов',
              },
              pattern: {
                value: /(?=.*[A-Z])/,
                message: 'Должна присутствовать одна заглавная латинская буква',
              },
            })}
          />
          {errors?.password && errors.password.message && (
            <ErrorPopover errorMessage={errors.password.message.toString()} />
          )}
          <Button
            disabled={loading}
            type='submit'
            _hover={{}}
            colorScheme='cyan'
            variant='outline'
            fontWeight='500'
            size='md'
            width='100%'
            padding='1rem'>
            Войти
          </Button>
          {loading && <div className='loader'>Loading...</div>}
        </Box>
      </form>
    </>
  );
};
