import { toPlainText } from '@portabletext/react'
import { SiteMeta } from 'components/global/SiteMeta'
import { HomePagePayload } from 'types'

export interface HomePageHeadProps {
  page?: HomePagePayload
}

export default function HomePageHead({ page }: HomePageHeadProps) {
  return (
    <SiteMeta
      description={page?.overview ? toPlainText(page.overview) : ''}
      image='/favicon/android-chrome-512x512.png'
      title={page?.title}
    />
  )
}
