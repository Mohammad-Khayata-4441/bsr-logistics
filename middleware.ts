import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales ,localePrefix } from './locale/i18n';

export default createMiddleware({
    locales: locales,
    localePrefix,
    defaultLocale,

});

export const config = {
    matcher: ['/', '/(de|en)/:path*']
};