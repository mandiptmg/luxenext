import { Facebook, Linkedin, Mail, Twitter } from "lucide-react";
import { NavLink } from "react-router-dom";

const team = [
  {
    name: "Alice Johnson",
    position: "CEO",
    img: "",
    socials: {
      linkedin: "https://linkedin.com/in/alicejohnson",
      twitter: "https://twitter.com/alicejohnson",
      facebook: "https://facebook.com/alicejohnson",
      email: "alicejohnson@gmail.com",
    },
  },
  {
    name: "Michael Smith",
    position: "CTO",
    img: "",
    socials: {
      linkedin: "https://linkedin.com/in/michaelsmith",
      twitter: "https://twitter.com/michaelsmith",
      facebook: "https://facebook.com/michaelsmith",
      email: "michaelsmith@gmail.com",
    },
  },
  {
    name: "Emma Williams",
    position: "Head of Marketing",
    img: "",
    socials: {
      linkedin: "https://linkedin.com/in/emmawilliams",
      twitter: "https://twitter.com/emmawilliams",
      facebook: "https://facebook.com/emmawilliams",
      email: "emmawilliams@gmail.com",
    },
  },
  {
    name: "John Doe",
    position: "Lead Designer",
    img: "",
    socials: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      facebook: "https://facebook.com/johndoe",
      email: "johndoe@gmail.com",
    },
  },
];

const TeamList = () => (
  <div className="">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start p-4 gap-4  flex-wrap">
      {team.map((member) => (
        <div
          className="hover:bg-gradient-to-r from-[#00b4d8] to-sky-600 transition-all duration-1000 ease-in-out  hover:text-white bg-gray-300  rounded-lg"
          key={member.name}
        >
          <img
            src={
              member.img ||
              "https://i.pinimg.com/564x/db/63/46/db6346a3f6f40ea88428797599a2c70e.jpg"
            }
            alt={member.name}
            className=" team transition-all duration-700 ease-in-out  w-full  h-64 object-cover rounded-t-lg object-top "
          />
          <div className="p-3 text-center">
            <h3 className="text-lg tracking-widest font-semibold font-sans">
              {member.name}
            </h3>
            <span className="text-sm font-sans">{member.position}</span>
            <div className="flex gap-4  justify-center py-3 items-center">
              <NavLink
                className="rounded-full border p-2 hover:text-[#00b4d8] hover:bg-white  duration-700 transition-all ease-in-out "
                to={member.socials.linkedin}
              >
                <Linkedin />
              </NavLink>
              <NavLink
                className="rounded-full border p-2 hover:text-[#00b4d8] hover:bg-white  duration-700 transition-all ease-in-out "
                to={member.socials.twitter}
              >
                <Twitter />
              </NavLink>
              <NavLink
                className="rounded-full border p-2 hover:text-[#00b4d8] hover:bg-white  duration-700 transition-all ease-in-out "
                to={member.socials.facebook}
              >
                <Facebook />
              </NavLink>
              <NavLink
                className="rounded-full border p-2 hover:text-[#00b4d8] hover:bg-white  duration-700 transition-all ease-in-out "
                to={`mailto:${member.socials.email}`}
              >
                <Mail />
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TeamList;
