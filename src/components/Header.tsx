
const Header = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='w-24 mx-5 rounded-lg'>
        <img src="/img/h로고.jpeg" alt="이니셜로고" className='w-full'/>
      </div>
      <div className='flex gap-2 text-sm font-establish-retro text-[#8892AF] mr-10'>
        <a href='#aboutme' className='hover:text-[#A89A8E]'><span className='text-[#A47764]'>01.</span> ABOUT ME </a>
        <a href='#skill' className='hover:text-[#A89A8E]'><span className='text-[#A47764]'>02.</span> SKILLS </a>
        <a href='#project' className='hover:text-[#A89A8E]'><span className='text-[#A47764]'>03.</span> PROJECTS </a>
      </div>
    </div>
  );
};

export default Header;