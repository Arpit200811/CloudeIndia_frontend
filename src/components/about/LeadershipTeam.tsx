import { Link2, Mail } from "lucide-react";
import NextImage from "next/image";

export default function LeadershipTeam() {
    return (
        <div className="w-full bg-slate-100 py-16 flex justify-center">
            <div className="w-full max-w-[1200px] px-6">
                <div
                    data-aos="fade-down"
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-4xl font-black tracking-tight text-[#111418]">Leadership Team</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">Meet the visionaries steering CloudeIndia towards the next stage of technical innovation.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Leader 1 */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="0"
                        className="group bg-white/40 backdrop-blur-3xl rounded-2xl overflow-hidden border border-white transition-all duration-300 hover:border-primary/50"
                    >
                        <div className="aspect-[0.8] bg-slate-200 relative overflow-hidden">
                            <NextImage
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                                alt="Arjun Mehta"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjaZ-ELPJ1BHi38Sy4YiMmUZoSXmwWer9kdz-cVDA70o47zu_FT8JHqoesCDSFy5_EUlliJHea0PPA7jyGyzeftvPoYu-kcVNIPccgGUbfFb5kiBLtadMQTBHbr2nSkpIFVN_dN2csjqanX1bfwW9PgjLjMSZtmRp10EgtXXZ_QmeYIPhJkympmj51PmGP6mZTT-Wg0x88qwWY5KTH8di0oseWNGADkGz27QlaqTYADyOiSoPkjEHylKmJVky5Zg0443VvtcoKjT56"
                                width={400}
                                height={500}
                                quality={100}
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-xl mb-1 text-[#111418]">Arjun Mehta</h3>
                            <p className="text-primary font-medium text-sm mb-4">Founder & CEO</p>
                            <div className="flex gap-3">
                                <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors">
                                    <Link2 size={16} />
                                </div>
                                <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors">
                                    <Mail size={16} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Leader 2 */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="group bg-white/40 backdrop-blur-3xl rounded-2xl overflow-hidden border border-white transition-all duration-300 hover:border-primary/50"
                    >
                        <div className="aspect-[0.8] bg-slate-200 relative overflow-hidden">
                            <NextImage
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                                alt="Sarah Chen"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY7Qs30dHnSzRSLlAxSpo0-gAE3lYXDL-uWqPJyzbBpg9Cyt98CPuag97CPwzyJfUprrFZ-PB2UOqZKVi2JnOBoYFz-B-JOTEa0YKNkDIwWsMI4vJNCCsBNBM9v0aHgnT1wEeItRNaH65XPqIfjU3oo4qJBTcwy8VRei6Nsfqx1btG59SZ03R6v9YBcnWXIh3XHpBJCA3O4dPviNudbvd9BNW8ndv-_Q28r7D0KAVOYDn5RCpn7Hf_jyL62b8Q9I-ULF5uW8Tiq5HJ"
                                width={400}
                                height={500}
                                quality={100}
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-xl mb-1 text-[#111418]">Sarah Chen</h3>
                            <p className="text-primary font-medium text-sm mb-4">Chief Technology Officer</p>
                            <div className="flex gap-3">
                                <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors">
                                    <Link2 size={16} />
                                </div>
                                <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors">
                                    <Mail size={16} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Leader 3 */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="group bg-white/40 backdrop-blur-3xl rounded-2xl overflow-hidden border border-white transition-all duration-300 hover:border-primary/50"
                    >
                        <div className="aspect-[0.8] bg-slate-200 relative overflow-hidden">
                            <NextImage
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                                alt="Marcus Thorne"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjWSY8_jbIrlzcy4hOX7m86ul1WQigCd_I7qvG2IH78a6dqB5lDZXUnlLQlUORrHpXEc7OqELq_q_2CSB6viISICs8ifiTc4PgxYTct8VwwrRJSBkN189_1AiZPMJoZ20R8sXngPu-HQy5w3x9x2uEgOowaIkV-QlC0mByM3KPFSgbTxDg0ZovN4fCt_yw7TPg_TmMxSvLdEfa-ecyOhkkqVGut5ppIBe_k_3tixWLVd5LUSE8hVAMDqiGCrCoMbmip-RqR3HMT7lR"
                                width={400}
                                height={500}
                                quality={100}
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-xl mb-1 text-[#111418]">Marcus Thorne</h3>
                            <p className="text-primary font-medium text-sm mb-4">Chief Operating Officer</p>
                            <div className="flex gap-3">
                                <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors">
                                    <Link2 size={16} />
                                </div>
                                <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors">
                                    <Mail size={16} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Leader 4 */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="group bg-white/40 backdrop-blur-3xl rounded-2xl overflow-hidden border border-white transition-all duration-300 hover:border-primary/50"
                    >
                        <div className="aspect-[0.8] bg-slate-200 relative overflow-hidden">
                            <NextImage
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                                alt="Elena Rodriguez"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQQ0Bgv0ClNbop3_WbAEbFnQcUu8Y3S-JdoFxPfMMaHbcEj4HUiG-RRBKFbtw7L9157bV-YPlqKv6PIMmr8khZgu5o4bAUMD3iQbmz1WN9gbyq1uEZirGPhZmfbhY2Rl_c9bwLdQJXa_hQ-RRWvVQfC67CKMdeHrxYUrX9Cjkit_ow8wTKCKR4sYiy9cTEqa0yPgZkhCmNsVoAC362aVYhlhqMXnvDUYDhJ2O3Jq3N-4RjONCpEriJfcrJWyOztJc9eAxUlAKC-tjz"
                                width={400}
                                height={500}
                                quality={100}
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-xl mb-1 text-[#111418]">Elena Rodriguez</h3>
                            <p className="text-primary font-medium text-sm mb-4">VP Engineering</p>
                            <div className="flex gap-3">
                                <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors">
                                    <Link2 size={16} />
                                </div>
                                <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors">
                                    <Mail size={16} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
