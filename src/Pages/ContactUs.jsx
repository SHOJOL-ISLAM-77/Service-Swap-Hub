import { useRef } from "react";
import MapComponent from "../Components/Location";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import axios from "axios";
import Swal from "sweetalert2";

const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s4sxxex",
        "template_ugtwf58",
        form.current,
        "okMXDPXJsfk3t1XOb"
      )
      .then(
        (result) => {
          if (result) {
            toast.success("Success!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const message = form.message.value;
    const formData = {name,image,message};

    console.log(formData);
        try {
            const response = await axios.post("http://localhost:7000/api/v1/review-posts", formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data.acknowledged);
            if (response.data.acknowledged) {
                Swal.fire({
                    title: "Good job!",
                    text: "You add a service!",
                    icon: "success"
                })
            }
            form.reset()
        } catch (error) {
            console.log(error);
        }

  }
  return (
    <div className="container mx-auto my-[100px] items-center">
      <div className="flex gap-12 items-center">
        <div className="flex-1">
          <h1 className="text-center text-4xl font-bold my-3">
            Our head office !
          </h1>
          <MapComponent />
        </div>
        <div className="max-w-md mx-auto flex-grow">
          <h1 className="text-center text-4xl font-bold my-3">
            Send a message for us
          </h1>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="flex justify-between">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  name="user_name"
                  type="text"
                  className="mt-1 h-10 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  name="user_email"
                  type="email"
                  className="mt-1 block h-10 w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-evenly max-w-lg mx-auto mt-20">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                name="name"
                type="text"
                className="mt-1 h-10 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                message
              </label>
              <input
                name="image"
                type="text"
                className="mt-1 block h-10 w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 text-center"
            >
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              className="my-3 block mx-auto w-[512px] border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-[200px] mx-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
