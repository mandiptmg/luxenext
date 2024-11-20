export const Paths = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    {
      id: 3,
      name: "Rooms",
      subItems: [
        { id: 1, name: "Room", path: "/rooms/room" },
        { id: 2, name: "Find Room", path: "/rooms/booking-room" },
        { id: 3, name: "Room Details", path: "/rooms/room-details" },
      ],
    },
    { id: 4, name: "Reservations", path: "/reservations" },
    { id: 5, name: "Contact Us", path: "/contact" },
  ];
  
export const RoomDetails = [
    {
      type: "Small Room",
      location: "Hotel Rome",
      capacity: "1 Guest",
      size: "15 ft",
      rate:5,
      pricePerNight: "$56",
      weekPrice: "Available",
      description: "Cras malesuada mauris tortor, id tempus mauris blandit sit amet. Morbi a velit efficitur, porttitor metus et, interdum nunc.",
      services: [
        { name: "Swimming Pool", icon: "🏊‍♂️" },
        { name: "Television", icon: "📺" },
        { name: "No Smoking", icon: "🚭" },
        { name: "Private Bathroom", icon: "🚿" },
      ],
    },
    {
      type: "Large Room",
      location: "Hotel Rome",
      capacity: "2 Guests",
      size: "25 ft",
      rate:5,
      pricePerNight: "$75",
      weekPrice: "Available",
      description: "Aenean ut facilisis felis. Cras tincidunt elementum neque, id viverra magna viverra et. Nam tincidunt urna sed urna vehicula fringilla.",
      services: [
        { name: "Swimming Pool", icon: "🏊‍♂️" },
        { name: "Television", icon: "📺" },
        { name: "No Smoking", icon: "🚭" },
        { name: "Private Bathroom", icon: "🚿" },
        { name: "Free Wi-Fi", icon: "📶" },
      ],
    },
    {
      type: "Small Apartment",
      location: "Rome City Center",
      capacity: "3 Guests",
      size: "30 ft",
      rate:5,

      pricePerNight: "$90",
      weekPrice: "Available",
      description: "Suspendisse sit amet lectus tristique, condimentum libero vel, porta justo. Proin sit amet porta nibh. Pellentesque leo lorem.",
      services: [
        { name: "Private Bathroom", icon: "🚿" },
        { name: "Kitchenette", icon: "🍳" },
        { name: "Free Wi-Fi", icon: "📶" },
        { name: "Television", icon: "📺" },
      ],
    },
    {
      type: "Studio Apartment",
      location: "Rome Suburbs",
      capacity: "2 Guests",
      size: "28 ft",
      rate:5,

      pricePerNight: "$65",
      weekPrice: "Available",
      description: "Phasellus ut elementum diam. Aliquam erat volutpat. Nunc et facilisis elit. Donec consectetur nibh vel gravida aliquet.",
      services: [
        { name: "Private Bathroom", icon: "🚿" },
        { name: "Television", icon: "📺" },
        { name: "Air Conditioning", icon: "❄️" },
        { name: "No Smoking", icon: "🚭" },
      ],
    },
    {
      type: "Deluxe Room",
      location: "Hotel Venice",
      capacity: "2 Guests",
      size: "20 ft",
      rate:5,

      pricePerNight: "$120",
      weekPrice: "Available",
      description: "Nam vitae turpis in est tristique placerat id sed tortor. Vivamus luctus sed nibh ac cursus. Sed vel ligula non risus.",
      services: [
        { name: "Swimming Pool", icon: "🏊‍♂️" },
        { name: "Television", icon: "📺" },
        { name: "Minibar", icon: "🍹" },
        { name: "Room Service", icon: "🛎️" },
      ],
    },
    {
      type: "Family Apartment",
      location: "Rome Outskirts",
      capacity: "5 Guests",
      size: "50 ft",
      rate:5,

      pricePerNight: "$150",
      weekPrice: "Available",
      description: "Curabitur bibendum dictum nunc, ut elementum nibh efficitur gravida. Phasellus luctus scelerisque libero, nec lobortis tortor volutpat.",
      services: [
        { name: "Private Bathroom", icon: "🚿" },
        { name: "Kitchen", icon: "🍳" },
        { name: "Free Wi-Fi", icon: "📶" },
        { name: "Television", icon: "📺" },
        { name: "Parking", icon: "🅿️" },
      ],
    },
  ];
  