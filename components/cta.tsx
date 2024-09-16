"use client";

import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-7xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Model agnostic template for every model
            </h2>
            {/* <p className="text-white mt-3">
              A Model Agnostic Template is a flexible framework that works with
              any machine learning model.
            </p> */}

            <div className="relative mt-6 lg:max-w-5xl lg:mx-auto">
              <div className="absolute -inset-2">
                <div
                  className="w-full h-full mx-auto opacity-30 blur-lg filter"
                  style={{
                    background:
                      "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                  }}
                ></div>
              </div>

              <div className="relative grid grid-cols-1 px-16 py-12 overflow-hidden text-center bg-white sm:grid-cols-2 gap-y-12 lg:grid-cols-4 rounded-2xl gap-x-20">
                <div className="flex flex-col items-center">
                  <p
                    className={`text-3xl font-bold text-gray-800 lg:mt-3 lg:order-2 ${plusJakartaSans.className}`}
                  >
                    Prompt Generation
                  </p>
                  <h3
                    className={`mt-5 text-sm font-bold tracking-widest text-gray-800 uppercase lg:mt-0 lg:order-1 ${plusJakartaSans.className}`}
                  >
                    Auto
                  </h3>
                </div>

                <div className="flex flex-col items-center">
                  <p
                    className={`text-3xl font-bold text-gray-800 lg:mt-3 lg:order-2 ${plusJakartaSans.className}`}
                  >
                    Model Switching
                  </p>
                  <h3
                    className={`mt-5 text-sm font-bold tracking-widest text-gray-800 uppercase lg:mt-0 lg:order-1 ${plusJakartaSans.className}`}
                  >
                    Optimized
                  </h3>
                </div>

                <div className="flex flex-col items-center">
                  <p
                    className={`text-3xl font-bold text-gray-800 lg:mt-3 lg:order-2 ${plusJakartaSans.className}`}
                  >
                    Monitor Usage
                  </p>
                  <h3
                    className={`mt-5 text-sm font-bold tracking-widest text-gray-800 uppercase lg:mt-0 lg:order-1 ${plusJakartaSans.className}`}
                  >
                    Observability
                  </h3>
                </div>

                <div className="flex flex-col items-center">
                  <p
                    className={`text-3xl font-bold text-gray-800 lg:mt-3 lg:order-2 ${plusJakartaSans.className}`}
                  >
                    Prompt Evaluation
                  </p>
                  <h3
                    className={`mt-5 text-sm font-bold tracking-widest text-gray-800 uppercase lg:mt-0 lg:order-1 ${plusJakartaSans.className}`}
                  >
                    Iteratively
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
