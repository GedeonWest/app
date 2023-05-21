import React from 'react'
import Button from './Button'
import { useRouter } from 'next/router';

export default function GoBackButton({children}) {
  const router = useRouter();

  return (
    <Button outline onClick={() => router.back()} style={{marginTop: '30px'}}>Previous page</Button>
  )
}
