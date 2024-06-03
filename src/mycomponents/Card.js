import React from 'react'
import CardModal from './modals/card-modal'
import { Dialog, DialogTrigger } from '../components/ui/dialog'

const Card = () => {
  return (
    <>
      <div className='p-3 bg-slate-300 rounded shadow mt-3'>
        <Dialog>
          <DialogTrigger>
            Card
          </DialogTrigger>
          <CardModal />
        </Dialog>
      </div>
    </>

  )
}

export default Card