import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Target, ArrowRight } from "lucide-react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { Link } from "wouter";

interface ROICalculatorProps {
    selectedTierRate: number;
}
const ROICalculator: React.FC<ROICalculatorProps> = ({ selectedTierRate }) => {
    const [numCustomers, setNumCustomers] = useState<number>(1);
    const [paymentMethod, setPaymentMethod] = useState<"card" | "cash">("card");

    const CUSTOMER_PRICE = 200;

    const calculateROI = () => {
        const months = 12;
        const projections = [];
        const monthlyRevenue = numCustomers * CUSTOMER_PRICE * selectedTierRate;

        for (let i = 1; i <= months; i++) {
            projections.push({
                month: i,
                commission: monthlyRevenue,
                cumulative: monthlyRevenue * i,
            });
        }

        return projections;
    };

    const [projections, setProjections] = useState<
        Array<{
            month: number;
            commission: number;
            cumulative: number;
        }>
    >([]);

    useEffect(() => {
        setProjections(calculateROI());
    }, [numCustomers, selectedTierRate]);

    const monthlyCommission = numCustomers * CUSTOMER_PRICE * selectedTierRate;
    const quarterlyPayment = monthlyCommission * 3;
    const annualCommission = monthlyCommission * 12;

    return (
        <div className="space-y-8 mt-10">
            <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-white shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl text-blue-700">
                            Calculate Your Earnings
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-3">
                            <Label className="text-lg">Number of Customers</Label>
                            <Input
                                type="number"
                                value={numCustomers}
                                onChange={(e) => setNumCustomers(Number(e.target.value))}
                                min="1"
                                className="w-full text-lg"
                            />
                        </div>

                        <div className="space-y-3">
                            <Label className="text-lg">Payment Method</Label>
                            <RadioGroup
                                defaultValue={paymentMethod}
                                onValueChange={(value) =>
                                    setPaymentMethod(value as "card" | "cash")
                                }
                                className="flex space-x-4"
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="card" id="card" />
                                    <Label htmlFor="card" className="text-base">
                                        Card
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="cash" id="cash" />
                                    <Label htmlFor="cash" className="text-base">
                                        Cash
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="mt-6 p-4 bg-blue-50 rounded-lg space-y-2">
                            <p className="text-sm font-medium text-blue-800">
                                Program Details
                            </p>
                            <p className="text-sm">
                                Current Commission Rate: {Math.round(selectedTierRate * 100)}%
                            </p>
                            <p className="text-sm">Price per Customer: 200 € / Month</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl text-blue-700">
                            Earnings Summary
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                                <p className="text-sm text-blue-600">Monthly Commission</p>
                                <p className="text-2xl font-bold text-blue-800">
                                    €{monthlyCommission.toLocaleString()}
                                </p>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg">
                                <p className="text-sm text-blue-600">Quarterly Payment</p>
                                <p className="text-2xl font-bold text-blue-800">
                                    €{quarterlyPayment.toLocaleString()}
                                </p>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-lg">
                                <p className="text-sm text-blue-600">Annual Earnings</p>
                                <p className="text-2xl font-bold text-blue-800">
                                    €{annualCommission.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="bg-white shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl text-blue-700">
                        12-Month Earnings Projection
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={projections}>
                                <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
                                <XAxis
                                    dataKey="month"
                                    label={{ value: "Month", position: "bottom" }}
                                    tick={{ fill: "#1e40af" }}
                                />
                                <YAxis
                                    label={{ value: "EUR", angle: -90, position: "insideLeft" }}
                                    tick={{ fill: "#1e40af" }}
                                />
                                <Tooltip
                                    formatter={(value: number) => `€${value.toLocaleString()}`}
                                    labelFormatter={(label: string) => `Month ${label}`}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="commission"
                                    stroke="#2563eb"
                                    strokeWidth={2}
                                    name="Monthly Commission"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="cumulative"
                                    stroke="#60a5fa"
                                    strokeWidth={2}
                                    name="Cumulative Earnings"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

const PartnershipProgram: React.FC = () => {
    const [selectedTier, setSelectedTier] = useState<string | null>(null);

    const [selectedTierRate, setSelectedTierRate] = useState(0.1); // Default to Silver tier

    const partnershipTiers = [
        {
            name: "Silver",
            commission: "10%",
            requirements: "Less than 5 customers",
            benefits: ["Basic support", "Standard commission", "Basic training"],
            color: "from-blue-100 to-blue-200",
            commissionRate: 0.1,
        },
        {
            name: "Gold",
            commission: "15%",
            requirements: "10 to 20 customers",
            benefits: [
                "Priority support",
                "Increased commission",
                "Advanced training",
                "Co-marketing",
            ],
            color: "from-blue-200 to-blue-300",
            commissionRate: 0.15,
        },
        {
            name: "Platinum",
            commission: "30%",
            requirements: "More than 20 customers",
            benefits: [
                "24/7 support",
                "Highest commission rate",
                "Elite training",
                "Co-marketing",
                "API access",
            ],
            color: "from-blue-300 to-blue-400",
            commissionRate: 0.3,
        },
    ];

    const handleTierSelect = (tier: any) => {
        setSelectedTier(tier.name);
        setSelectedTierRate(tier.commissionRate);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 pt-32 pb-24"
        >
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="container mx-auto px-4 text-center">
                    <Badge className="mb-4 bg-blue-100 text-blue-800">
                        Real Estate Software Partnership Program
                    </Badge>
                    <h1 className="text-5xl font-bold mb-6 text-blue-700">
                        Partnership Program
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Join our partner network and grow your business with Romania's
                        leading real estate software solution.
                    </p>
                    <div className="flex justify-center gap-4 ">
                        <a
                            href={`https://api.whatsapp.com/send?phone=40729917823`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative"
                        >
                            <span className="bg-green-500 -mt-3 absolute right-0 text-white text-xs p-1 rounded ml-2">
                                Response &lt; 1 min
                            </span>
                            <Button size="lg" className="transition-all hover:-translate-y-1">
                                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </a>

                        <Link href="/services">
                            <Button
                                variant="outline"
                                size="lg"
                                className="transition-all hover:-translate-y-1"
                            >
                                Industries
                            </Button>
                        </Link>
                    </div>
                </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Globe className="h-6 w-6 text-blue-600" />
                                Rich Software
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Our software is simple yet it's scalable and full featured!</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Trophy className="h-6 w-6 text-blue-600" />
                                Proven Success
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                30% increase in client acquisition. Most customers convert to
                                become Partners.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calendar className="h-6 w-6 text-blue-600" />
                                Regular Updates
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Bi-weekly updates to ensure you have the latest tools at your
                                fingertips.
                            </p>
                        </CardContent>
                    </Card>
                </div> */}
                {/* small badge of partner testimonial */}
                <div className="mt-12   flex max-w-3xl mx-auto space-x-6">
                    <img
                        src="https://res.cloudinary.com/do3dahfvh/image/upload/v1731747105/ttt1fmtpdnxfv3gagevm.png"
                        alt=""
                        className="w-24 h-24 rounded-full"
                    />{" "}
                    <div className=" t  shadow p-4 rounded-3xl">
                        <p className=" text-gray-500 flex   ">
                            "I partnered with Salut Enterprise a year ago, and it transformed
                            my businesses. I no longer pay anything and even earn extra
                            revenue. Their user-friendly software is essential for our growth.
                            " <br />
                        </p>{" "}
                        <a href="https://gourmetcoffee.ro/" className="mt-5">
                            CEO at Gourmetcoffee.ro
                        </a>{" "}
                    </div>
                </div>
                {/* arrow  */}
                <img
                    src="https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_loop_02.svg"
                    alt=""
                    className="w-24   text-center h-auto ml-96  hidden md:flex items-center justify-center"
                />{" "}
                {/* Directly showing partnership tiers here instead of in tabs */}
                <div className="grid gap-6 md:grid-cols-3 mt-10">
                    {partnershipTiers.map((tier) => (
                        <Card
                            key={tier.name}
                            className={`relative overflow-hidden transition-all duration-300 cursor-pointer ${selectedTier === tier.name
                                ? "ring-2 ring-blue-500 shadow-xl"
                                : "hover:shadow-lg"
                                }`}
                            onClick={() => handleTierSelect(tier)}
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-50`}
                            />
                            <CardHeader>
                                <Badge variant="secondary" className="w-fit mb-2">
                                    {tier.name}
                                </Badge>
                                <CardTitle className="text-2xl">{tier.commission}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 mb-4">
                                    {tier.requirements}
                                </p>
                                <ul className="space-y-2">
                                    {tier.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <Target className="h-4 w-4 text-blue-600" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className={`w-full ${selectedTier === tier.name
                                        ? "bg-blue-700 hover:bg-blue-800"
                                        : "bg-blue-600 hover:bg-blue-700"
                                        }`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleTierSelect(tier);
                                    }}
                                >
                                    {selectedTier === tier.name
                                        ? "Selected"
                                        : `Select ${tier.name}`}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>{" "}
                {/* ROI Calculator */}
                <ROICalculator selectedTierRate={selectedTierRate} />
                {/* Values Section */}
                <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-primary/10">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-blue-700">
                            Why Partners Trust Us
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <svg
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-blue-700">
                                    Transparent
                                </h3>
                                <p className="text-gray-600">
                                    Transparent commission structure with no hidden fees
                                </p>
                            </div>
                            <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <svg
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-blue-700">
                                    Quality
                                </h3>
                                <p className="text-gray-600">
                                    Maintaining the highest standards in software development
                                </p>
                            </div>
                            <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <svg
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-blue-700">
                                    Support
                                </h3>
                                <p className="text-gray-600">
                                    Dedicated support team available for partner queries
                                </p>
                            </div>
                            <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <svg
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-blue-700">
                                    Integrity
                                </h3>
                                <p className="text-gray-600">
                                    Operating with transparency and ethical business practices
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </motion.div>
    );
};

export default PartnershipProgram;
