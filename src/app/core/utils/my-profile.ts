import { MyProfileInterface } from '../interfaces/my-profile.interface';

export const myProfile: MyProfileInterface[] = [
  {
    id: 'My resoults',
    name: 'Eredményeim',
    icon: 'data_thresholding',
    description: 'Eddig elért pontszámaim',
    route: 'my_resoults',
  },
  {
    id: 'My badges',
    name: 'Jutalmak',
    icon: 'verified',
    description: 'Megszerzett plecsnik',
    route: 'my_badges',
  },
  {
    id: 'User settings',
    name: 'Avatar szerkesztése',
    icon: 'settings_account_box',
    description: 'Személyes beállítások',
    route: 'user_settings',
  },
];
