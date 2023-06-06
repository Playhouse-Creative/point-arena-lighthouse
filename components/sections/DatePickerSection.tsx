import { useRouter } from 'next/router';
import { useEffect, useState  } from 'react';
import  useExternalScript  from '../../lib/useExternalScript'




type Props = {
	title: string
	linkId: { slug: { current: string } }
}

export default function DatePickerSection(props: Props) {
	
	const router = useRouter();
	const [key, setKey] = useState(Date.now());
  
  useExternalScript('https://be-booking-engine-api.prodinnroad.com/widget/pointarenalighthouse');

  // Force re-render and execute the script whenever the route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setKey(Date.now());
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);
	
	return (
		<>
			
				<div
					className='mb-4 lg:mx-4 scroll-mt-96'
					key={key}
					id={`${props.linkId ? props.linkId.slug.current : null}`}>
					<h2 className='w-full font-serif text-lg font-semibold text-center lg:text-4xl '>
						{props.title}
					</h2>
					
				</div>
				<div className='flex justify-center mx-auto mb-12'>
					<div id='innroad-widget' className='max-w-[380px] lg:max-w-[1200px]'></div>
				</div>
			
		</>
	)
}
