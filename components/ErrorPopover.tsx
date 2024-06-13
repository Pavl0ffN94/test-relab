'use client';
import {Popover, PopoverBody} from '@chakra-ui/react';
import {memo} from 'react';

export const ErrorPopoverImpl = ({errorMessage}: {errorMessage: string | undefined}) => {
  return (
    <Popover>
      <PopoverBody>
        <>{errorMessage}</>
      </PopoverBody>
    </Popover>
  );
};

export const ErrorPopover = memo(ErrorPopoverImpl);
