import { type GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
    return {
        redirect: {
            destination: 'https://twitter.com/Ulab_uu',
            permanent: false,
        },
    };
};

export default function Home() {
    return <>redirecting...</>;
}
