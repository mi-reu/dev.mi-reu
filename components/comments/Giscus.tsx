import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import GiscusComponent from '@giscus/react'

import siteMetadata from '@/data/siteMetadata'

const Giscus = () => {
  const [view, setView] = useState(false)
  const { theme } = useTheme()

  const COMMENTS_ID = 'comments-container'

  const { repo, repositoryId, category, categoryId } = siteMetadata?.comment?.giscusConfig

  return (
    <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300">
      {!view && <button onClick={() => setView(true)}>댓글 보기</button>}
      {view && (
        <GiscusComponent
          id={COMMENTS_ID}
          repo={repo as `${string}/${string}`}
          repoId={repositoryId}
          category={category}
          categoryId={categoryId}
          mapping="pathname"
          term="Welcome to @giscus/react component!"
          reactionsEnabled="0"
          emitMetadata="0"
          inputPosition="top"
          theme={theme}
          lang="ko"
          loading="lazy"
        />
      )}
    </div>
  )
}

export default Giscus
