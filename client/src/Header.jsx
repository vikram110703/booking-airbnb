import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";

export const Header = () => {
    const {user}=useContext(UserContext);
    return (
        <header className=' flex justify-between' >
            <Link to={'/'} className='flex gap-1 items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                    <path d="M 25 3 C 22.278263 3 19.522066 4.4268292 18.099609 7.2148438 C 15.093409 13.052195 11.903343 19.320627 9.3828125 24.386719 C 8.1223752 26.92011 7.0290661 29.153447 6.2089844 30.884766 C 5.3889026 32.616084 4.861567 33.764956 4.6464844 34.451172 L 4.6445312 34.453125 L 4.6445312 34.455078 C 4.3577186 35.38722 4.0507812 36.481126 4.0507812 37.710938 C 4.0507781 42.832327 8.2305224 47 13.359375 47 C 19.03288 47 23.036205 42.461271 24.912109 40.310547 L 25 40.423828 L 25.087891 40.310547 C 26.963795 42.461271 30.96712 47 36.640625 47 C 41.769478 47 45.949219 42.832422 45.949219 37.710938 C 45.949219 36.481125 45.642282 35.38722 45.355469 34.455078 L 45.355469 34.453125 L 45.353516 34.451172 C 45.13848 33.76505 44.611097 32.616084 43.791016 30.884766 C 42.970934 29.153447 41.877624 26.92011 40.617188 24.386719 C 38.096657 19.320627 34.906591 13.052195 31.900391 7.2148438 L 31.898438 7.2128906 C 30.475651 4.4265424 27.720912 3 25 3 z M 25 5 C 27.038263 5 29.041597 6.0130146 30.119141 8.125 L 30.119141 8.1269531 L 30.121094 8.1269531 C 33.124534 13.958924 36.314 20.224126 38.828125 25.277344 C 40.085188 27.803952 41.173832 30.029053 41.984375 31.740234 C 42.793941 33.449352 43.342474 34.724209 43.443359 35.044922 C 43.716547 35.93278 43.949219 36.820748 43.949219 37.710938 C 43.949172 41.749456 40.691772 45 36.640625 45 C 32.064075 45 28.191648 40.852578 26.308594 38.748047 L 27.367188 37.394531 C 29.069161 35.216293 32 31.089972 32 26.958984 C 32 23.127032 28.847531 20 25 20 C 21.152469 20 18 23.127032 18 26.958984 C 18 31.099428 20.931726 35.222186 22.632812 37.396484 L 23.691406 38.75 C 21.80799 40.854873 17.935204 45 13.359375 45 C 9.3082276 45 6.0507813 41.749453 6.0507812 37.710938 C 6.0507812 36.820749 6.2834534 35.93278 6.5566406 35.044922 C 6.6575261 34.724209 7.2060594 33.449352 8.015625 31.740234 C 8.8261683 30.029053 9.9148123 27.803952 11.171875 25.277344 C 13.686 20.224126 16.875466 13.958924 19.878906 8.1269531 L 19.880859 8.1269531 L 19.880859 8.125 C 20.958356 6.0130146 22.961737 5 25 5 z M 25 22 C 27.770469 22 30 24.218937 30 26.958984 C 30 30.069996 27.391041 34.116301 25.791016 36.164062 L 25 37.177734 L 24.207031 36.164062 C 22.608118 34.120362 20 30.082541 20 26.958984 C 20 24.218937 22.229531 22 25 22 z"></path>
                </svg>
                <span className='font-bold text-xl'>airbnb</span>
            </Link>
            <div className='flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300'>
                <div>Anywhere</div>
                <div className='border-l border-gray-300'></div>
                <div>Any week</div>
                <div className='border-l border-gray-300'></div>
                <div>Add guests</div>

                <button className='bg-primary text-white p-1 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
            <Link to={user?'/account':'/Login'} className='flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <div className='bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6  ">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                    </svg>

                </div>
                {user&&(
                    <div>
                        {user.name}
                    </div>
                )}
            </Link>
        </header>
    );
};