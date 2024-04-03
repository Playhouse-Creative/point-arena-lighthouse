import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

interface ImageWithLinkProps {
    image?: { asset?: any }
    alt?: string
    linkUrl: { route?: string; link?: string; anchorLink?: { slug?: { current?: string } } }
    width?: number
    height?: number
    fill?: boolean
    size?: string
    style?: any
    sizes?: string
    classesWrapper?: string
}

export default function ImageWithLink({
    image,
    alt = 'Cover image',
    width,
    height,
    sizes,
    fill,
    style,
    linkUrl, 
}: ImageWithLinkProps) {
    const imageUrl =
        image && urlForImage(image)?.url()
    

    return (
        <>
            {linkUrl?.route ? (
                <Link href={linkUrl.route} className={`w-full absolute overflow-hidden h-full hover:border-4 `}>
                    {imageUrl && (
                        <Image
                            className="absolute h-full w-full"
                            alt={alt}
                            width={width}
                            height={height}
                            fill={fill}
                            style={style}
                            sizes={sizes}
                            src={imageUrl}
                        />
                    )}
                </Link>
            ) : 
            linkUrl?.anchorLink?.slug?.current ? (
                        <Link href={linkUrl.anchorLink.slug?.current} className={`w-full absolute overflow-hidden h-full hover:border-4 `}>
                            {imageUrl && (
                                <Image
                                    className="absolute h-full w-full"
                                    alt={alt}
                                    width={width}
                                    height={height}
                                    fill={fill}
                                    style={style}
                                    sizes={sizes}
                                    src={imageUrl}
                                />
                            )}
                        </Link>
                    ) :
            linkUrl?.link ? (
                    <a href={linkUrl.link} target='_blank' rel="noopener noreferrer" className={`w-full absolute overflow-hidden h-full hover:border-4 `}>{imageUrl && (
                    <Image
                        className="absolute h-full w-full"
                            alt={alt}
                            width={width}
                            height={height}
                            fill={fill}
                            style={style}
                            sizes={sizes}
                            src={imageUrl}
                    />
                )}</a>
            ) : null}
        </>
    )
}
