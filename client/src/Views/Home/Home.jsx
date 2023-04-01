import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
// import ChatBot from "../../Components/ChatBot/ChatBot";
import ButtonChatBot from "../../Components/ChatBot/ButtonChatBot/ButtonChatBot";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRating } from "../../state/redux/actions/actions";

const Home = () => {
  const container =
    "max-w-[1200px] m-auto flex flex-col justify-center items-center";
  const styleSectionPrimary =
    "flex flex-col bg-slate-100 justify-center items-center h-screen";
  const styleSectionSecondary =
    "flex flex-col  justify-center items-center h-screen bg-white";
  const styleText = "text-center text-6xl font-black";

  const clients = useSelector((state) => state.ratings);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRating());
  }, [dispatch]);

  console.log(clients, "segundo");

  // const clients = [
  //   {
  //     id: 4,
  //     name: "Juan",
  //     image:
  //       "https://img.freepik.com/foto-gratis/joven-confiado_1098-20868.jpg?w=2000",
  //     rating: 5,
  //     commentary:
  //       "estuvo bien sdgsgfssdfsdfdsfdsfsdf asdf sad fasfsad f fs fasf dsa  fsdf sdfsd fsda fsdf asf",
  //   },
  //   {
  //     id: 4,
  //     name: "Juan",
  //     image:
  //       "https://img.freepik.com/foto-gratis/joven-confiado_1098-20868.jpg?w=2000",
  //     rating: 5,
  //     commentary: "estuvo bien",
  //   },
  //   {
  //     id: 4,
  //     name: "Juan",
  //     image:
  //       "https://img.freepik.com/foto-gratis/joven-confiado_1098-20868.jpg?w=2000",
  //     rating: 3,
  //     commentary: "estuvo bien",
  //   },
  // ];

  const {
    loginWithRedirect,
    loginWithPopup,
    logout,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/authorization",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  return (
    <div className="w-full">
      {/* <Link to={"/home/login"}> */}
      <button
        onClick={handleLogin}
        type="submit"
        className="bg-sky-400 text-white rounded overflow-hidden px-16 py-3 fixed right-10 top-10 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300"
      >
        {" "}
        Login
      </button>
      {/* </Link> */}

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
              className="flex-row m2-2 w-m p-3 text-white rounded bg-sky-400 px-16 py-3 mt-20 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300"
            >
              {" "}
              Register now!
            </button>
          </Link>
        </div>
      </section>

      <section className={styleSectionSecondary}>
        <div className={container}>
          <div className="flex flex-col justify-center items-center gap-8">
            <h2 className={styleText}>About us...</h2>
            <p className="text-xl text-center">
              At StaffSphere, we believe that managing your human resources
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
              perfect solution for businesses with remote teams. At StaffSphere,
              we're always looking to the future. We're constantly updating and
              improving our tool to meet the evolving needs of our customers and
              stay ahead of the curve in the HR management space. With our tool,
              you can rest assured that your human resources are in good hands.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col bg-slate-100 justify-center items-center h-screen">
        <h2 className={`${styleText} py-10`}>Some of our clients</h2>
        <div className="max-w-[1200px] m-auto ">
          <div className="flex  justify-center items-start gap-10 h-auto flex-wrap">
            {clients !== undefined &&
              clients?.map(({ name, image, score, comment }) => {
                return (
                  <div className="flex flex-col justify-center items-center border-sky-400 p-5 bg-white w-[300px] border-2 rounded-md">
                    <h3 className="text-2xl pb-1">{name}</h3>

                    <div className="relative flex flex-col justify-center items-center">
                      <img
                        className="object-cover rounded-md"
                        src={image}
                        alt=""
                      />
                      <div className="absolute -bottom-3">
                        <div className="flex">
                          {[...Array(score).fill(0)].map((start, i) => {
                            return (
                              <label className="">
                                <AiFillStar
                                  size={30}
                                  className={`text-yellow-200 transition-all duration-200
                            `}
                                />
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="text-center block mt-8 h-32 ">
                      <p className="">{comment}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <section className={styleSectionSecondary}>
        <div className={container}>
          <div>
            <h2 className={styleText}>Why StaffSphere...</h2>
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
              </p>
              <br />
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

      <section>
        <div>
          <ButtonChatBot />
        </div>
      </section>

      <footer className="bg-gray-200">
        <div className="flex flex-row">
          <div className="w-1/3 flex justify-center items-center">
            <img
              src="https://res.cloudinary.com/dtqhqhc9e/image/upload/v1679883961/Images/mqu3wnxbcotfu4t0gbqx.png"
              alt="logo"
            />
          </div>

          <div className="flex flex-col items-center justify-center w-1/3 text-lg">
            <h5 className="">Contact Us</h5>
            <p>email@StaffSphere.com</p>
            <p className="">tel: +54-11-555-1234</p>
          </div>

          <div className="flex flex-col items-center justify-center w-1/3 text-lg">
            <h5 className="">Send us a review</h5>
            <p>Link a un form para cargar.</p>

            <span>
              <AiFillInstagram size={23}></AiFillInstagram>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

//Register to payment
//About us
//process description/screenshots
//Contacts
