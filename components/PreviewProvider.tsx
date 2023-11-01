
import { client } from 'lib/sanity.client'
import { LiveQueryProvider } from 'next-sanity/preview'


export default function PreviewProvider({
    children,
    token,
}: {
    children: React.ReactNode
    token?: string
}) {
    if (!token) throw new TypeError('Missing token')
    return (
        <LiveQueryProvider client={client} token={token} 
        logger={console}
        >
            {children}
        </LiveQueryProvider>
    )
}