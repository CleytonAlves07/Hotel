import { Github, Linkedin } from 'lucide-react';

export function SocialIcons() {
  return (
    <div className='flex space-x-8'>
      <a href="http://www.linkedin.com/in/cleyton-alves/" 
      target="_blank"
      className='text-orange-500'
      >
        <Linkedin />
      </a>
      <a href="http://github.com/CleytonAlves07" 
      target="_blank"
      className='text-orange-500'
      >
        <Github />
      </a>
    </div>

  )
}