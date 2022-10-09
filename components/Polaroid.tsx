import Image from 'next/image';
import { ImageProps } from 'next/image';
import { ReactNode } from 'react';

export interface PolaroidProps extends ImageProps {
  side?: 'left' | 'right';
  rotate?: 'rotate-3' | '-rotate-3' | 'rotate-6' | '-rotate-6';
  caption: ReactNode;
}

export function Polaroid({
  side,
  caption,
  rotate = side === 'left' ? 'rotate-6' : '-rotate-3',
  ...imageProps
}: PolaroidProps) {
  return (
    <div
      className={`polaroid max-w-[50%] min-w-[250px] ${side === 'left' && 'float-left'} ${
        side === 'right' && 'float-right'
      } shadow-xl bg-white p-4 rounded-sm hover:rotate-0 hover:scale-[1.3] transition-all hover:grayscale-0 grayscale-[20%] duration-500 ${rotate} scale-[80%]`}
    >
      <Image alt="polaroid image" {...imageProps} />
      <div className="text-[#400D51] text-center">{caption}</div>
    </div>
  );
}
