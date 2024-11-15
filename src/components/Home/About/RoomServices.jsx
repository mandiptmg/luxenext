import { Wifi, Key, Coffee, Droplet } from 'lucide-react'; // Droplet instead of Pool

const services = [
  { name: 'Room Service', icon: <Key /> },
  { name: 'Wi-Fi Internet', icon: <Wifi /> },
  { name: 'Smart Key', icon: <Key /> },
  { name: 'Breakfast', icon: <Coffee /> },
  { name: 'Swimming Pool', icon: <Droplet /> }, // Updated to Droplet
];


const RoomServices = () => {
  return (
    <div className=" p-3 rounded justify-center  flex flex-wrap w-full  items-center gap-4 ">
      {services.map((service) => (
        <div
          key={service.name}
          className="flex flex-col min-w-44  items-center space-x-4 bg-white shadow p-4 rounded-lg"
        >
          <span className="text-[#00b4d8] w-6 h-6">{service.icon}</span>
          <span className="text-gray-700 font-semibold">{service.name}</span>
        </div>
      ))}
    </div>
  );
};

export default RoomServices;
