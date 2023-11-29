import { config } from 'contentlayer/generated';

const NotFound = () => (
  <div
    className='flex min-h-[calc(100dvh-4rem)] w-full flex-col items-center
justify-center pb-16'
  >
    <h1
      className='text-9xl font-extrabold leading-none tracking-tight
text-danger-800 dark:text-danger-200 sm:text-[16rem] md:text-[12rem]
lg:text-[16rem]'
    >
      404
    </h1>
    <p className='text-center text-xl text-neutral-700 dark:text-neutral-300'>
      {config.notFoundText}
    </p>
  </div>
);

export default NotFound;
