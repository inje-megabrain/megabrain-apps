import { MenuItem } from '@megabrain/ui/components/Header/types';

const globalMenu: MenuItem[] = [
  {
    label: 'Team',
    href: '/',
    children: [
      { label: 'Schedule', href: '/schedule' },
      {
        label: 'Members',
        href: 'https://whispering-screw-164.notion.site/32d3a32b0961436391cddbd7227db3fc?v=fa34c187b3834b6e87384f009a250c8c&pvs=4',
      },
    ],
  },
  {
    label: 'Project',
    href: 'https://whispering-screw-164.notion.site/67cd60435043453e9ff68d87c746a70d?v=af4eb20d5a5348449a5c81a1fd56f78c&pvs=4',
  },
  {
    label: 'Tech',
    href: '/waka',
    children: [
      { label: 'Waka Board', href: '/waka' },
      { label: 'Server Health Check', href: '/health-check' },
    ],
  },
  {
    label: 'Recruit',
    href: 'https://whispering-screw-164.notion.site/33b0680d48dd4059ab62a2a4ca04187c?v=97328f23148e462e98433c429d912b4e&pvs=4',
  },
];

export default globalMenu;
