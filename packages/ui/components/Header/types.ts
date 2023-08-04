export type MenuItem = { href: string; label: string; children?: MenuItem[] };

export interface HeaderProps {
  menuItems: MenuItem[];
  onHrefClick: (href: string) => void;
}
