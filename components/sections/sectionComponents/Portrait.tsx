import Image from "next/image";
import { urlForImage } from '@/lib/sanity'

type Props = { image?: { asset: { _id: string; url: string; }; }; name: string; title: string; 
description?: string; _key?: string; _type?: string; _id?: string; key?: number;
};

const Portrait = (props: Props) => {
    return (
        <div className="flex flex-col items-center justify-center mx-auto mb-12 basis-1/3">
            <div className="relative w-[60vw] h-[80vw] md:w-[30vw] md:h-[40vw] lg:w-[15vw] lg:h-[20vw] border-2 border-gray-700">
                {props.image && <Image
                    src={urlForImage(props.image).url()}
                    alt={props.name}
                    fill={true}
                    style={{ objectFit: 'cover' }}
                    sizes='(max-width: 768px) 100vw,
              					(max-width: 1200px) 50vw,
              					33vw'
                />}
            </div>
            <h3 className="mt-2 text-xl font-semibold text-center text-pa-navy-4">
                {props.name}
            </h3>
            <h4 className="text-sm text-center break-words text-pa-navy-4">{props.title}</h4>
        </div>
    );
};

export default Portrait;
