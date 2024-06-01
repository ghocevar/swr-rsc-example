'use client';

import useSWR from 'swr';
import { getPokemon } from './data';

// let renderCounter = 0;

export function Pokemon() {
  const { data } = useSWR('pikachu', getPokemon);

  // ++renderCounter;

  // As we always provide the Pokemon in the parent
  // component via `fallback`, there's no need to
  // handle the loading state here.
  // To make TypeScript happy, let's add a guard.
  if (
    !data
    // || renderCounter < 5
  )
    throw new Error('Data must be available.');

  return (
    <div>
      <img src={data.image} height={200} alt={data.name} />
      <h2>I'm {data.name}</h2>
    </div>
  );
}
