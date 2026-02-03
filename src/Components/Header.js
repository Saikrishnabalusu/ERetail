// import SearchIcon from '../assets/searchIcon.svg'
// import Logo from '../assets/neon.svg'
const logo = new URL('../assets/neon.svg', import.meta.url).href
const searchIcon = new URL('../assets/searchIcon.svg', import.meta.url).href
const supportIcon = new URL('../assets/SupportIcon.svg', import.meta.url).href
const cartIcon = new URL('../assets/CartIcon.svg', import.meta.url).href
const profileIcon = new URL('../assets/ProfileIcon.svg', import.meta.url).href



const TextIconComp = ({text, icon}) => {
  return (
    <div className='flex items-center gap-2'>
      <img src={icon} alt={`${text} icon`} className='w-8 h-8 rounded-full mix-blend-multiply object-contain' />
      <p className='text-semi-bold'>{text}</p>
    </div>
  )
}

const Header = ( ) => {
//     console.log("LOGO:", logo);
// console.log("ICON:", searchIcon);


  return (
    <div className='w-full h-20 flex justify-between items-center  gap-4 bg-white shadow-md select-none'>
      <div className='ml-4 flex items-center gap-8'>
        <img src={logo} className='w-40 h-auto mix-blend-multiply object-contain' alt="FOW Logo" />
        <input type="text" placeholder="🔍  search for the dishes...." className=" w-96 h-auto p-2 rounded-xl border-amber-600 border-2 outline-none" />
      </div>
      <div className="mr-4 flex items-center gap-10">
        <TextIconComp text="Contact Us" icon={supportIcon} />
        <TextIconComp text="Cart" icon={cartIcon} />
        <TextIconComp text="Profile" icon={profileIcon} />
      </div>

    </div>
  )
}

export default Header;