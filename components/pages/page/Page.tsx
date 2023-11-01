import RenderSections from 'components/global/RenderSections'
import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'
import type { PagePayload } from 'types'

import PageHead from './PageHead'

export interface PageProps {
  page: PagePayload
  preview?: boolean
  loading?: boolean
}

export function Page({
  page,
  preview,
  loading,
}: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  

  return (
    <>
      <PageHead page={page} title={page.title}/>

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
