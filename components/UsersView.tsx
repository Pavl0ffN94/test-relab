'use client';

import React, {useEffect, useState} from 'react';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Spinner,
  Box,
  Button,
  IconButton,
  Flex,
  Text,
  HStack,
  Heading,
} from '@chakra-ui/react';
import {DeleteIcon} from '@chakra-ui/icons';
import {useGetUsersQuery} from '@/store';

import {IUser} from '@/types';
import {formatDateTime} from '@/helpers';
import {PageButtons} from './PageButtons';

export const UsersView: React.FC = () => {
  const [page, setPage] = useState(1);
  const limit = 5;
  const offset = (page - 1) * limit;

  const {data, error, isLoading} = useGetUsersQuery({limit, offset});
  const [localData, setLocalData] = useState<IUser[]>([]);

  useEffect(() => {
    if (data?.items) {
      setLocalData(data.items);
    }
  }, [data]);

  const handleDelete = (id: number) => {
    setLocalData(prevData => prevData.filter(user => user.id !== id));
  };

  if (isLoading) return <Spinner />;
  if (error) return <div>Произошла ошибка загрузки</div>;

  const totalPages = Math.ceil(data.total / limit);

  return (
    <Box>
      <Heading as='h2' size='lg' mb={4}>
        Список пользователей
      </Heading>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Имя</Th>
            <Th>Роль</Th>
            <Th>Время создания</Th>
            <Th>Действия</Th>
          </Tr>
        </Thead>
        <Tbody>
          {localData.map(user => (
            <Tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.name}</Td>
              <Td>{user.role}</Td>
              <Td>{formatDateTime(user.ctime)}</Td>
              <Td>
                <IconButton
                  aria-label='Delete User'
                  icon={<DeleteIcon />}
                  size='sm'
                  colorScheme='red'
                  onClick={() => handleDelete(user.id)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Flex mt={4} justify='center'>
        <PageButtons page={page} totalPages={totalPages} setPage={setPage} />
      </Flex>
    </Box>
  );
};
