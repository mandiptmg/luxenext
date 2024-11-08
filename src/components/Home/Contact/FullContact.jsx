import ContactForm from "./ContactForm"

const FullContact = () => {
  return (
    <div>
          <div className="grid lg:grid-cols-2 gap-3  p-10 bg-gray-100 my-7">
          <div>
            <div className="flex flex-col items-center justify-center bg-gray-100 py-12 px-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Contact Us
              </h2>
              <p className="text-lg text-gray-600 text-center mb-10 max-w-md">
                Experience seamless support and top-tier service from our team.
                We’re here to assist you with innovative solutions and dedicated
                attention to detail.
              </p>

              {/* Contact Info */}
              <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg space-y-6">
                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <span className="text-blue-500 text-2xl">📞</span>
                  <div>
                    <h3 className="text-gray-700 font-semibold text-lg">
                      Call Us Now
                    </h3>
                    <p className="text-gray-600">+980 123 4567 890</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <span className="text-blue-500 text-2xl">✉️</span>
                  <div>
                    <h3 className="text-gray-700 font-semibold text-lg">
                      Email Us
                    </h3>
                    <p className="text-gray-600">example@gmail.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4">
                  <span className="text-blue-500 text-2xl">📍</span>
                  <div>
                    <h3 className="text-gray-700 font-semibold text-lg">
                      Our Location
                    </h3>
                    <p className="text-gray-600">
                      Hetauda-3, Basamadi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
    </div>
  )
}

export default FullContact