import { MenuItem } from '@megabrain/ui/components/Header/types';

const globalMenu: MenuItem[] = [
  {
    label: 'Team',
    href: '/',
    children: [
      { label: 'Schedule', href: '/schedule' },
      { label: 'Members', href: '/members' },
    ],
  },
  {
    label: 'Project',
    href: '/project',
  },
  {
    label: 'Tech',
    href: '/tech',
    children: [
      { label: 'Waka Board', href: '/waka' },
      { label: 'Git Board', href: '/git' },
      { label: 'Server Health Check', href: '/health-check' },
      { label: 'Codebase', href: '/codebase' },
      { label: 'Member Blog Feed', href: '/blog' },
    ],
  },
  {
    label: 'Recruit',
    href: '/recruit',
  },
];

export default globalMenu;
