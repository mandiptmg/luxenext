const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-[#34495e] rounded py-10 px-6">
      <h2 className="text-3xl font-bold mb-6 text-[#00b4d8]">Get In Touch</h2>
      <form className="bg-transparent  md:p-8 w-full max-w-lg space-y-4">
        {/* Name */}
        <div>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#00b4d8]"
            placeholder="Your Name"
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#00b4d8]"
            placeholder="Enter Your Email"
          />
        </div>

        {/* Message */}
        <div>
          <textarea
            id="message"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#00b4d8]"
            placeholder="Write Message"
            rows="4"
          ></textarea>
        </div>

        {/* Send Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-[#00b4d8] text-white font-bold py-2 rounded-md hover:bg-[#41acc2] transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
