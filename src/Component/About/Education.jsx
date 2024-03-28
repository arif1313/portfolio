import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FaUserGraduate } from "react-icons/fa6";

import { FreeMode, Pagination } from 'swiper/modules';


const Education = () => {
    const [educations, setEducations] = useState([]);

    useEffect(() => {
        // Fetch data inside useEffect to avoid fetching on every render
        fetch('/EducationData.json')
            .then((response) => response.json())
            .then((data) => setEducations(data.education)) // Assuming the JSON structure includes an "education" array
            .catch((error) => console.error('Failed to load education data:', error));
    }, []); // Empty dependency array means this effect runs once on mount
    // console.log(Object.keys(educations[0]).join(','))
    return (
       
         

            <div className='col-span-2 '>
                 <Swiper
                  
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
          type: 'progressbar',
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
                    {educations.map((edu, index) => (
                        // Make sure to provide a unique key for each child
                        <SwiperSlide key={index}>


                            <div className='flex items-center shadow-md border-2 border-hoverButton rounded-md p-2'>

                                <div>
                                    <h2 className='rotate-90 text-xl font-bold text-textYallow'>{edu.startYear}-{edu.endYear}</h2>
                                </div>
                                <div className=''>
                                    <div className='flex gap-5 mb-5'>
                                        <FaUserGraduate className='text-3xl'></FaUserGraduate>
                                        <h1 className='text-2xl text-center font-bold text-textYallow '> {edu.level}</h1>
                                    </div>
                                    <h3 className='mb-2'><span className='font-bold'>From : </span>{edu.institution}</h3>
                                    <h3 className='mb-2'>{edu.location}</h3>
                                    <h3 className='mb-2'><span className='font-bold'>Subject : </span>{edu.group}</h3>
                                    <h3><span className='font-bold'>Grade : </span>{edu.grade}</h3>


                                </div>


                            </div>



                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
      

    );
};

export default Education;
