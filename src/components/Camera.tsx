import React from 'react'
// import vision from '../assets/vision.jpg';
import camera from '../assets/eye.jpg';


import { createStyles, Container, Title, Text, Button, rem} from '@mantine/core';
import { Link } from 'react-router-dom';

    const useStyles = createStyles((theme) => ({
        root: {
            backgroundColor: 'black',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(${camera})`,
            paddingTop: `calc(${theme.spacing.xl} * 3)`,
            paddingBottom: `calc(${theme.spacing.xl} * 3)`,

        },

        inner: {
            display: 'flex',
            justifyContent: 'space-between',

            [theme.fn.smallerThan('md')]: {
                flexDirection: 'column',
            },
        },

        image: {
            [theme.fn.smallerThan('md')]: {
                display: 'none',
            },
        },

        content: {
            paddingTop: `calc(${theme.spacing.xl} * 2)`,
            paddingBottom: `calc(${theme.spacing.xl} * 2)`,
            marginRight: `calc(${theme.spacing.xl} * 3)`,

            [theme.fn.smallerThan('md')]: {
                marginRight: 0,
            },
        },

        title: {
            color: theme.white,
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
            lineHeight: 1.05,
            maxWidth: rem(500),
            fontSize: rem(48),

            [theme.fn.smallerThan('md')]: {
                maxWidth: '100%',
                fontSize: rem(34),
                lineHeight: 1.15,
            },
        },

        description: {
            color: theme.white,
            opacity: 0.75,
            maxWidth: rem(500),

            [theme.fn.smallerThan('md')]: {
                maxWidth: '100%',
            },
        },

        control: {
            paddingLeft: rem(50),
            paddingRight: rem(50),
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontSize: rem(22),

            [theme.fn.smallerThan('md')]: {
                width: '100%',
            },
        },
    }));

    export function Camera() {
        const { classes } = useStyles();
        return (
            <div className={classes.root}>
                <h1 className="mb-2 mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-orange-500 text-center lg:justify-center lg:flex">
                    CCTV Installation
                </h1>


                <Container size="lg md:w-2/3 sm:w-2/5">

                    <div className={classes.inner}>
                        <div className={classes.content}>
                            <Title className={classes.title}>
                                {' '}
                                <Text
                                    component="span"
                                    inherit
                                    variant="gradient"
                                    gradient={{ from: 'pink', to: 'yellow' }}
                                >Unmatched Security
                                </Text>{' '}
                                - Your Trusted CCTV Installation Experts!"
                            </Title>

                            <Text className={classes.description} mt={30}>
                                We understand that peace of mind comes from knowing your property is under constant surveillance, and our dedicated team of experts is here to provide just that
                            </Text>

                            <Button
                                variant="filled"
                                gradient={{ from: 'pink', to: 'yellow' }}
                                size="xl"
                                className={classes.control }
                                color="orange"
                                mt={40}
                                component={Link} // Use the Link component from React Router
                                to="/Contact"    // Specify the link destination
                            >
                                Get started
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    export default Camera;
