import { Outfit, Almarai , Syne} from 'next/font/google';
import { ReactNode } from 'react';
import { locales } from '@/locale/i18n';
import Providers from '../components/Providers';
import Navbar from './components/Navbar';
const inter = Outfit({
  weight: '400',
  subsets: ['latin'],
});

const almarai = Almarai({
  weight: ['300', '400', '700'],
  subsets: ["arabic"]

})




const syne = Syne({
  weight: ['400', '500','600','700','800'],
  subsets: ["latin"],
  variable:'--font-syne'

})

type Props = {
  children: ReactNode;
  params: { locale: string };

};


async function getMessages(locale: string) {
  try {
    return (await import(`@/locale/messages/${locale}.json`)).default;
  } catch (error) {
  }
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}



export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  const messages = await getMessages(locale);
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${inter.className} ${almarai.className} ${syne.variable}`}>
        <Navbar/>
        <Providers locale={locale} messages={messages} >
          {children}

        </Providers>
        <footer className='h-[120px]'></footer>
      </body>
    </html>
  );
}