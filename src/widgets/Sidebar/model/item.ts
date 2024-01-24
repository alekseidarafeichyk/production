import AboutUsIcon from 'shared/assets/icons/about-us.svg'
import MainIcon from 'shared/assets/icons/main.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'

export interface SidebarItemType {
    path: string
    text: string
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

export const SidebarItems: SidebarItemType[] = [
    {
        text: 'Главная',
        path: '/',
        Icon: MainIcon,
    },
    {
        text: 'О нас',
        path: '/about',
        Icon: AboutUsIcon,
    },
    {
        text: 'Профиль',
        path: '/profile',
        Icon: ProfileIcon
    },
]
