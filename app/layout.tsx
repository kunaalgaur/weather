import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--poppins',
});

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={poppins.className}>{children}</body>
        </html>
    );
};

export default layout;
