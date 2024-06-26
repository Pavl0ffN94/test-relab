'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {Input, Button, Box, Spinner} from '@chakra-ui/react';
import {useForm} from 'react-hook-form';
import {ErrorPopover} from './ErrorPopover';
import {SignInFormData} from '@/types';

export const SignInForm: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: {errors, isSubmitting},
  } = useForm({
    mode: 'onBlur',
  });

  const validatePassword = (value: string) => {
    value.trim().replace(/\s+/g, '');
    if (/\s/g.test(value)) {
      return 'Не должно содержать пробелов между символами';
    }
    if (value.length < 8) {
      return 'Не менее 8 символов';
    }
    if (!/(?=.*[A-Z])/.test(value)) {
      return 'Должна присутствовать одна заглавная латинская буква';
    }
    return true;
  };

  const onSubmit = async () => {
    const {email, password} = getValues();
    const gapCleaning = password.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Password:', `'${password}'`);
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
              validate: validatePassword,
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
          {loading && <Spinner />}
        </Box>
      </form>
    </>
  );
};
