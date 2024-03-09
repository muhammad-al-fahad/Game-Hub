const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-6 w-dvw h-dvh'>
        <div className='flex flex-col items-center justify-center space-y-2'>
            <h1 className='text-gray-700 text-9xl dark:text-gray-50'>404</h1>
            <h3 className='text-3xl text-gray-700 dark:text-gray-50'>Not Found</h3>
        </div>
        <h6 className='text-gray-700 text-md dark:text-gray-50'>The page you are looking for does not exist</h6>
    </div>
  )
}

export default NotFound