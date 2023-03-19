import { Link } from "react-router-dom";
import {AiFillInstagram} from 'react-icons/ai';


const Home = () => {
  return (
    <>
      <div className="text-end">
        <Link to={'/home/login'}>
            <button type="submit" className="m2-2 p-3 bg-sky-700 text-white rounded"> Login
            </button>
        </Link>
      </div>

      <section className="text-center">
        <div className=''>
          <h1 className="text ">
            Don't waste time and get started with the best staff manager application!
          </h1>
        </div>
          <Link to={'/home/login/register'}>
        <div className="text-center w-40 bg-sky-700 inline-block">
          <button type="submit" className="flex-row m2-2 w-m p-3 text-white"> Register now!
          </button>
        </div>
          </Link>          
      </section>

      <section className="h-[200px] text-center">
        <div className="">
          <h2>
          About us...
          </h2>
          <p>
          We are a company fucussed on HR managment with more than 20 years of experience...
          
          </p>
        </div>
      </section>

      <section className="h-[400px] text-center">
        <div>
          <h2>
          Why StaffPhere...
          </h2>
          <p>
          Our system allows you to experience the easiest way to manage your most valuable assets in the company in a very intuitive way.
          </p>
          <p>
          Record your staff data in the Employees panel
          </p>
          <p>
          Add and share important dates for the campany
          </p>
          <p>
          Send reminders and announcements to an employee or in a bulk
          </p>
          <p>
          Easily navigate through your staff, sort them and click for full details...
          </p>
        </div>
      </section>

      <footer className="bg-slate-600 px-4 py-6">
        <div className="container ml-2 mr-1">
          <div className="flex justify-between bg-yellow-400">
            
            <div className="w-1/3">
              <div className="text-center text-white bg-slate-400 px-10">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSXRffPuFBvvRFjhn46hKBxJATOfFLl-VkWA&usqp=CAU" alt="" />
              </div>
            </div>
            
            <div className="w-2/6 text-left pl-12 text-white bg-blue-400">
              <h5 className="uppercase mb-6 font-bold">Contact Us</h5>
              <p>
                email@staffPhere.com
              </p>
              <p className="pt-2">
                tel: +54-11-555-1234
              </p>
            </div>

            <div className="w-4/6 text-left text-white bg-blue-800">
              <h5 className="uppercase mb-6 font-bold">Send us a review</h5>
              <p>
                Link a un form para cargar.
              </p>
              <button className="flex pt-3 bg-slate-200 text-black">
                instadestaff <span><AiFillInstagram className="pt-1" size={23}></AiFillInstagram></span> 
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
    
  )
}


export default Home;


//Register to payment
//About us
//process description/screenshots
//Contacts

