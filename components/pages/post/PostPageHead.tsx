import { SiteMeta } from 'components/global/SiteMeta'
import { PostPagePayload } from 'types'

export interface PostPageHeadProps {
    page?: PostPagePayload
}

export default function PostPageHead({ page }: PostPageHeadProps) {
    return (
        <SiteMeta
            description={page?.excerpt ? page.excerpt : ''}
            image='/favicon/android-chrome-512x512.png'
            title={page?.title}
        />
    )
}