import {Inter} from "next/font/google";

export const metadata = {
    title: 'Login Page',
    description: 'Login Page',
};

const inter = Inter({ subsets: ["latin"] });

export default function LoginLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`relative ${inter.className}`} id="__next">
                <div className="absolute top-0 w-full h-svh z-[99]">
                    {children}
                </div>
            </body>
        </html>
    );
}