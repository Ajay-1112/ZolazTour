import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import Link from "next/link";
import React from "react";
import { MapPin } from "lucide-react";
const testimonials = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        company: "TechCorp",
        testimonial:
            "This product has completely transformed the way we work. The efficiency and ease of use are unmatched!",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        id: 2,
        name: "Sophia Lee",
        designation: "Data Analyst",
        company: "InsightTech",
        testimonial:
            "This tool has saved me hours of work! The analytics and reporting features are incredibly powerful.",
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
        id: 3,
        name: "Michael Johnson",
        designation: "UX Designer",
        company: "DesignPro",
        testimonial:
            "An amazing tool that simplifies complex tasks. Highly recommended for professionals in the industry.",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
        id: 4,
        name: "Emily Davis",
        designation: "Marketing Specialist",
        company: "BrandBoost",
        testimonial:
            "I've seen a significant improvement in our team's productivity since we started using this service.",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        id: 5,
        name: "Daniel Martinez",
        designation: "Full-Stack Developer",
        company: "CodeCrafters",
        testimonial:
            "The best investment we've made! The support team is also super responsive and helpful.",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        id: 6,
        name: "Jane Smith",
        designation: "Product Manager",
        company: "InnovateX",
        testimonial:
            "The user experience is top-notch! The interface is clean, intuitive, and easy to navigate.",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
];

const Testimonial = () => (
    <div className=" flex justify-center items-center md:py-20">
        <div className="h-full w-full">
            <div className="text-center mb-12 px-4 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <MapPin className="w-4 h-4" />
          Testimonials
        </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
                    What Our Clients Say
                </h2>
                <p className="text-lg  text-gray-700 tracking-tight">
                </p>
            </div>
            <div className="relative">
                <div
                    className="z-10 absolute left-0 inset-y-0 w-[15%] bg-gradient-to-r from-background to-transparent" />
                <div
                    className="z-10 absolute right-0 inset-y-0 w-[15%] bg-gradient-to-l from-background to-transparent" />
                <Marquee pauseOnHover className="[--duration:20s]">
                    <TestimonialList />
                </Marquee>
                <Marquee pauseOnHover reverse className="mt-0 [--duration:20s]">
                    <TestimonialList />
                </Marquee>
            </div>
        </div>
    </div>
);

const TestimonialList = () =>
    testimonials.map((testimonial) => (
        <div
            key={testimonial.id}
            className="min-w-96 max-w-sm border rounded-xl p-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
                            {testimonial.name.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-md text-gray-700 font-semibold">{testimonial.name}</p>
                        <p className="text-xs text-gray-400">{testimonial.designation}</p>
                    </div>
                </div>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="#" target="_blank">
                        <TwitterLogo className="w-4 h-4" />
                    </Link>
                </Button>
            </div>
            <p className="mt-3 text-[14px] text-gray-700">{testimonial.testimonial}</p>
        </div>
    ));

const TwitterLogo = (props) => (
    <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <title>X</title>
        <path
            fill="currentColor"
            d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

export default Testimonial;
