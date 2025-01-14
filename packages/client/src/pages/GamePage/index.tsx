import { Link } from 'react-router-dom';
import { Button, Container } from '@mui/material';

import { RootLayout } from '@/layouts/RootLayout';
import { Banner } from '@/shared/ui/Banner';
import { Game } from '@/widgets/Game';

import { DESCRIPTION, TITLE } from '../IndexPage/config';

import s from './GamePage.module.scss';

export default function GamePage() {
    return (
        <RootLayout hasHeader={false}>
            <Banner title={TITLE} description={DESCRIPTION} />
            <Container>
                <div className={s.gameNav}>
                    <Button variant='text' to='/' component={Link}>
                        Return to Main Page
                    </Button>
                </div>
                <Game />
            </Container>
        </RootLayout>
    );
}
