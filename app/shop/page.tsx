import {PriceCard} from '@/components/PriceCard';
import {Grid, GridItem} from '@chakra-ui/react';
import Link from 'next/link';

export default function Shop() {
  return (
    <Grid templateColumns='repeat(4, 1fr)' templateRows='repeat(2, 1fr)' gap={3} p={3}>
      <GridItem>
        <Link href='#'>
          <PriceCard />
        </Link>
      </GridItem>
      <GridItem>
        <Link href='#'>
          <PriceCard />
        </Link>
      </GridItem>
      <GridItem>
        <Link href='#'>
          <PriceCard />
        </Link>
      </GridItem>
      <GridItem>
        <Link href='#'>
          <PriceCard />
        </Link>
      </GridItem>
      <GridItem>
        <Link href='#'>
          <PriceCard />
        </Link>
      </GridItem>
      <GridItem>
        <Link href='#'>
          <PriceCard />
        </Link>
      </GridItem>
      <GridItem>
        <Link href='#'>
          <PriceCard />
        </Link>
      </GridItem>
      <GridItem>
        <Link href='#'>
          <PriceCard />
        </Link>
      </GridItem>
    </Grid>
  );
}
