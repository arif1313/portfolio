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
        <section className="min-h-screen overflow-hidden bg-[#07110d] text-white">
            <div className="mx-auto w-full max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
                {/* Heading */}
                <div className="mb-10 text-center lg:mb-12">
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-[#28e98c]">Let's connect</p>
                    <h1 className="mb-4 text-3xl font-extrabold tracking-wide lg:text-4xl">
                        Get In <span className="text-[#28E98C]">Touch</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-sm leading-7 text-[#b7d9ca] sm:text-base">
                    Feel free to reach out for collaborations, freelance projects, or just a friendly hello.
                    I’m always open to discussing new ideas and opportunities.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                {/* Contact Info */}
                <div className="space-y-5">
                    <div className="rounded-[22px] border border-[rgba(40,233,140,0.12)] bg-[linear-gradient(180deg,#101b18_0%,#060d0b_100%)] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition-shadow duration-300 hover:border-[rgba(40,233,140,0.3)] hover:shadow-[0_18px_38px_rgba(40,233,140,0.07)]">
                        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#28e98c]">Email</p>
                        <h2 className="text-lg font-bold text-white sm:text-xl">Let’s talk about your idea</h2>
                        <p className="mt-2 text-sm leading-7 text-[#b7d9ca]">I’m available for freelance work, collaborations, and frontend development opportunities.</p>
                        <p className="mt-4 text-sm text-[#eefdf6]">arifhossen13131@gmail.com</p>
                    </div>

                    <div className="rounded-[22px] border border-[rgba(40,233,140,0.12)] bg-[linear-gradient(180deg,#101b18_0%,#060d0b_100%)] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition-shadow duration-300 hover:border-[rgba(40,233,140,0.3)] hover:shadow-[0_18px_38px_rgba(40,233,140,0.07)]">
                        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#28e98c]">Phone</p>
                        <h2 className="text-lg font-bold text-white sm:text-xl">Prefer a quick conversation?</h2>
                        <p className="mt-2 text-sm leading-7 text-[#b7d9ca]">Reach me directly and let’s discuss your next product, website, or application.</p>
                        <p className="mt-4 text-sm text-[#eefdf6]">+88 017575072833</p>
                    </div>

                    {/* Messenger & WhatsApp */}
                    <div className="flex flex-wrap gap-3 pt-1">
                        <a
                            href="https://m.me/mdarifhossen.sagor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200 transition hover:bg-blue-500/20"
                        >
                            💬 Messenger
                        </a>
                        <a
                            href="https://wa.me/8801757072833"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-full border border-[#28e98c]/30 bg-[#28e98c]/10 px-4 py-2 text-sm font-medium text-[#28e98c] transition hover:bg-[#28e98c]/20"
                        >
                            📱 WhatsApp
                        </a>
                    </div>
                    <div className="flex gap-3 pt-3">
                        <div className="rounded-full border border-[rgba(40,233,140,0.2)] bg-[#0d1715] p-2">
                            <a
                                href="https://www.facebook.com/mdarifhossen.sagor"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook className="text-xl text-[#28e98c]" />
                            </a>

                        </div>
                        <div className="rounded-full border border-[rgba(40,233,140,0.2)] bg-[#0d1715] p-2">

                            <a
                                href="https://www.facebook.com/mdarifhossen.sagor/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaX className="text-xl text-[#28e98c]" />
                            </a>

                        </div>
                        <div className="rounded-full border border-[rgba(40,233,140,0.2)] bg-[#0d1715] p-2">
                            <a
                                href="https://github.com/arif1313?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="text-xl text-[#28e98c]" />
                            </a>

                        </div>
                        <div className="rounded-full border border-[rgba(40,233,140,0.2)] bg-[#0d1715] p-2">
                            <a
                                href="https://www.linkedin.com/in/arifhossen13/"

                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin className="text-xl text-[#28e98c]" />
                            </a>

                        </div>
                    </div>
                </div>


                {/* Contact Form */}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="rounded-[22px] border border-[rgba(40,233,140,0.12)] bg-[linear-gradient(180deg,#101b18_0%,#060d0b_100%)] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.28)] sm:p-8"
                >
                    <div>
                            <label className="mb-2 block text-sm font-medium text-[#b7d9ca]">Name</label>
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Enter your name"
                            className="w-full rounded-xl border border-white/10 bg-[#0d1715] p-3 text-white outline-none transition focus:border-[#28E98C]"
                            required
                        />
                    </div>

                    <div>
                            <label className="mb-2 block text-sm font-medium text-[#b7d9ca]">Email</label>
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Enter your email"
                            className="w-full rounded-xl border border-white/10 bg-[#0d1715] p-3 text-white outline-none transition focus:border-[#28E98C]"
                            required
                        />
                    </div>

                    <div>
                            <label className="mb-2 block text-sm font-medium text-[#b7d9ca]">Message</label>
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Write your message..."
                            className="w-full rounded-xl border border-white/10 bg-[#0d1715] p-3 text-white outline-none transition focus:border-[#28E98C]"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-[#28E98C] py-3 font-bold text-[#07110d] transition hover:bg-[#71f5b1]"
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
