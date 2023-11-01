import { toPlainText } from '@portabletext/react'
import { SiteMeta } from 'components/global/SiteMeta'
import { PagePayload } from 'types'

export interface PageHeadProps {
  title: string | undefined
  page: PagePayload | undefined
}

export default function PageHead({ title, page }: PageHeadProps) {
  return (
    <SiteMeta
      baseTitle={title}
      description={page?.overview ? toPlainText(page.overview) : ''}
      image='/favicon/android-chrome-512x512.png'
      title={page?.title}
    />
  )
}
