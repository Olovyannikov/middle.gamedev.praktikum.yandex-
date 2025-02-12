import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Button } from '@mui/material';
import { SignOut, Spinner } from '@phosphor-icons/react';
import cn from 'clsx';

import { useAuth } from '@/shared/context/AuthContext';
import { useColorMode } from '@/shared/context/ColorModeProvider';
import { useIsDarkMode } from '@/shared/hooks/useIsDarkMode';
import { useLogout } from '@/shared/hooks/useLogout';
import { AppLink } from '@/shared/ui';

import s from './Header.module.scss';

type HeaderProps = DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;

export function Header({ className, ...props }: HeaderProps) {
    const { isAuth } = useAuth();
    const { logout, isLoading } = useLogout();
    const toggleColorMode = useColorMode();
    const isDarkMode = useIsDarkMode();

    return (
        <header>
            <nav className={cn(s.nav, isDarkMode && s.darkNav)}>
                <div className={s.colorModeToggle}>
                    <Button onClick={toggleColorMode} color='inherit' sx={{ gap: 1 }}>
                        {isDarkMode ? <Brightness4Icon /> : <Brightness7Icon />}
                        {isDarkMode ? 'Dark' : 'Light'} mode
                    </Button>
                </div>
                <ul className={cn(s.list, 'list-reset', className)} {...props}>
                    <li>
                        <AppLink to='/'>Main</AppLink>
                    </li>
                    {!isAuth && (
                        <>
                            <li>
                                <AppLink to='/sign-in'>Sign-In</AppLink>
                            </li>
                            <li>
                                <AppLink to='/sign-up'>Sign-Up</AppLink>
                            </li>
                        </>
                    )}
                    {isAuth && (
                        <li>
                            <AppLink to='/forum'>Forum</AppLink>
                        </li>
                    )}
                    <li>
                        <AppLink to='/game'>Game</AppLink>
                    </li>

                    <li>
                        <AppLink to='/me'>Profile</AppLink>
                    </li>
                    {isAuth && (
                        <li>
                            <button className={cn(s.logout, isDarkMode && s.darkLogout)} onClick={logout}>
                                {isLoading ? <Spinner /> : <SignOut />} LogOut
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}
