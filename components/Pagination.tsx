import Link from '@/components/Link'

interface Props {
  totalPages: number
  currentPage: number
}

export default function Pagination({ totalPages, currentPage }: Props) {
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            {`<---`}
            <span className="sr-only">이전 페이지</span>
          </button>
        )}
        {prevPage && (
          <Link href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}>
            <button>
              {`<---`}
              <span className="sr-only">이전 페이지</span>
            </button>
          </Link>
        )}
        <div className="flex">
          {Array(totalPages)
            .fill(1)
            .map((v, i) => (
              <a
                key={i}
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                href={`/blog/page/${v + i}`}
              >
                {v + i}
              </a>
            ))}
        </div>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            {`--->`}
            <span className="sr-only">다음 페이지</span>
          </button>
        )}
        {nextPage && (
          <Link href={`/blog/page/${currentPage + 1}`}>
            <button>
              {`--->`}
              <span className="sr-only">다음 페이지</span>
            </button>
          </Link>
        )}
      </nav>
    </div>
  )
}
