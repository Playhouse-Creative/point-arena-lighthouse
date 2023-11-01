/* eslint-disable @next/next/no-html-link-for-pages */
interface PreviewBannerProps {
  loading?: boolean
}

export function PreviewBanner({ loading }: PreviewBannerProps) {
  return (
    <div
      className={`${
        loading ? 'animate-pulse' : ''
      } bg-black p-3 text-center text-white fixed top-0 left-0 w-full z-[100] max-w-screen`}
    >
      {'Previewing drafts. '}
      <a
        className="underline transition hover:opacity-50"
        href="/api/disable-draft"
      >
        Back to published
      </a>
    </div>
  )
}
