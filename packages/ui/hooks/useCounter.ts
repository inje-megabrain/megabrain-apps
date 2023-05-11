import { useState } from 'react';

export const useCounter = () => useState<number>(0);

export default useCounter;
