import { Pokemon } from './pokemon';

import { SWRConfig } from 'swr';
import { getPokemon } from './data';
import { Suspense } from 'react';

export default function Page() {
  return (
    <SWRConfig
      value={{
        fallback: {
          // Note that there is no `await` here,
          // so it only blocks rendering of components that
          // actually rely on this data.
          pikachu: getPokemon('pikachu'),
        },
      }}
    >
      <main>
        <h1>Pokemon Info</h1>
        {/* You can have a Suspense boundary here for the loading state */}
        <Suspense fallback={<div>Loading...</div>}>
          <Pokemon />
        </Suspense>
      </main>
    </SWRConfig>
  );
}
