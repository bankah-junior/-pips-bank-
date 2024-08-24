import React from "react";

const TestimonialCard = ({ testimonialUser, testimonialSaying, animeName, animeDuration }) => {
  return (
    <>
      <div class="flex items-center justify-center my-4" data-aos={animeName} data-aos-duration={animeDuration}>
        <div class="w-full max-w-lg px-6 mx-auto bg-white rounded-lg shadow-xl border">
          <div class="max-w-md mx-auto space-y-6">
            <div class="py-4 px-4 mx-auto max-w-screen-xl lg:py-16">
              <div class="mx-auto max-w-screen-sm text-center">
                <div className="w-full flex items-center justify-center">
                  <div class="relative w-10 h-10 overflow-hidden rounded-full">
                    <svg
                      class="absolute w-12 h-12 text-gray-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div><br />
                <p class="mb-4 text-3xl tracking-tight font-bold text-black">
                  {testimonialUser}
                </p>
                <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
                  {testimonialSaying}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
