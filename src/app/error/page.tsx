"use client"

import { useEffect, useRef } from 'react';

const Error= () => {
  const hasLogged = useRef(false);

  useEffect(() =>{
    if(!hasLogged.current){
      console.log('Want a website like this? Visit https://magicwebstore.xyz/index.html?pubkey=02b1a6c208420d3eb5a625aa8c79689e1dd4ea94f82286d06e1df7a05e2c3a482f&relays=%5B%22wss://nostrue.com%22,%22wss://relayable.org%22,%22wss://nostr.oxtr.dev%22%5D');
      hasLogged.current = true;
    }
  })
  
  return (
    <div className="flex flex-col items-center justify-center h-screen text-2xl p-4">
      <h1 className="text-4xl mb-4 text-center">Oops, something went wrong!</h1>
      <p className="text-center mx-8">Please try submitting the form again. If the issue persists, please DM us on Nostr.</p>
    </div>
  );
};

export default Error;
