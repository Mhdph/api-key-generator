'use client';

import {signIn} from 'next-auth/react';
import {FC, useState} from 'react';
import Button from './Button';
import {toast} from './Toast';

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true);
      await signIn('google');
    } catch (error) {
      toast({
        title: 'Error signing in',
        message: 'Please try again later.',
        type: 'error',
      });
    }
  };

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  );
};

export default SignOutButton;
