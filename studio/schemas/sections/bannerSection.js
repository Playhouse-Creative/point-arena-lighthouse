import BannerSectionIcon from '../../../studio/static/bannerSectionIcon'

export default {
    type: 'object',
    name: 'bannerSection',
    title: 'Banner',
    icon: BannerSectionIcon,
    description: 'This will always be the first section on the page and will be a full width banner above the navigation section.',
    fields: [
        { type: 'string', name: 'heading', title: 'Heading',
        validation: Rule => Rule.required().max(75).warning('Shorter announcements are usually better')
    
    },
    ]
}