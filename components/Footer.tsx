import Button from './ui/Button'

const Footer = () => {
  return (
    <footer className='bg-black min-h-25 px-20 py-10'> 
      <div className='flex sm:flex-row flex-col  justify-between'>
        <h3 className='text-4xl text-white'>Your Story Deserves Great Art</h3>
        <Button size='md' className='bg-white text-black'>Book Appointment</Button>
      </div>
      
    </footer>
  )
}

export default Footer
