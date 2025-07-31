import Image from "next/image";
import {
  ShieldCheck,
  Search,
  Sparkles,
  BadgeDollarSign,
} from "lucide-react";

export default function CTA2() {
  return (
    <section className="md:pt-10 pb-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 ">
            Join our collection
          </h2>

          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Experience a personalized, passionate approach to the stewardship of your Caribbean home.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <Search className="w-8 h-8 text-emerald-600" />
              <span className="font-semibold text-gray-900">Guest screening</span>
            </div>
            <div className="flex items-start gap-4">
              <Sparkles className="w-8 h-8 text-emerald-600" />
              <span className="font-semibold text-gray-900">Attention to detail</span>
            </div>
            <div className="flex items-start gap-4">
              <BadgeDollarSign className="w-8 h-8 text-emerald-600" />
              <span className="font-semibold text-gray-900">Hands-free profitability</span>
            </div>
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-emerald-600" />
              <span className="font-semibold text-gray-900">Trustworthiness</span>
            </div>
          </div>

          <div>
            <button className="bg-emerald-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-emerald-800 transition">
              Apply now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 mx-auto md:mx-0 w-full">
          <div className="row-span-2 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/Cta1.jpg"
              alt="Explorer at rock island"
              width={500}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/Cta.jpg"
              alt="Tropical beach boardwalk"
              width={250}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/Cta2.jpg"
              alt="Girl photographing Mt. Fuji"
              width={250}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
