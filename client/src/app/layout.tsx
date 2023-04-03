export const metadata = {};

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
    return (
        <html lang="ja">
            <body>{children}</body>
        </html>
    );
}
