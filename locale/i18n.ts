import { notFound } from "next/navigation";
import { getRequestConfig } from 'next-intl/server';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import CreateMiddleWare from "next-intl/middleware";
// import { type  } from 'next-intl';

// Can be imported from a shared config
export const locales = ['en'];
export const localePrefix = 'as-needed'

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as any)) notFound();

    return {
        timeZone:'Asia/Damascus',
        messages: (await import(`./messages/${locale}.json`)).default
    };
});

export const defaultLocale = 'en';

export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation({ locales });