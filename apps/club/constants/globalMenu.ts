import { MenuItem } from '@megabrain/ui/components/Header/types';

const globalMenu: MenuItem[] = [
  {
    label: 'Team',
    href: '/team',
    children: [
      { label: 'Schedule', href: '/schedule' },
      { label: 'Members', href: '/members' },
    ],
  },
  {
    label: 'Project',
    href: '/project',
    children: [
      { label: 'Infrastructure', href: '/project/infrastructure' },
      { label: 'Apps 3.0', href: '/project/apps' },
      { label: '인제생', href: '/project/ijs' },
    ],
  },
  {
    label: 'Tech',
    href: '/tech',
    children: [
      { label: 'Waka Board', href: '/tech/waka' },
      { label: 'Git Board', href: '/tech/git' },
      { label: 'Server Health Check', href: '/tech/health-check' },
      { label: 'Codebase', href: '/tech/codebase' },
      { label: 'Member Blog Feed', href: '/tech/blog-feed' },
    ],
  },
  {
    label: 'Recruit',
    href: '/recruit',
  },
];

export default globalMenu;
