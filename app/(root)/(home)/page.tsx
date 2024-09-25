import MeetingTypeList from '@/components/ui/MeetingTypeList';
import React from 'react'

const Home = () => {
    const date = new Date();

   
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 

  
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();

   
    const time = `${hours}:${minutes} ${ampm}`;
    const fullDate = `${dayName}, ${monthName} ${day}, ${year}`;
    return (
        <section className=' flex size-full flex-col gap-10 text-white'>
            <div className=" h-[300px] w-full rounded-[20px] bg-hero bg-cover">
                <div className=" flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
                    <h2 className=' glassmorphism max-w[270px] rounded py-2 text-center text-base font-normal'>Upcoming Meeting at: 12:30 PM </h2>
                    <div className=" flex flex-col gap-2 ">
                        <h1 className=' text-4xl font-extrabold lg:text-7xl'>
                            {time}
                        </h1>
                        <p className=' text-lg font-medium text-sky-1  lg:text-2xl'>{fullDate}</p>
                    </div>
                </div>
            </div>
            <MeetingTypeList/>
        </section>
    )
}

export default Home