import { HelloWorld, WelcomeBlock } from '@megabrain/ui';
import { sayHello } from '@megabrain/core';
//import { styled } from '@megabrain/ui/libs'; // UI Libs
//import { Clock } from '@megabrain/ui/icons'; // Icon

export default function Home() {
  sayHello();

  return (
    <>
      <HelloWorld />
      <WelcomeBlock />
    </>
  );
}
