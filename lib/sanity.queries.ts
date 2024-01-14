import { groq } from 'next-sanity'

export const blogPageQuery = groq`{"postData" :*[_type == "post"] | order(publishedAt desc)
{
  _id,
	_createdAt,
	title,
	slug,
	author->{name, image},
  publishedAt,
	excerpt,
	'category': categories[]-> { title, color },
	mainImage,
	description,
	body 
}}
`

export const homePageQuery = groq`
  *[_type == "page" && id == "home"][0]{
    _id,
    "pageSections":  {
    ...,
		content[] {..., linkId->{..., linkId},rows[] {..., cta{..., anchorLink->{..., linkId}}}, cta[]{..., anchorLink->{..., linkId}}},
    
  }
  ,
    "postData" :*[_type == "post"] | order(publishedAt desc)[0...20]
{_id,
_createdAt,
title,
slug,
author->{name, image},
publishedAt,
excerpt,
'category': categories[]-> { title, color },
mainImage,
description,
body, 
	}
  }
`

export const homePageTitleQuery = groq`
  *[_type == "home"][0].title
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
  _id,
  "slug": slug.current,
  "pageSections":  {
    ...,
		content[] {..., linkId->{..., linkId},rows[] {..., cta{..., anchorLink->{..., linkId}}}, cta[]{..., anchorLink->{..., linkId}}},
    
  }
  ,
"postData" :*[_type == "post"] | order(publishedAt desc)[0...20]
{_id,
_createdAt,
title,
slug,
author->{name, image},
publishedAt,
excerpt,
'category': categories[]-> { title, color },
mainImage,
description,
body, 
	}
  }
`



export const previewPostsQuery = groq`*[_type == "post"] | order(publishedAt desc)[0...20]  {
{	_id,
_createdAt,
title,
slug,
author->{name, image},
publishedAt,
excerpt,
'category': categories[]-> { title, color },
mainImage,
description,
body, }
}`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
_createdAt,
title,
"slug": slug.current,
author->{name, image},
publishedAt,
excerpt,
categories[]-> { title, color },
mainImage,
description,
body,
"previewPostData" :*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...20]
{_id,
_createdAt,
title,
slug,
author->{name, image},
publishedAt,
excerpt,
'category': categories[]-> { title, color },
mainImage,
description,
body, 
	}
  }
`

export const postPaths = groq`
  *[_type == "post" && slug.current != null].slug.current
`

export const pagePaths = groq`
  *[_type == "page" && slug.current != null ].slug.current
`


