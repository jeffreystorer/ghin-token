import React from 'react';
import { get } from '@/components/common/utils';
import { Loading } from '@/components/fetchdata';
import { useFetchData } from '@/components/fetchdata/hooks';

export default function App() {
  const [loading] = useFetchData();

  if (loading) return <Loading />;
  const token = get('token');
  navigator.clipboard.writeText(token);

  return <h1>{token}</h1>;
}
