import { useRef } from "react";
import emailjs from "emailjs-com";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('email', form.current.user_email)
        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE,
                process.env.REACT_APP_EMAILJS_TEMPLATE,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC
            )
            .then(
                (result) => {
                    alert("Message sent successfully!");
                    console.log(result);
                },
                (error) => {
                    alert("Failed to send message: " + error.text);
                }
            );

        e.target.reset();
    };

    return (
        <section className="min-h-screen bg-[#07110D] px-6 lg:px-10 py-16 text-white mx-w-[1400px] mx-auto">
          <div  className="">
              {/* Heading */}
            <div className="text-center mb-12 ">
                <h1 className="font-extrabold text-4xl lg:text-5xl mb-4 tracking-wide">
                    Get In <span className="text-[#28E98C]">Touch</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Feel free to reach out for collaborations, freelance projects, or just a friendly hello.
                    I’m always open to discussing new ideas and opportunities.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-6">
                    <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-md hover:shadow-[#28E98C]/30 transition">
                        <h2 className="text-xl font-semibold mb-2">📧 Email</h2>
                        <p className="text-gray-300">arifhossen13131@gmail.com</p>
                    </div>

                    <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-md hover:shadow-[#28E98C]/30 transition">
                        <h2 className="text-xl font-semibold mb-2">📞 Phone</h2>
                        <p className="text-gray-300">+88 017575072833</p>
                    </div>

                    {/* Messenger & WhatsApp */}
                    <div className="flex gap-4 mt-4">
                        <a
                            href="https://m.me/mdarifhossen.sagor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition text-white font-medium"
                        >
                            💬 Messenger
                        </a>
                        <a
                            href="https://wa.me/8801757072833"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 transition text-white font-medium"
                        >
                            📱 WhatsApp
                        </a>
                    </div>
                    <div className="flex justify-around py-10">
                        <div className="border p-1 rounded-full">
                            <a
                                href="https://www.facebook.com/mdarifhossen.sagor"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook className="text-[#54B689] lg:text-3xl md:text-2xl sm:text-2xl" />
                            </a>

                        </div>
                        <div className="border p-1 rounded-full">

                            <a
                                href="https://www.facebook.com/mdarifhossen.sagor/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaX className="text-[#54B689] lg:text-3xl md:text-2xl sm:text-2xl" />
                            </a>

                        </div>
                        <div className="border p-1 rounded-full">
                            <a
                                href="https://github.com/arif1313?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="text-[#54B689] lg:text-3xl md:text-2xl sm:text-2xl" />
                            </a>

                        </div>
                        <div className="border  p-1 rounded-full">
                            <a
                                href="https://www.linkedin.com/in/arifhossen13/"

                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin className="text-[#54B689] lg:text-3xl md:text-2xl sm:text-2xl" />
                            </a>

                        </div>
                    </div>
                </div>


                {/* Contact Form */}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="bg-[#1f1f1f] p-8 rounded-2xl shadow-md space-y-6"
                >
                    <div>
                        <label className="block text-gray-300 mb-2">Name</label>
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Enter your name"
                            className="w-full p-3 rounded-lg bg-[#292929] border border-gray-700 focus:border-[#28E98C] focus:outline-none text-white"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-2">Email</label>
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Enter your email"
                            className="w-full p-3 rounded-lg bg-[#292929] border border-gray-700 focus:border-[#28E98C] focus:outline-none text-white"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-2">Message</label>
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Write your message..."
                            className="w-full p-3 rounded-lg bg-[#292929] border border-gray-700 focus:border-[#28E98C] focus:outline-none text-white"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-[#28E98C] text-black font-bold hover:bg-[#22c97f] transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
          </div>
        </section>
    );
};

export default Contact;
