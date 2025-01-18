import Messages from '@/components/Messages/Messages';
import { getUser } from '@/components/Sessions';
import React from 'react';


export default async function Messagess() {
  const session = await getUser();
  return (
     <Messages session={session}/>
  );
};

