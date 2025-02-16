import HeadenButton from "../HeadenButton";
import { Check, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Pricing() {
  const plans = [
    {
      name: "Free Forever ",
      price: 0,
      fee: 5,
      features: [
        "Mange up to appointment per month",
        "Basic patient record mangement",
        "Email notifications for appointments",
      ],
    },
    {
      name: "Professional",
      price: 59.9,
      fee: 2,
      isMostPop: true,
      features: [
        "Unlimited appointments",
        "Advanced patient record management",
        "SMS reminders for appointments",
        "Customizable clinic profile",
      ],
    },
    {
      name: "Enterprise",
      price: 99.99,
      fee: 0,
      isMostPop: false,
      features: [
        "All features from standard plan",
        "Multi provider support",
        "priority customer support",
        "Integration with elctronic health records (EHR) systems",
      ],
    },
  ];
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <HeadenButton text=" Pricing for all sizes" />
          <div className="mt-3 max-w-xl">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              efficitur consequat nunc.
            </p>
          </div>
        </div>
        <div className="mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className="relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2"
            >
              {item.isMostPop && (
                <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold">
                  Most Popular
                </span>
              )}
              <div>
                <span className="text-indigo-600 font-medium uppercase tracking-widest">
                  {item.name}
                </span>
                <div className="mt-4 text-gray-800 text-3xl font-semibold">
                  ${item.price}{" "}
                  <span className="text-xl text-gray-600 font-normal">/mo</span>
                </div>
                <div className="flex pt-5 items-center">
                  <p>+5% trasnactio fee</p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button>
                          <HelpCircle className="w-4 h-4 ms-2" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-slate-900 text-white text-xs">
                        <p>
                          Paypal/Stripe will change thier regular transction Fee
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              <ul className="py-8 space-y-3">
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <Check className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                    {featureItem}
                  </li>
                ))}
              </ul>
              <div className="flex-1 flex items-end">
                <button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
