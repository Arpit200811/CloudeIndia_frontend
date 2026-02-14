

import NextImage from "next/image";

export default function LifeAtCloudeGallery() {
    return (
        <section className="mb-12">

            {/* Heading */}
            <div
                className="flex flex-col gap-2 mb-6"
                data-aos="fade-down"
            >
                <h2 className="text-gray-900 text-3xl font-black leading-tight md:text-4xl">
                    Life at CloudeIndia
                </h2>
                <p className="text-gray-600">
                    Sneak peek into our culture beyond the desk.
                </p>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                {/* Large Image */}
                <div
                    data-aos="zoom-in"
                    className="col-span-2 row-span-2 relative overflow-hidden rounded-xl group h-64 md:h-auto"
                >
                    <NextImage
                        src="/gallery-hackathon.png"
                        alt="Hackathon"
                        width={1200}
                        height={800}
                        quality={100}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="font-bold text-sm">Annual Hackathon 2026</p>
                    </div>
                </div>

                {/* Small Images */}
                <div
                    data-aos="zoom-in"
                    data-aos-delay="100"
                    className="relative overflow-hidden rounded-xl group aspect-square"
                >
                    <NextImage
                        src="/gallery-meeting.png"
                        alt="Team Meeting"
                        width={600}
                        height={600}
                        quality={100}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-linear-to-t from-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="font-bold text-xs">Team Socials</p>
                    </div>
                </div>

                <div
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    className="relative overflow-hidden rounded-xl group aspect-square"
                >
                    <NextImage
                        src="/gallery-workshop.png"
                        alt="Workshop"
                        width={600}
                        height={600}
                        quality={100}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-linear-to-t from-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="font-bold text-xs">Knowledge Sharing</p>
                    </div>
                </div>

                {/* Wide Image */}
                <div
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    className="col-span-2 relative overflow-hidden rounded-xl group h-44"
                >
                    <NextImage
                        src="/gallery-retreat.png"
                        alt="Retreat"
                        width={1200}
                        height={600}
                        quality={100}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="font-bold text-sm">Summer Retreat</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
