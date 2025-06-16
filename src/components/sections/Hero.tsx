import { Button } from "@/components/ui/button";
import { OnboardingModal } from "@/components/models/OnboardingModal";
import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const currencies = [
  { code: "GBP", label: "GBP", flag: "/flags/uk.svg" },
  { code: "SOS", label: "SOS", flag: "/flags/so.svg" },
];

function CurrencyValue({ value }: { value: string }) {
  const currency = currencies.find((c) => c.code === value);
  if (!currency) return null;
  return (
    <span className="flex items-center gap-2">
      <img src={currency.flag} alt={currency.label + ' Flag'} className="w-5 h-4 rounded-sm" />
      <span className="font-medium">{currency.label}</span>
    </span>
  );
}

export function Hero() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [rate] = useState(1.0); // Example rate: 1 GBP = 1 SOS

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('signup') === 'true') {
        setShowOnboarding(true);
      }
    }
  }, []);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value);
    if (value) {
      const converted = (parseFloat(value) * rate).toFixed(2);
      setConvertedAmount(converted);
    } else {
      setConvertedAmount("");
    }
  };

  return (
    <section
      className="relative overflow-hidden pt-20 pb-16 min-h-[600px] max-w-7xl mx-auto flex flex-col md:flex-row items-center md:pt-32 md:pb-28"
      aria-labelledby="hero-title"
    >
      {/* Multi-layered gradient and organic shapes */}
      <svg className="absolute -top-32 left-0 w-[600px] h-[600px] opacity-40 -z-10 animate-float-slow" viewBox="0 0 600 600" fill="none"><ellipse cx="300" cy="300" rx="300" ry="200" fill="#e0f2fe" /></svg>
      <svg className="absolute top-0 right-0 w-[400px] h-[400px] opacity-30 -z-10 animate-float-slower" viewBox="0 0 400 400" fill="none"><ellipse cx="200" cy="200" rx="200" ry="120" fill="#f0f9ff" /></svg>
      <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] opacity-20 -z-10" viewBox="0 0 500 200" fill="none"><ellipse cx="250" cy="100" rx="250" ry="80" fill="#e0f2fe" /></svg>
      <div className="container mx-auto px-4 sm:px-6 md:px-10 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-24 relative z-10">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center items-start max-w-xl w-full relative z-10 md:pr-16 mt-8 md:mt-0">
          {/* Bold callout above headline */}
          <div className="mb-2 text-base md:text-lg font-bold text-blue-600 tracking-wider uppercase">Fast & Secure Money Transfers</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 md:mb-4 text-black drop-shadow-xl leading-tight">
            Send Money Home
            <span className="block mt-2 font-bold relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400" style={{ WebkitTextStroke: '1px #0284c7' }}>
              With Confidence
              <svg className="absolute left-0 -bottom-2 w-full h-2 md:h-3" viewBox="0 0 180 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10 Q90 18 175 6" stroke="#0284c7" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>
          {/* Trust-focused tagline */}
          <div className="text-lg w-max sm:text-xl md:text-3xl font-extrabold text-blue-500 mb-2 tracking-wide flex items-center gap-1">
            Built for the Somali Diaspora <span className="text-blue-400">·</span>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 md:mb-8 max-w-md font-medium drop-shadow-sm">
            Fast, secure, and affordable money transfers from the UK to Somalia. Send money home with confidence, knowing your funds are protected and your family is supported.
          </p>

          <Button
            size="lg"
            className="rounded-full border-0 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-bold shadow-xl hover:scale-105 hover:from-blue-500 hover:to-blue-300 transition-transform duration-200 w-full sm:w-auto"
            onClick={() => setShowOnboarding(true)}
          >
            Start Sending Money <span className="ml-2">↗</span>
          </Button>
        </div>

        {/* Right: Currency Calculator - Redesigned */}
        <div className="flex-1 relative w-full max-w-md md:max-w-2xl flex flex-col items-center mb-8 md:mb-0">
          <div className="w-full space-y-5">
            {/* You send card */}
            <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-medium mb-1">You send</span>
                <input
                  type="number"
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder="0"
                  className="text-2xl font-bold text-gray-900 outline-none border-none bg-transparent w-24 focus:ring-0 p-0 hide-number-spin"
                  inputMode="decimal"
                  pattern="[0-9]*"
                  min="0"
                  step="any"
                  style={{ MozAppearance: 'textfield' }}
                />
              </div>
              <Select defaultValue="GBP">
                <SelectTrigger className="w-[110px] border-none bg-transparent outline-none focus:ring-0 flex items-center gap-2 justify-end">
                  <SelectValue asChild>
                    <span className="flex items-center gap-2"><CurrencyValue value="GBP" /></span>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="rounded-xl shadow-lg bg-white py-2">
                  {currencies.filter(c => c.code === "GBP").map((currency) => (
                    <SelectItem key={currency.code} value={currency.code} className="flex ml-4 items-center gap-2 px-3 py-2">
                      <div className="flex items-center space-x-2 ml-3"><img src={currency.flag} alt={currency.label + ' Flag'} className="w-5 h-4 rounded-sm" />
                        <span className="font-medium flex">{currency.label}</span></div>

                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Payment method card */}
            <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm cursor-pointer">
              <span className="text-xs text-gray-500 font-medium">Payment Method</span>
              <span className="text-lg font-bold text-gray-800 flex items-center gap-2">Bank Transfer <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></span>
            </div>

            {/* Summary card */}
            <div className="rounded-2xl border border-gray-100 bg-blue-50/50 px-5 py-4 shadow-sm">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-sm text-gray-600 font-medium"><svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>Exchange Rate</span>
                  <span className="text-base font-bold text-gray-900">{rate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-sm text-gray-600 font-medium"><svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m7-7H5" /></svg>Fee</span>
                  <span className="text-base font-bold text-gray-900">£0.00 GBP</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-gray-200 mt-2">
                  <span className="flex items-center gap-1 text-sm text-gray-600 font-medium"><svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18" /></svg>Total Payable Amount</span>
                  <span className="text-base font-bold text-gray-900">£{amount || "0.00"} GBP</span>
                </div>
              </div>
            </div>

            {/* Recipient gets card */}
            <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-medium mb-1">Recipient gets</span>
                <input
                  type="text"
                  value={convertedAmount || "0.00"}
                  readOnly
                  className="text-2xl font-bold text-gray-900 outline-none border-none bg-transparent w-24 focus:ring-0 p-0 cursor-default hide-number-spin"
                  tabIndex={-1}
                  style={{ MozAppearance: 'textfield' }}
                />
              </div>
              <Select defaultValue="SOS">
                <SelectTrigger className="w-[110px] border-none bg-transparent outline-none focus:ring-0 flex items-center gap-2 justify-end">
                  <SelectValue asChild>
                    <span className="flex items-center gap-2"><CurrencyValue value="SOS" /></span>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="rounded-xl shadow-lg bg-white py-2">
                  {currencies.filter(c => c.code === "SOS").map((currency) => (
                    <SelectItem key={currency.code} value={currency.code} className="flex ml-4 items-center gap-2 px-3 py-2">
                      <div className="flex items-center space-x-2 ml-3"><img src={currency.flag} alt={currency.label + ' Flag'} className="w-5 h-4 rounded-sm" />
                        <span className="font-medium flex">{currency.label}</span></div>

                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Send button */}
            <button
              className="w-full mt-2 bg-gray-900 hover:bg-gray-800 text-white text-lg font-bold py-4 rounded-2xl shadow-lg transition-all duration-150"
              onClick={() => setShowOnboarding(true)}
            >
              Send Money Now
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow { animation: float-slow 4s infinite; }
        .animate-float-slower { animation: float-slower 7s infinite; }
        input[type=number].hide-number-spin::-webkit-inner-spin-button, 
        input[type=number].hide-number-spin::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type=number].hide-number-spin {
          -moz-appearance: textfield;
          appearance: textfield;
        }
      `}</style>
      <OnboardingModal open={showOnboarding} onOpenChange={setShowOnboarding} />
    </section>
  );
}