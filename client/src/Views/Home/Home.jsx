import { Link } from "react-router-dom";
import {AiFillInstagram} from 'react-icons/ai';


const Home = () => {

  const container =
    "max-w-[1200px] m-auto flex flex-col justify-center items-center";
  const styleSectionPrimary = 'flex flex-col bg-slate-100 justify-center items-center h-screen'
  const styleSectionSecodary = 'flex flex-col  justify-center items-center h-screen'
  const styleText = "text-center text-6xl font-black";

  return (
    <div className="">
      <Link to={"/home/login"}>
        <button
          type="submit"
          className="bg-sky-700 text-white rounded overflow-hidden px-16 py-3 fixed right-10 top-10 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600"
        >
          {" "}
          Login
        </button>
      </Link>

      <section className={styleSectionPrimary}>
        <div className={container}>
          <div className="">
            <h1 className={styleText}>
              Don't waste time and get started with the best staff manager
              application!
            </h1>
          </div>
          <Link to={"/home/login/register"}>
            <button
              type="submit"
              className="flex-row m2-2 w-m p-3 text-white rounded bg-sky-700 px-16 py-3 mt-20 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600"
            >
              {" "}
              Register now!
            </button>
          </Link>
        </div>
      </section>

      <section className={styleSectionSecodary}>
        <div className={container}>
          <div className="flex flex-col justify-center items-center gap-8">
            <h2 className={styleText}>About us...</h2>
            <p className="text-xl text-center">
              At StaffPhere, we believe that managing your human resources
              should be easy, intuitive, and stress-free. That's why we've
              developed a cutting-edge HR management tool that will make it
              eaasy for you. Our mission is to help businesses of all sizes
              maximize their human resources potential. We understand that
              managing employees can be time-consuming and complicated, which is
              why we've created a tool that simplifies the process and saves you
              valuable time and resources. Our team of experienced HR
              professionals and software developers have worked tirelessly to
              create a tool that's easy to use, reliable, and customizable to
              your specific needs. We're committed to providing top-notch
              customer service and support to ensure that your HR management
              tool works seamlessly for your business. Our software is
              cloud-based, secure, and accessible from anywhere, making it the
              perfect solution for businesses with remote teams. At StaffPhere,
              we're always looking to the future. We're constantly updating and
              improving our tool to meet the evolving needs of our customers and
              stay ahead of the curve in the HR management space. With our tool,
              you can rest assured that your human resources are in good hands.
            </p>
          </div>
        </div>
      </section>

      <section className={styleSectionPrimary}>
        <div className={container}>
          <div>
            <h2 className={styleText}>Why StaffPhere...</h2>
            <div className="text-xl mt-8 text-center">
              <p>
                Our system allows you to experience the easiest way to manage
                your most valuable assets in the company in a very intuitive
                way.
              </p>
              <p>Record your staff data in the Employees panel</p>
              <p>Add and share important dates for the campany</p>
              <p>
                Send reminders and announcements to an employee or in a bulk
              </p>
              <p>
                Easily navigate through your staff, sort them and click for full
                details...
              </p><br />
              <p>
                Expertise: Our team of experienced HR professionals has the
                knowledge and expertise to handle all aspects of HR management.
                We keep up to date with the latest HR trends and regulations,
                and we can help businesses navigate complex HR issues.
                Time-saving: Our HR management tool automates time-consuming
                administrative tasks, freeing up valuable time for businesses to
                focus on other important aspects of their operations.
                Customizable: Our tool is customizable to meet the specific
                needs of each business. We work closely with our clients to
                understand their unique HR requirements and provide tailored
                solutions. Cost-effective: Our HR management tool is affordable
                and provides a cost-effective solution for businesses looking to
                manage their human resources more efficiently. Excellent
                customer service: We pride ourselves on providing top-notch
                customer service and support. Our team is always available to
                answer questions and provide assistance whenever needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-600 px-4 py-6">
        <div className="container ml-2 mr-1">
          <div className="flex justify-between bg-yellow-400">
            <div className="w-1/3">
              <div className="text-center text-white bg-slate-400 px-10">
                {/* <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSXRffPuFBvvRFjhn46hKBxJATOfFLl-VkWA&usqp=CAU"
                  alt=""
                /> */}
              </div>
            </div>

            <div className="w-2/6 text-left pl-12 text-white bg-blue-400">
              <h5 className="uppercase mb-6 font-bold">Contact Us</h5>
              <p>email@staffPhere.com</p>
              <p className="pt-2">tel: +54-11-555-1234</p>
            </div>

            <div className="w-4/6 text-left text-white bg-blue-800">
              <h5 className="uppercase mb-6 font-bold">Send us a review</h5>
              <p>Link a un form para cargar.</p>
              <button className="flex pt-3 bg-slate-200 text-black">
                instadestaff{" "}
                <span>
                  <AiFillInstagram className="pt-1" size={23}></AiFillInstagram>
                </span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default Home;


//Register to payment
//About us
//process description/screenshots
//Contacts

