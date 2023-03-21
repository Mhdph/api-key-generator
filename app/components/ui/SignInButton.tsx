'use clinet';

import React from 'react';
import {signIn} from 'next-auth/react';
import Button from './Button';

type SignInButtonProps = {};

const SignInButton: React.FC<SignInButtonProps> = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true);
      await signIn('google');
    } catch (error) {
      // toast({
      //   title: 'Error signing in',
      //   message: 'Please try again later.',
      //   type: 'error',
      // });
    }
  };

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  );
};
export default SignInButton;
