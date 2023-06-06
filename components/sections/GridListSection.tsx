/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { urlForImage } from '@/lib/sanity'

interface LinkId {
  slug: { current?: string }
}

interface Heading {
  icon?: { asset: { _ref?: string } }
  title?: string
}

interface ListItem {
  heading?: Heading
  items?: string[]
}

interface Props {
  gridList?: ListItem[]
  title?: string
  listType?: { gridList: ListItem[] }
  linkId?: LinkId
}

export default function GridListSection({
  listType = { gridList: [] },
  title = "Placeholder title",
  linkId = { slug: { current: "" } },
}: Props) {
  const list = listType.gridList
  const linkIdValue = linkId?.slug?.current?.split('#')[1] || ""
  
  return (
    <div id={linkIdValue} className='mx-4 my-12 scroll-mt-96'>
      <div className='relative mx-auto mb-12 max-w-[1600px] place-self-center border border-pa-navy-4 bg-white px-2 text-center shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4 sm:px-16'>
        <h3 className='w-full mx-auto mt-8 font-serif text-3xl font-semibold text-center text-pa-navy-4 sm:ml-6 sm:text-left'>
          {title || 'Placeholder title'}
        </h3>
        <ul className='grid grid-cols-1 gap-6 mx-2 my-8 sm:mx-12 sm:grid-cols-2'>
          {list.map((listSection = { heading: {}, items: [] }, i) => (
            <li key={i} className='flex flex-col '>
              <div className='flex text-pa-navy-4'>
                <img
                  src={urlForImage(listSection.heading?.icon).url() || 'data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2235%22%20height=%2235%22%20viewBox=%220%200%2035%2035%22%3E%3Crect%20width=%2235%22%20height=%2235%22%20fill=%22%23ddd%22%3E%3C/rect%3E%3C/svg%3E'}
                  alt={listSection.heading?.title || 'Placeholder Heading title'}
                  width={35}
                  height={35}
                />
                <h3 className='ml-4 text-2xl font-semibold text-pa-navy-4'>
                  {listSection.heading?.title || 'Placeholder Heading title'}
                </h3>
              </div>
              <ul>
                {listSection.items?.map((item = 'Placeholder item', i) => (
                  <li key={i} className='ml-12 text-lg text-left text-pa-navy-4'>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
