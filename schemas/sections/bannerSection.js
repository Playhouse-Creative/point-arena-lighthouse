import BannerSectionIcon from '../../studio/static/bannerSectionIcon'

const bannerSection = {
    type: 'object',
    name: 'bannerSection',
    title: 'Banner',
    icon: BannerSectionIcon,
    description: 'This will always be the first section on the page and will be a full width banner above the navigation section.',
    fields: [
        { type: 'string', name: 'heading', title: 'Heading',
            validation: Rule => [Rule.required().error('Heading text is required.'),
            Rule.max(75).warning('Text should be less than 75 characters.')],
    
    },
    ]
}

export default bannerSection;
