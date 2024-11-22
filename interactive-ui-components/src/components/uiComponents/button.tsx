import { tv } from 'tailwind-variants';
 
// const ButtonBase = tv({
//   slots: {
    
//     startIcon:
//       'w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto drop-shadow-lg',
//     text: 'flex-1 pt-6 md:p-8 text-center md:text-left space-y-4',
//     endIcon: 'text-md font-medium',
//   }
// });

export const Button=tv({

base: 'flex gap-4 p-4 rounded-lg justify-between',
variants:{
    color:{
        primary:'hover:from-secondary hover:to-accent bg-gradient-to-r from-primary to-secondary text-white font-bold ',
        secondary:'hover:bg-secondary bg-secondary/60 text-white font-bold '
    }
}
})

export const Chip=tv({


})