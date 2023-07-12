import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-white text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-blue-600 text-black'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold text-black'>
              <p>I am Amal, a recent graduate of the coding bootcamp at the University of Washington. </p>
            </div>
            <div className='text-black'>
              <p>Currently, I am studying programming with a strong aspiration to become a full stack developer. Through the bootcamp, I gained a solid foundation in both front-end and back-end development, equipping me with essential skills and knowledge. To further enhance my abilities, I am immersing myself in a comprehensive curriculum that covers a wide range of programming concepts. My dedication to continuous learning drives me to seek opportunities where I can apply my skills and gain real-world experience. I am particularly passionate about becoming a full stack developer because it allows me to handle both the front-end and back-end aspects of a project. This versatility is crucial in creating well-rounded and impactful software solutions. Driven by my determination to excel in the field of software development, I am committed to honing my skills and expanding my knowledge. I actively engage in various projects and seek out challenges to continuously improve my abilities. With my strong foundation, unwavering drive, and eagerness to learn, I am confident that I will make a significant impact in the world of software development. I am excited about the opportunities that lie ahead and look forward to contributing to the growth and innovation within the industry.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
