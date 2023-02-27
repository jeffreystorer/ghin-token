import React, { useEffect, useState } from 'react';
import { useFetchToken } from '@/components/fetchdata/apis/hooks';
import { set } from '@/components/common/utils';

export default function useFetchData() {
  const [loading, setLoading] = useState(true);
  const [token, tokenLoading] = useFetchToken();

  useEffect(() => {
    if (!tokenLoading) {
      set('token', token.golfer_user.golfer_user_token);
      setLoading(false);
    }
  }, [tokenLoading]);

  return [loading];
}
