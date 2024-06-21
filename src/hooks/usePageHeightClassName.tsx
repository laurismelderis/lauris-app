import { auth } from '@clerk/nextjs/server'

const usePageHeightClassName = () => {
  const { userId } = auth()

  if (userId) {
    return 'min-h-[calc(100dvh-192px)]'
  }
  return 'min-h-[calc(100dvh-100px)]'
}

export default usePageHeightClassName
