import React from 'react'
import { MoreHorizontal } from 'lucide-react'

import { 
  Popover,
  PopoverContent,
  PopoverTrigger
} from '../components/ui/popover'
import { Button } from '../components/ui/button'
import { Separator } from '../components/ui/separator'


const ListOptions = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className='h-auto w-auto p-2' variant='ghost'>
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='px-0 pt-3' side='bottom' align='start'>
        <div className='text-sm font-medium text-center text-neutral-600 pb-4'>
          List Actions
        </div>

        <Button 
          className='rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm'
          variant='ghost'
        >
          Add card...
        </Button>
        <Separator />

        <form>
          <input hidden name="Id" id='id' />
          <input hidden name='boardId' id='boardId' />

          <Button
            variant='ghost'
            className='rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm'
          >Deleten this list...</Button>
        </form>
      </PopoverContent>
    </Popover>
  )
}

export default ListOptions