/* eslint-disable @next/next/no-img-element */
import { ImageProps } from 'next/image';
import { ReactNode } from 'react';

export interface PolaroidProps extends Partial<ImageProps> {
  side?: 'left' | 'right';
  rotate?: 'rotate-3' | '-rotate-3' | 'rotate-6' | '-rotate-6';
  caption: ReactNode;
  full?: boolean;
}

export function Polaroid({
  side,
  caption,
  src,
  rotate = side === 'left' ? 'rotate-6' : '-rotate-3',
  full,
  ...imageProps
}: PolaroidProps) {
  return (
    <div
      className={`polaroid ${
        full ? 'w-[80%] m-auto' : 'max-w-[70%] md:max-w-[50%]'
      } overflow-hidden ${side === 'left' && 'float-left'} ${
        side === 'right' && 'float-right'
      } relative shadow-xl bg-white p-4 rounded-sm hover:z-10 hover:rotate-0 hover:scale-[1.3] transition-all hover:grayscale-0 grayscale-[20%] duration-500 ${rotate} scale-[80%]`}
    >
      {src && <img alt="polaroid image" src={src as string} {...imageProps} />}
      <div className="text-[#400D51] text-center text-lg">{caption}</div>
    </div>
  );
}
