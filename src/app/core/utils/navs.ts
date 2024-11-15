import { Nav } from '../interfaces/nav.interface';

export const navs: Nav[] = [
  {
    id: 'Home Page',
    name: 'Főoldal',
    icon: 'cottage',
    route: 'home',
  },
  {
    id: 'My profile',
    name: 'Saját profil',
    icon: 'manage_accounts',
    route: 'my_profile',
  },
  {
    id: 'Users',
    name: 'Felhasználók',
    icon: 'group',
    route: 'users',
  },
  {
    id: 'Eye practise',
    name: 'Szemtorna',
    icon: 'fitness_center',
    route: 'eye_practise',
  },
  {
    id: 'Top ten',
    name: 'Top 10-es lista',
    icon: 'emoji_events',
    route: 'top_ten',
  },
];
