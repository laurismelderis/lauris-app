import { auth } from '@clerk/nextjs/server'

const usePageHeightClassName = () => {
  const { userId } = auth()

  if (userId) {
    return 'min-h-[calc(100dvh-256px)]'
  }
  return 'min-h-[calc(100dvh-164px)]'
}

export default usePageHeightClassName
