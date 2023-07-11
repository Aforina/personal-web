import { Github, Linkedin, Twitter, Twitch } from 'lucide-react'
import { Link, useLocation } from 'wouter'
import { IconLink } from './common/IconLink'

export const Nav = () => {
  const [location] = useLocation()

  return (
    <div className='w-full h-[100px] flex items-center justify-between text-[16px] font-semibold text-Primary'>
      <Link href='/home' className='ml-20 icons-link'>
        Sara Montagud
      </Link>
      <div className='flex items-center mr-20 gap-x-4'>
        <Link
          href='/projects'
          className={`icons-link  ${
            location === '/projects' && 'text-White-Custom'
          } `}
        >
          Projects
        </Link>
        <Link
          href='/talks'
          className={`icons-link  ${
            location === '/talks' && 'text-White-Custom'
          } `}
        >
          Talks
        </Link>
        <Link
          href='/community'
          className={`icons-link  ${
            location === '/community' && 'text-White-Custom'
          } `}
        >
          Community
        </Link>
        <Link
          href='/streams'
          className={`icons-link  ${
            location === '/streams' && 'text-White-Custom'
          } `}
        >
          Streams
        </Link>
        <IconLink
          href='https://github.com/Aforina'
          text='Github'
          icon={<Github color='#BBBBBB' size={18} className='icons-link' />}
        />
        <IconLink
          href='https://www.linkedin.com/in/saramonrod/'
          text='Linkedin'
          icon={<Linkedin color='#BBBBBB' size={18} className='icons-link' />}
        />
        <IconLink
          href='https://twitter.com/afordigital'
          text='Twitter'
          icon={<Twitter color='#BBBBBB' size={18} className='icons-link' />}
        />
        <IconLink
          href='https://www.twitch.tv/afor_digital'
          text='Twitch'
          icon={<Twitch color='#BBBBBB' size={18} className='icons-link' />}
        />
      </div>
    </div>
  )
}
