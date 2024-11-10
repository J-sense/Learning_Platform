
type Props = {
    children: React.ReactNode;
  };
const Heading:React.FC<Props> = ({children}) => {
  
  return (
    <div>
      <h1 className='text-black  text-xl lg:text-[36px] font-bold tracking-wide leading-normal'>
        {children}
      </h1>
    </div>
  )
}

export default Heading
