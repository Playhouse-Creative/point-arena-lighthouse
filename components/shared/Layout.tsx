import  Footer  from 'components/global/Footer'
import Navbar  from 'components/global/Navbar'
import { PreviewBanner } from 'components/preview/PreviewBanner'

import ContactForm from '../pageSections/sectionComponents/ContactForm'



export interface LayoutProps {
  children: React.ReactNode
  preview?: boolean
  loading?: boolean
}

export default function Layout({
  children,
  preview,
  loading,
}: LayoutProps) {
  return (
    <div className='h-full overflow-x-hidden'>
      {preview && <PreviewBanner loading={loading} />}
      
        <Navbar />
      
      <div className="mt-[160px] -z-20  bg-[url('/topography-background.svg')]">
        {children}
        <ContactForm />
      </div>
      <Footer />
      
    </div>
  )
}
