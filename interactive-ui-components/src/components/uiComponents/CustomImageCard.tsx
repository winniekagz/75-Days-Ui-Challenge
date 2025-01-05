import { tv } from 'tailwind-variants';

export const cardStyles = tv({
  slots: {
    base: 'min-w-[320px] relative  w-full h-full min-h-[500px] flex flex-col items-start perspective-1000',
    image: 'absolute top-0 left-0 w-full h-full object-cover',
    infoWrapper:
      'absolute bottom-0 left-0 w-full skew-y-[-5deg] bg-Accent/80 p-6 text-Text flex flex-col justify-between items-start',
    infoBox: 'flex flex-col space-y-1',
    name: 'text-lg font-bold text-Secondary',
    status: 'text-sm text-green-400 font-bold',
    details: 'text-sm text-Text font-semibold my-2',
    backInfoWrapper: 'absolute w-full h-full flex flex-col justify-center items-center p-6 text-Text transform rotateY-180 backface-hidden',
    backDetails: 'text-sm text-Text',
    bookButton: 'mt-4 px-6 py-2 rounded-full bg-primary text-Text font-semibold'
  }
});

export const {
  base,
  image,
  infoWrapper,
  infoBox,
  name,
  status,
  details,
  backInfoWrapper,
  backDetails,
  bookButton,
} = cardStyles();
