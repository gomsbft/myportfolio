import { GoCheck, GoArrowRight  } from "react-icons/go";


const Project = () => {
  return (
    <div>
      <div className='mx-32 mt-10 font-establish-retro max-[935px]:mx-16'>
        <h3 id='project' className='text-xl text-white'><span className='text-[#A47764]'>03. </span>PROJECTS</h3>
        <div>
          <div className='flex gap-10 mt-5'>
            <div>
              <p className='text-white'>PROJECT - 01</p>
              <p className='text-[#A47764]'>TenPaws</p>
              <div className='flex gap-3 mt-2 text-white max-[780px]:flex-col'>
                <img src="/img/tenpawsmain.png" alt="메인화면" className='w-1/2 max-[780px]:w-full'/>
                <div>
                  <p className='my-3 text-xl text-[#A47764]'>프로젝트 개요</p>
                  <p className='flex items-center gap-2'>독거노인분들을 위한 반려동물 매칭 서비스를 만들었습니다</p>
                  <p className='my-3 text-xl text-[#A47764]'>나의 구현 부분</p>
                  <p className='flex items-center gap-2'><GoCheck /> header 구현</p>
                  <p className='px-5'>AI매칭과 마이페이지는 비로그인시 로그인화면으로 이동</p>
                  <p className='flex items-center gap-2 mt-2'><GoCheck /> 반려동물 검색 페이지 구현</p>
                  <p className='px-5'>종류, 연령, 크기를 filter를 사용해 쉽고 빠르게 원하는 동물을 찾을 수 있도록 구현</p>
                  <p className='px-5'>동물의 정보를 자기소개하는것 같이 표현해 감성적인 부분 추가</p>
                  <p className='flex items-center gap-2 mt-2'><GoCheck /> 마이 페이지 구현</p>
                  <p className='px-5'>보호소, 일반유저 분리해 구현</p>
                  <p className='px-5'>정보 수정은 토글창이 나와서 수정 가능하도록 구현</p>
                  <p className='px-5'>나의 정보와 입양 정보를 탭을 나누어 구현</p>
                  <p className='flex items-center gap-2 mt-2'><GoCheck /> 테일윈드를 사용해 반응형 페이지 구현</p>
                </div>
              </div>
              <div className='flex justify-end gap-10 mt-5'>
                <a href="http://3.38.196.10/" className='flex items-center justify-end text-[#A47764] hover:text-[#A89A8E] text-2xl max-[960px]:text-lg'>배포 주소로 이동 <GoArrowRight /></a>
                <a href="https://github.com/gomsbft/WEB1_2_TenPaws_FE" className='flex items-center justify-end text-[#A47764] hover:text-[#A89A8E] text-2xl max-[960px]:text-lg'>깃허브로 이동 <GoArrowRight /></a>
              </div>
            </div>
          </div>
          <div className='flex gap-10 mt-5'>
            <div>
              <p className='text-white'>PROJECT - 02</p>
              <p className='text-[#A47764]'>Fillog</p>
              <div className='flex justify-between mt-2 text-white max-[780px]:flex-col'>  
                <div>
                  <p className='my-3 text-xl text-[#A47764]'>프로젝트 개요</p>
                  <p className='flex items-center gap-2'>영화 감상평 / 리뷰 작성 공개 블로그</p>
                  <p className='my-3 text-xl text-[#A47764]'>나의 구현 부분</p>
                  <p className='flex items-center gap-2'><GoCheck />회원가입 페이지 및 기능 구현</p>
                  <p className='flex items-center gap-2 mt-2'><GoCheck />로그인 페이지 및 기능 구현</p>
                  <p className='px-5'>로그인시 admin과 user 사이드바 다르게 표시</p>
                  <p className='px-5'>회원가입 및 로그인 시 토큰 발행 기능 구현</p>
                  <p className='flex items-center gap-2 mt-2'><GoCheck />Vue를 사용해 프로젝트 진행</p>
                  <p className='flex items-center gap-2 mt-2'><GoCheck />express와 mongoDB를 사용해 서버구축</p>
                </div>
                <img src="/img/fillog.png" alt="메인화면" className='w-1/4 max-[780px]:w-full'/>
              </div>
              <div className='flex justify-end gap-10 mt-5'>
                <a href="https://github.com/gomsbft/NFE1-2-3-fillog" className='flex items-center justify-end text-[#A47764] hover:text-[#A89A8E] text-2xl max-[960px]:text-lg'>클라이언트 코드<GoArrowRight /></a>
                <a href="https://github.com/gomsbft/back_vue" className='flex items-center justify-end text-[#A47764] hover:text-[#A89A8E] text-2xl max-[960px]:text-lg'>서버 코드<GoArrowRight /></a>
              </div>
            </div>
          </div>
          <div className='flex gap-10 mt-5'>
            <div>
              <p className='text-white'>PROJECT - 03</p>
              <p className='text-[#A47764]'>FitPlace</p>
              <div className='flex gap-3 mt-2 text-white max-[780px]:flex-col'>
                <img src="/img/fitplace.png" alt="메인화면" className='w-1/4 max-[780px]:w-full'/>
                <div>
                  <p className='my-3 text-xl text-[#A47764]'>프로젝트 개요</p>
                  <p className='flex items-center gap-2'>팀 스포츠를 좋아하지만 함께할 사람을 구하지 못해 운동을 포기하는 문제를 해결하고자 팀 모집 서비스를 만들었습니다</p>
                  <p className='my-3 text-xl text-[#A47764]'>나의 구현 부분</p>
                  <p className='flex items-center gap-2'><GoCheck /> 검색 기능 구현</p>
                  <p className='px-5'>filter를 사용해 원하는 게시글 및 회원검색 기능 구현</p>
                  <p className='flex items-center gap-2 mt-2'><GoCheck /> API를 사용해 정보 저장과 불러오기 기능 구현</p>
                  <p className='flex items-center gap-2 mt-2'><GoCheck /> yarn을 사용해 의존성 설치와 관리를 진행</p>
                  <p className='flex items-center gap-2 mt-2'><GoCheck /> 테일윈드를 사용해 페이지 구현</p>
                </div>
              </div>
              <div className='flex justify-end gap-10 mt-5 mb-32'>
                <a href="https://github.com/gomsbft/NFE1_2_FitPlace" className='flex items-center justify-end text-[#A47764] hover:text-[#A89A8E] text-2xl max-[960px]:text-lg'>깃허브로 이동 <GoArrowRight /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;