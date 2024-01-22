"use client"
import React, { useTransition } from 'react'
import { useTranslations } from 'next-intl'
export default function Test() {
    const t = useTranslations()
    return (
        <div>
            {t('hello')}

        </div>
    )
}
