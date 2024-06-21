import {
  IconLinkedin,
  IconInstagram,
  IconFacebook,
} from '@/src/components/icons'
import Link from 'next/link'
import React from 'react'

const ICON_WIDTH: string = '36px'
const ICON_HEIGHT: string = '36px'

const SocialMediaLinks = () => {
  return (
    <div className='flex flex-row gap-4'>
      <Link href='https://www.instagram.com/laurismelderis'>
        <IconInstagram width={ICON_WIDTH} height={ICON_HEIGHT} />
      </Link>
      <Link href='https://www.facebook.com/lauris.melderis'>
        <IconFacebook width={ICON_WIDTH} height={ICON_HEIGHT} />
      </Link>
      <Link href='https://linkedin.com/in/lauris-melderis-48971418b'>
        <IconLinkedin width={ICON_WIDTH} height={ICON_HEIGHT} />
      </Link>
    </div>
  )
}

export default SocialMediaLinks
