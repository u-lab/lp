import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        window.location.href = 'https://twitter.com/Ulab_uu';
    }, []);
    return <>redirecting...</>;
}
