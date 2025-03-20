// @ts-ignore: Unused variable

import { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    Loader2,
    ArrowRight,
    ArrowLeft,
    Building2,
    Search,
    CheckCircle2,
    Factory,
    ShoppingBag,
    Building,
    Briefcase,
    UtensilsCrossed,
    FileText,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";

const formSchema = z.object({
    company: z.string().min(1, "Company name is required"),
    cui: z.string().min(1, "CUI is required"),
    cod_postal: z.string().min(1, "Postal code is required"),
    address: z.string().optional(),
    county: z.string().optional(),
    phone: z.string().min(1, "Phone number is required"),
    email: z.string().email("Invalid email address"),
    industry: z.string().min(1, "Please select an industry"),
});

type FormData = z.infer<typeof formSchema>;

type StepType = "COMPANY_DETAILS" | "INDUSTRY_SELECTION" | "COMPLETED";

interface OnboardingModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const industries = [
    {
        id: "manufacturing",
        name: "Manufacturing",
        icon: Factory,
        description: "Production and manufacturing processes"
    },
    {
        id: "retail",
        name: "Retail",
        icon: ShoppingBag,
        description: "Retail and distribution operations"
    },
    {
        id: "real-estate",
        name: "Real Estate",
        icon: Building,
        description: "Property management and real estate"
    },
    {
        id: "services",
        name: "Services",
        icon: Briefcase,
        description: "Professional and business services"
    },
    {
        id: "hospitality",
        name: "Hospitality",
        icon: UtensilsCrossed,
        description: "Restaurants, hotels, and hospitality"
    },
    {
        id: "e-factura",
        name: "E-Factura",
        icon: FileText,
        description: "Electronic invoicing solutions"
    }
];

export function OnboardingModal({ open, onOpenChange }: OnboardingModalProps) {
    const [step, setStep] = useState<StepType>("COMPANY_DETAILS");
    const [isLoading, setIsLoading] = useState(false);
    const [isLookingUp, setIsLookingUp] = useState(false);

    const { toast } = useToast();

    useEffect(() => {
        try {
            emailjs.init("Zf4lxizbewKMs2_SJ");
        } catch (error) {
            console.error("Failed to initialize EmailJS:", error);
            toast({
                variant: "destructive",
                title: "Service Error",
                description: "Failed to initialize email service. Please try again later.",
            });
        }
    }, []);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            company: "",
            cui: "",
            cod_postal: "",
            address: "",
            county: "",
            phone: "",
            email: "",
            industry: "",
        },
    });

    const baseurl = import.meta.env.VITE_BASE_URL as string;

    const lookupCompany = async (cui: string) => {
        if (!cui) {
            toast({
                variant: "destructive",
                title: "Validation Error",
                description: "Please enter a CUI number",
            });
            return;
        }

        setIsLookingUp(true);
        try {
            const sanitizedCui = cui.toString().trim().replace(/[^0-9]/g, "");
            const response = await fetch(
                `${baseurl}/api/anaf-lookup?cui=${sanitizedCui}`,
            );

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || response.statusText);
            }

            if (data?.found) {
                form.setValue("company", data.denumire);
                form.setValue("address", data.adresa || "");
                form.setValue("county", data.judet || "");
                form.setValue("phone", data.telefon || "");
                form.setValue("cui", data.cif || "");
                form.setValue("cod_postal", data.cod_postal || "");
                toast({
                    title: "Success",
                    description: "Company details found and filled automatically.",
                });
            } else {
                toast({
                    variant: "destructive",
                    title: "Company Not Found",
                    description: data.error || "Could not find company details for the provided CUI.",
                });
            }
        } catch (error: any) {
            console.error("Company lookup error:", error);
            toast({
                variant: "destructive",
                title: "Lookup Error",
                description: error.message || "Failed to lookup company details. Please try again or enter manually.",
            });
        } finally {
            setIsLookingUp(false);
        }
    };

    const sendEmail = async (data: FormData) => {
        try {
            const selectedIndustry = industries.find(i => i.id === data.industry);
            await emailjs.send(
                "service_lnippfb",
                "template_ck1avc9",
                {
                    to_name: "Salut Enterprise Team",
                    company: data.company,
                    cui: data.cui,
                    email: data.email,
                    phone: data.phone,
                    address: data.address || "N/A",
                    county: data.county || "N/A",
                    industry: selectedIndustry?.name || "N/A",
                    industry_description: selectedIndustry?.description || "N/A",
                },
            );
        } catch (error) {
            console.error("EmailJS error:", error);
            toast({
                variant: "default",
                title: "⚠️ Warning",
                description: "Could not send email notification, but your quote request was submitted successfully.",
            });
        }
    };

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        try {
            await sendEmail(data);

            toast({
                title: "Quote Request Submitted",
                description: "We'll get back to you within 1 hour with a personalized quote.",
            });

            setStep("COMPLETED");
            setTimeout(() => {
                onOpenChange(false);
            }, 2000);
        } catch (error: any) {
            console.error("Submission error:", error);
            toast({
                variant: "destructive",
                title: "Error",
                description: error.message || "An unexpected error occurred. Please try again.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const progress = (() => {
        const stepValues: StepType[] = ["COMPANY_DETAILS", "INDUSTRY_SELECTION", "COMPLETED"];
        const currentIndex = stepValues.indexOf(step);
        return (currentIndex / (stepValues.length - 1)) * 100;
    })();

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-3xl">
                <DialogHeader>
                    <DialogTitle>Get a Quote</DialogTitle>
                    <DialogDescription>
                        Fill in your company details and select your industry to receive a personalized quote.
                    </DialogDescription>
                </DialogHeader>

                <Progress value={progress} className="mb-6" />

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {step === "COMPANY_DETAILS" && (
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <FormField
                                        control={form.control}
                                        name="company"
                                        render={({ field }) => (
                                            <FormItem className="flex-1">
                                                <FormLabel>Company Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter company name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="cui"
                                        render={({ field }) => (
                                            <FormItem className="flex-1">
                                                <FormLabel>CUI</FormLabel>
                                                <div className="flex gap-2">
                                                    <FormControl>
                                                        <Input placeholder="Enter CUI" {...field} />
                                                    </FormControl>
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        onClick={() => lookupCompany(field.value)}
                                                        disabled={isLookingUp}
                                                    >
                                                        {isLookingUp ? (
                                                            <Loader2 className="h-4 w-4 animate-spin" />
                                                        ) : (
                                                            <Search className="h-4 w-4" />
                                                        )}
                                                    </Button>
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input type="email" placeholder="Enter email" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Phone</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter phone number" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter address" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="county"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>County</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter county" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="cod_postal"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Postal Code</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter postal code" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="flex justify-end">
                                    <Button
                                        type="button"
                                        onClick={() => setStep("INDUSTRY_SELECTION")}
                                        disabled={isLoading}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </div>
                        )}

                        {step === "INDUSTRY_SELECTION" && (
                            <div className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="industry"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Select Your Industry</FormLabel>
                                            <div className="grid grid-cols-2 gap-4">
                                                {industries.map((industry) => (
                                                    <div
                                                        key={industry.id}
                                                        className={cn(
                                                            "relative flex cursor-pointer rounded-lg border p-4 hover:border-primary",
                                                            field.value === industry.id && "border-primary bg-primary/5"
                                                        )}
                                                        onClick={() => field.onChange(industry.id)}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <industry.icon className="h-5 w-5 text-primary" />
                                                            <div>
                                                                <p className="font-medium">{industry.name}</p>
                                                                <p className="text-sm text-muted-foreground">
                                                                    {industry.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="flex justify-between">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => setStep("COMPANY_DETAILS")}
                                        disabled={isLoading}
                                    >
                                        Back
                                    </Button>
                                    <Button type="submit" disabled={isLoading}>
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            "Submit Quote Request"
                                        )}
                                    </Button>
                                </div>
                            </div>
                        )}

                        {step === "COMPLETED" && (
                            <div className="text-center space-y-4">
                                <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
                                <h3 className="text-lg font-semibold">Quote Request Submitted</h3>
                                <p className="text-muted-foreground">
                                    We'll get back to you within 1 hour with a personalized quote.
                                </p>
                            </div>
                        )}
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
