import { SiteMeta } from 'components/global/SiteMeta'
import { BlogPagePayload } from 'types'

export interface BlogPageHeadProps {
    page?: BlogPagePayload
}

export default function BlogPageHead({ page }: BlogPageHeadProps) {
    return (
        <SiteMeta
            description={page?.excerpt ? page.excerpt : ''}
            image='/favicon/android-chrome-512x512.png'
            title={page?.title}
        />
    )
}