import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Players',
    link: '/pages/players',
    icon: {
      icon: 'person-outline',
      pack: 'eva',
    },
  },
  {
    title: 'Matchdays',
    link: '/pages/matchdays',
    icon: {
      icon: 'matchday',
      pack: 'custom-icons',
    },
  },
  {
    title: 'Clubs',
    link: '/pages/clubs',
    icon: {
      icon: 'stadium',
      pack: 'custom-icons',
    },
  },
];
