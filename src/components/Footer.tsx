'use client';

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 mt-16">

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">

            <div>
                <h2 className=" text-white text-lg font-semibold mb-4">About Us</h2>
                <p className="mb-4">
                    I specialize in designing user interfaces to create seamless and visually appealing experiences. Proficient in HTML, CSS, and JavaScript, I go beyond the basics by incorporating additional UI libraries. Excited to bring innovation to every project I undertake!
                </p>
            </div>

            <div>
                <h2 className=" text-white text-lg font-semibold mb-4">Quick Links</h2>
                <ul>
                    <li>
                        <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-white transition-colors duration-300">About</a>
                    </li>
                    <li>
                        <a href="/projects" className="hover:text-white transition-colors duration-300">Projects</a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:text-white transition-colors duration-300">Contact</a>
                    </li>
                </ul>
            </div>

            <div>
                <h2 className=" text-white text-lg font-semibold mb-4">Follow Us</h2>
                <div className="flex space-x-4">

                    <ul>

                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100088888142992&mibextid=ZbWKwL" target="_blank" className="hover:text-white transition-colors duration-300">
                                Facebook
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/luckyg_777?igsh=Zm43cGlscWgyNHlz" target="_blank" className="hover:text-white transition-colors duration-300">
                                Instagram
                            </a>
                        </li>

                        <li>
                            <a href="https://x.com/Lucky_Bairwa_20?t=UOfJqeNpFShvXEosa5KmSg&s=09" target="_blank" className="hover:text-white transition-colors duration-300">
                                Twitter
                            </a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/in/lucky-bairwa-2a2996262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:text-white transition-colors duration-300">
                                LinkedIn
                            </a>
                        </li>

                        <li>
                            <a href="https://github.com/LuckyBairwa" target="_blank" className="hover:text-white transition-colors duration-300">
                                GitHub
                            </a>
                        </li>

                    </ul>

                </div>
            </div>

            <div>
                <h2 className=" text-white text-lg font-semibold mb-4">Contact Us</h2>
                <p>Jaipur, Rajasthan</p>
                <p>Jaipur, 302022</p>
                <p>Email: luckyshairwal@gmail.com</p>
                <p>Phone: +91 82786 48632</p>
            </div>

        </div>
        <p className="text-center text-xs pt-8">
            © A portfolio website made with Next.js, Aceternity UI library and Tailwind CSS by Lucky Shairwal in 2024.
        </p>
    </footer>
  )
}

export default Footer