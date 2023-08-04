import dynamic from 'next/dynamic';
import type { Props } from 'react-apexcharts';

export const ApexChart = dynamic<Props>(() => import('react-apexcharts'), { ssr: false });
