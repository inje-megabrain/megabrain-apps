import { backend } from '@megabrain/core';
import { Button } from '@megabrain/ui'; // UI Libs
//import { Clock } from '@megabrain/ui/icons'; // Icon

export default function Home() {
  return (
    <Button onClick={() => backend.systems.ping('hello').then(console.log)}>API 보내보기</Button>
  );
}
