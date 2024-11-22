
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { ModalProps } from '../../../types/profile.types'

export function Modal({handleOpen,isOpen,title,subTitle,children}:ModalProps) {
 

  return (
    <Dialog open={isOpen} onClose={handleOpen}>
      <DialogPanel>
        <DialogTitle>{title}</DialogTitle>
        <Description>
          {subTitle}
        </Description>

       {children}

       
        <button onClick={handleOpen}>Cancel</button>
      </DialogPanel>
    </Dialog>
  )
}