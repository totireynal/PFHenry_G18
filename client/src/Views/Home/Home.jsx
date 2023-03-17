import { Link } from "react-router-dom";
// import styles from './Home.module.css';

// import Button from "../../Components/Button";

const Home = () => {
  return (
    <>
      <div className="text-end">
        <Link to={'/home/login'}>
          <div className="text-center w-40 bg-sky-700 inline-block">
            <button type="submit" className="m2-2 p-3 bg-sky-700 text-white"> Login
            </button>
          </div>
        </Link>
      </div>

      <section className="text-center">
        <div className=''>
          <h1>
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

      <footer className="">
        <div>
          <h2>Contact Us</h2>
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

