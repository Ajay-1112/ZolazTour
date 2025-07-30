"use client";
import { motion } from "framer-motion";

import CTA from "@/components/CTA";
import CTA2 from "@/components/CTA2";
import Destinations from "@/components/Destination";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import VillaListings from "@/components/VillaListings";
import Why_us from "@/components/Why_us";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="font-Geist bg-gray-50/40">
        <Hero />

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Destinations />
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Why_us />
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <CTA />
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <VillaListings />
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Services />
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Testimonial />
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <CTA2 />
      </motion.div>

      <Footer />
    </div>
  );
}
