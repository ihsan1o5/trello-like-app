import React from 'react'
import { Layout } from 'lucide-react'

const Header = () => {
  return (
    <div className='flex items-start gap-x-3 mb-6 w-full'>
        <Layout className='h-5 w-5 mt-1 text-neutral-700' />
        <div className='w-full'>
            <form>
                <input 
                    id='title' 
                    value='Card title' 
                    className='font-semibold text-xl px-1 text-neutral-700 
                    bg-transparent border-transparent relative -left-1.5 w-[95%] 
                    focus-visible:bg-white focus-visible:border-input mb-0.5 truncates'
                />
            </form>
            <p className='text-sm text-muted-foreground'>
                In list <span className='underline'>Card title</span>
            </p>
        </div>
    </div>
  )
}

export default Header