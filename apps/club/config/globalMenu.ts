import { MenuItem } from '@megabrain/ui/components/Header/types';

const globalMenu: MenuItem[] = [
  {
    label: 'Team',
    href: '/schedule',
    children: [
      { label: 'Schedule', href: '/schedule' },
      { label: 'Members', href: '/members' },
    ],
  },
  {
    label: 'Project',
    href: '/infrastructure',
    children: [
      { label: 'Infrastructure', href: '/infrastructure' },
      { label: 'Apps 3.0', href: '/apps' },
    ],
  },
  {
    label: 'Tech',
    href: '/effort-board',
    children: [
      { label: 'Effort Board', href: '/effort-board' },
      { label: 'Server Health Check', href: '/health-check' },
      { label: 'Codebase', href: '/codebase' },
      { label: 'Member Blog Feed', href: '/blog-feed' },
    ],
  },
  {
    label: 'Recruit',
    href: '/recruit',
  },
];

export default globalMenu;
