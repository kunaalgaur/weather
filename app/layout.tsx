import Topbar from '@/components/shared/Topbar/Topbar';
import './globals.css';
import { Poppins } from 'next/font/google';
import Leftbar from '@/components/shared/Leftbar/Leftbar';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--poppins',
});

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={poppins.className}>
                <Leftbar />
                <div id="container">
                    <Topbar />
                    {children}
                </div>
            </body>
        </html>
    );
};

export default layout;
