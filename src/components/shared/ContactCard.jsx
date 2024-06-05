import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { LuClock8 } from "react-icons/lu";

const ContactCard = () => {
  return (
    <div className="grid grid-cols-4 gap-8">
      <div className="text-center flex flex-col">
        <div className="text-green-600 self-center">
          <IoCallOutline size={40} />
        </div>
        <h2 className="text-2xl font-bold">Phone</h2>
        <p className="text-xl ">+01-3-8888-6868</p>
      </div>
      <div className="text-center flex flex-col">
        <div className="text-green-600 self-center">
          <IoLocationOutline size={40} />
        </div>
        <h2 className="text-2xl font-bold">Address</h2>
        <p className="text-xl ">60-49 Road 11378 New York</p>
      </div>
      <div className="text-center flex flex-col">
        <div className="text-green-600 self-center">
          <LuClock8 size={40} />
        </div>
        <h2 className="text-2xl font-bold">Open time </h2>
        <p className="text-xl ">10:00 am to 23:00 pm</p>
      </div>
      <div className="text-center flex flex-col">
        <div className="text-green-600 self-center">
          <IoIosMail size={40} />
        </div>
        <h2 className="text-2xl font-bold">Email</h2>
        <p className="text-xl ">hello@toritorkari.com</p>
      </div>
    </div>
  );
};

export default ContactCard;
