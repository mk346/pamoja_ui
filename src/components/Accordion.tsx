import { MantineTheme, createStyles, Accordion, Grid, Col, Container, Title, Image } from '@mantine/core';
import photo from "../assets/photo.jpg";

const useStyles = createStyles((theme: MantineTheme) => ({
    wrapper: {
        paddingTop: `calc(${theme.spacing.xl} * 2)`,
        paddingBottom: `calc(${theme.spacing.xl} * 2)`,
        background: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
    title: {
        fontSize: 50,
        marginBottom: theme.spacing.md,
        paddingLeft: theme.spacing.md,
        color: '#f97316', // Update the color to #f97316
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
    item: {
        fontSize: theme.fontSizes.md,
        fontWeight:"bold",
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    },
}));

type PlaceholderText = {
    question: string;
    answer: string;
};

type FaqWithImageProps = {
    placeholderTexts: PlaceholderText[];
};

export function FaqWithImage({ placeholderTexts }: FaqWithImageProps) {
    const { classes } = useStyles();
    return (
        <div className={classes.wrapper}>
            <Container size="lg">
                <Grid id="faq-grid" gutter={50}>
                    <Col span={12} md={6}>
                        <Image src={photo} alt="Frequently Asked Questions" />
                    </Col>
                    <Col span={12} md={6}>
                        <Title order={2} ta="left" className={`${classes.title}`}>
                        Frequently Asked Questions
                        </Title>

                        <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
                            {placeholderTexts.map((text: PlaceholderText, index: number) => (
                                <Accordion.Item className={classes.item} value={`accordion-${index}`} key={index}>
                                    <Accordion.Control>{text.question}</Accordion.Control>
                                    <Accordion.Panel>{text.answer}</Accordion.Panel>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                </Grid>
            </Container>
        </div>
    );
}

export default function App() {
    const placeholderTexts: PlaceholderText[] = [
        {
            question: 'How can I reset my password?',
            answer: 'Contact Our Customer Support for guidance. Call us on 02076530000 or WhatsApp 0799745714',
        },
        {
            question: 'How long does installation process take?',
            answer: 'Wifi Installation is done within 48 hours',
        },
        {
            question: 'Is the Installation free?',
            answer: 'We offer free installation to all customers within 200 metres from our Network',
        },
        {
            question: 'Where are your offices located?',
            answer: 'Honey Pot Road, Raquel Plaza Room 203',
        },

    ];

    return (
        <div style={{ background: '#f9f9f9', minHeight: '100vh', padding: '40px' }}>
            <FaqWithImage placeholderTexts={placeholderTexts} />
        </div>
    );
}