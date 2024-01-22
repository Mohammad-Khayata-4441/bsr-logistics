"use client"
import { NextIntlClientProvider } from 'next-intl'
import React, { PropsWithChildren } from 'react'

export default function Providers({ children, locale, messages }: PropsWithChildren<{
    locale: string,
    messages: any
}>) {
    return (
        <NextIntlClientProvider timeZone='Asia/Damascus' messages={messages} locale={locale} >
            {children}
        </NextIntlClientProvider>
    )
}
