import React from 'react';

const AboutMe = () => {
  return (
    <div>
      <div className='mx-32 font-establish-retro max-[935px]:mx-16'>
        <h3 id='aboutme' className='text-xl text-white'><span className='text-[#A47764]'>01. </span> ABOUT ME</h3>
        <div>
          <div className='flex flex-col gap-10 mt-10 sm:flex-row'>
            <img src="/img/my.jpeg" alt="증명사진" className='w-1/4 h-1/2 max-[640px]:w-full rounded-2xl'/>
            <div className='flex flex-col gap-10 text-white'>
              <div className='flex flex-col gap-3'>
                <p className='text-[#A47764]'>NAME<p className='text-xl text-white'>한지원</p></p>
                <p className='text-[#A47764]'>BIRTHDAY<p className='text-xl text-white'>1994.06.29</p></p>
                <p className='text-[#A47764]'>TEL<p className='text-xl text-white'>010-4474-5804</p></p>
                <p className='text-[#A47764]'>EMAIL<p className='text-xl text-white'>gomdeschool@naver.com</p></p>
              </div>
              <div className='flex flex-col gap-3'>
                <p className='text-[#A47764]'>VALUE</p>
                <p>중요하게 생각하는 가치는 포기하지 않는 <span className='text-[#A47764]'>끈기</span>와 다른사람과 함께하는 <span className='text-[#A47764]'>소통</span>이라고 생각합니다</p>
                <p>프로젝트를 완성시키고 해결하기 힘든 문제를 포기하지 않고 해결하는 <span className='text-[#A47764]'>끈기</span>가 중요하다고 생각합니다</p>
                <p>모든 프로젝트는 혼자서 해결 할 수 없다고 생각합니다 디자인, 백엔드 혹은 많은 사람들과 협업을 하기 위해 <span className='text-[#A47764]'>소통</span>이 중요하다고 생각합니다</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;