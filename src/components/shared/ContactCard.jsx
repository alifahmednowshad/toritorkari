import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { LuClock8 } from "react-icons/lu";

const ContactCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
      <div className="text-center flex flex-col">
        <div className="text-green-600 self-center">
          <IoCallOutline size={40} />
        </div>
        <h4>Phone</h4>
        <p className="text-xl ">+01-3-8888-6868</p>
      </div>
      <div className="text-center flex flex-col">
        <div className="text-green-600 self-center">
          <IoLocationOutline size={40} />
        </div>
        <h4>Address</h4>
        <p className="text-xl ">60-49 Road 11378 New York</p>
      </div>
      <div className="text-center flex flex-col">
        <div className="text-green-600 self-center">
          <LuClock8 size={40} />
        </div>
        <h4>Open time </h4>
        <p className="text-xl ">10:00 am to 23:00 pm</p>
      </div>
      <div className="text-center flex flex-col">
        <div className="text-green-600 self-center">
          <IoIosMail size={40} />
        </div>
        <h4 >Email</h4>
        <p className="text-xl ">hello@toritorkari.com</p>
      </div>
    </div>
  );
};

export default ContactCard;
