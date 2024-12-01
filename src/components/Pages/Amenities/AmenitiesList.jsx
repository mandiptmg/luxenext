import { Amenities } from "../../../data/data";

const AmenitiesList = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Amenities</h1>
      {Object.entries(Amenities).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-semibold capitalize text-blue-600 mb-4">
            {category.replace(/([A-Z])/g, " $1")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-4 rounded-lg flex items-start space-x-4"
              >
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    <span className="font-semibold">Location:</span>{" "}
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AmenitiesList;
