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
					className='lg:mx-4 mb-4 scroll-mt-96'
					key={key}
					id={`${props.linkId ? props.linkId.slug.current : null}`}>
					<h2 className='w-full text-center font-serif text-lg lg:text-4xl font-semibold '>
						{props.title}
					</h2>
					{/* <div className='flex flex-col justify-center md:flex-row md:items-end'>
						<DateRangePicker
							label='Stay dates'
							minValue={today(getLocalTimeZone())}
						/>
						<div className='mt-2 flex flex-col md:flex-row items-center md:items-end justify-around md:ml-4'>
							<div className='flex gap-3 justify-center w-full mx-auto mb-4 md:mb-0'>
							<GuestPicker
								label='# of Adults'
								value={adultValue}
								maxValue={8}
								minValue={1}
								onChange={setAdultValue}
							/>
							<GuestPicker
								label='# of Kids'
								value={kidValue}
								maxValue={8}
								minValue={1}
								onChange={setKidValue}
							/></div>
							<AvailabilityButton />
						</div>
					</div> */}
				</div>
				<div className='mx-auto mb-12 flex justify-center'>
					<div id='innroad-widget' className='max-w-[380px] lg:max-w-[1200px]'></div>
				</div>
			
		</>
	)
}
