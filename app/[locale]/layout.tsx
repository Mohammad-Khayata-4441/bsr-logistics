import { Outfit, Almarai } from 'next/font/google';
import { ReactNode } from 'react';
import { locales } from '@/locale/i18n';
import Test from './components/Test'
import Providers from '../components/Providers';
const inter = Outfit({
  weight: '400',
  subsets: ['latin'],
});

const almarai = Almarai({
  weight: ['300', '400', '700'],
  subsets: ["arabic"]

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
      <body className={`${inter.className} ${almarai.className}  dark:bg-[#00121E]`}>

        <Providers locale={locale} messages={messages} >
          <Test></Test>

        {children}

        </Providers>

      </body>
    </html>
  );
}