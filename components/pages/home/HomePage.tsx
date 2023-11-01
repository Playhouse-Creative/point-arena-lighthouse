import RenderSections from 'components/global/RenderSections'
import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'
import type { HomePagePayload } from 'types'

import HomePageHead from './HomePageHead'

export interface HomePageProps {
  page: HomePagePayload
  preview?: boolean
  loading?: boolean
}

export function HomePage({ page, preview, loading }: HomePageProps) {
  

  return (
    <>
      <HomePageHead page={page}  />

      <Layout preview={preview} loading={loading}>
        <div>
          <RenderSections pageData={page} />
          {/* Workaround: scroll to top on route change */}
          <ScrollUp />
        </div>
      </Layout>
    </>
  )
}
