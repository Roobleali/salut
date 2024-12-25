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
    FormDescription,
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
    Factory,
    Building,
    Store,
    GraduationCap,
    Briefcase,
    UtensilsCrossed,
    CheckCircle2,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from '@emailjs/browser';

const formSchema = z.object({
    industry: z.string(),
    currentSoftware: z.string(),
    company: z.string(),
    cui: z.string(),
    email: z.string().email(),
    address: z.string().optional(),
    county: z.string().optional(),
    phone: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const INDUSTRIES = [
    {
        value: "manufacturing",
        label: "Manufacturing",
        icon: Factory,
        description: "Production and assembly operations",
    },
    {
        value: "real_estate",
        label: "Real Estate",
        icon: Building,
        description: "Property management and sales",
    },
    {
        value: "retail",
        label: "Retail",
        icon: Store,
        description: "Retail and commerce",
    },
    {
        value: "education",
        label: "Education",
        icon: GraduationCap,
        description: "Educational institutions",
    },
    {
        value: "services",
        label: "Services",
        icon: Briefcase,
        description: "Professional services",
    },
    {
        value: "hospitality",
        label: "Hospitality",
        icon: UtensilsCrossed,
        description: "Hotels and restaurants",
    },
];

type StepType = "SELECT_INDUSTRY" | "CURRENT_SOFTWARE" | "COMPANY_DETAILS" | "COMPLETED";

const STEPS: Record<StepType, string> = {
    SELECT_INDUSTRY: "Select Your Industry",
    CURRENT_SOFTWARE: "Current Software & Needs",
    COMPANY_DETAILS: "Company Details",
    COMPLETED: "Request Submitted",
};

interface OnboardingModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function OnboardingModal({ open, onOpenChange }: OnboardingModalProps) {
    const [step, setStep] = useState<StepType>("SELECT_INDUSTRY");
    const [isLoading, setIsLoading] = useState(false);
    const [isLookingUp, setIsLookingUp] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        try {
            emailjs.init("Zf4lxizbewKMs2_SJ");
        } catch (error) {
            console.error("Failed to initialize EmailJS:", error);
        }
    }, []);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            industry: "",
            currentSoftware: "",
            company: "",
            cui: "",
            email: "",
            address: "",
            county: "",
            phone: "",
        },
    });
    const handleApiError = (error: any) => {
        console.error("API Error:", error);
        const errorMessage = error.message || "An unexpected error occurred";
        toast({
            title: "Error",
            description: errorMessage,
            variant: "destructive",
        });
    };


    const lookupCompany = async (cui: string | undefined) => {
        if (!cui) {
            toast({
                title: "Error",
                description: "Please enter a CUI number",
                variant: "destructive",
            });
            return;
        }

        setIsLookingUp(true);
        try {
            const sanitizedCui = cui
                .toString()
                .trim()
                .replace(/[^0-9]/g, "");

            // Use a CORS proxy service or your own proxy
            const apiUrl = `https://api.openapi.ro/api/companies/${sanitizedCui}`;

            const response = await fetch(apiUrl, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "x-api-key": 'bj8a5zPQ-Z-J4SWxxF2_ezS4Q6Wq3L4F24Qc9r9Yonq6oYfaTQ',
                    Origin: window.location.origin,
                },
            });

            if (!response.ok) {
                if (response.status === 403) {
                    throw new Error("Invalid API key or authorization error");
                }
                if (response.status === 404) {
                    throw new Error("Company not found");
                }
                throw new Error(`API error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            if (!data || !data.denumire) {
                throw new Error("Company data not available");
            }

            form.setValue("company", data.denumire);
            form.setValue("address", data.adresa || "");
            form.setValue("county", data.judet || "");
            form.setValue("phone", data.telefon || "");

            toast({
                title: "Success",
                description: "Company information has been automatically filled.",
            });
        } catch (error: any) {
            handleApiError(error);
        } finally {
            setIsLookingUp(false);
        }
    };

    const sendEmail = async (data: FormData) => {
        try {
            const result = await emailjs.send(
                "service_lnippfb",
                "template_ck1avc9",
                {
                    to_name: "Salut Enterprise Team",
                    company: data.company,
                    industry: INDUSTRIES.find(ind => ind.value === data.industry)?.label || data.industry,
                    email: data.email,
                    phone: data.phone || "N/A",
                    address: data.address || "N/A",
                    county: data.county || "N/A",
                    cui: data.cui || "N/A",
                    currentSoftware: data.currentSoftware || "N/A"
                },
            );

            if (result.status === 200) {
                setStep("COMPLETED");
            }
        } catch (error) {
            console.error("EmailJS error:", error);
        }
    };

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        await sendEmail(data);
        setIsLoading(false);
    };

    const validateCurrentStep = () => {
        if (step === "COMPLETED") return true;

        const currentFields = {
            SELECT_INDUSTRY: ["industry"],
            CURRENT_SOFTWARE: ["currentSoftware"],
            COMPANY_DETAILS: ["company", "email", "cui"], // Added cui to validation
        }[step];

        return currentFields.every((field) => {
            const value = form.getValues(field as keyof FormData);
            return value && value.length > 0;
        });
    };

    const progress = (() => {
        const stepValues: StepType[] = [
            "SELECT_INDUSTRY",
            "CURRENT_SOFTWARE",
            "COMPANY_DETAILS",
            "COMPLETED",
        ];
        const currentIndex = stepValues.indexOf(step);
        return (currentIndex / (stepValues.length - 1)) * 100; // Adjusted calculation
    })();

    const goToNextStep = () => {
        if (validateCurrentStep()) {
            const stepOrder: StepType[] = [
                "SELECT_INDUSTRY",
                "CURRENT_SOFTWARE",
                "COMPANY_DETAILS",
                "COMPLETED",
            ];
            const currentIndex = stepOrder.indexOf(step);
            if (currentIndex < stepOrder.length - 1) {
                setStep(stepOrder[currentIndex + 1]);
            }
        }
    };

    const goToPreviousStep = () => {
        const stepOrder: StepType[] = [
            "SELECT_INDUSTRY",
            "CURRENT_SOFTWARE",
            "COMPANY_DETAILS",
            "COMPLETED",
        ];
        const currentIndex = stepOrder.indexOf(step);
        if (currentIndex > 0) {
            setStep(stepOrder[currentIndex - 1]);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-[95vw] max-w-[600px] p-4 md:p-6">
                <DialogHeader>
                    <div className="space-y-2">
                        <DialogTitle className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#9747FF] via-[#8A43E6] to-[#6E35B9] bg-clip-text text-transparent pb-1">
                            Get Started with Salut Enterprise
                        </DialogTitle>
                        {step !== "COMPLETED" && (
                            <>
                                <DialogDescription className="text-sm md:text-base font-medium text-foreground/80">
                                    {STEPS[step]}
                                </DialogDescription>
                                <div className="space-y-2">
                                    <Progress value={progress} className="h-2" />
                                    <p className="text-xs md:text-sm text-muted-foreground">
                                        Step {Object.keys(STEPS).indexOf(step) + 1} of {Object.keys(STEPS).length - 1}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </DialogHeader>

                {step === "COMPLETED" ? (
                    <div className="py-4 md:py-8 text-center space-y-4">
                        <div className="flex justify-center">
                            <CheckCircle2 className="h-12 w-12 md:h-16 md:w-16 text-primary" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-primary">
                            Thank You for Your Interest!
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto">
                            Our team will review your requirements and get back to you within
                            the next hour with a personalized solution tailored to your needs.
                        </p>
                    </div>
                ) : (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                            {step === "SELECT_INDUSTRY" && (
                                <FormField
                                    control={form.control}
                                    name="industry"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm md:text-base">Select Your Industry</FormLabel>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                                {INDUSTRIES.map(({ value, label, icon: Icon, description }) => (
                                                    <div
                                                        key={value}
                                                        className={`p-3 md:p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${field.value === value
                                                            ? "border-primary bg-primary/5"
                                                            : "border-border hover:border-primary/50"
                                                            }`}
                                                        onClick={() => field.onChange(value)}
                                                    >
                                                        <div className="flex items-center gap-2 md:gap-3">
                                                            <div className="p-1.5 md:p-2 rounded-md bg-primary/10">
                                                                <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                                            </div>
                                                            <div>
                                                                <div className="text-sm md:text-base font-medium">{label}</div>
                                                                <div className="text-xs md:text-sm text-muted-foreground">
                                                                    {description}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* <FormMessage /> */}
                                        </FormItem>
                                    )}
                                />
                            )}

                            {step === "CURRENT_SOFTWARE" && (
                                <FormField
                                    control={form.control}
                                    name="currentSoftware"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm md:text-base">
                                                What software solutions are you currently using and what
                                                are your main requirements?
                                            </FormLabel>
                                            <FormDescription className="text-xs md:text-sm">
                                                Tell us about your current software setup and what
                                                improvements you're looking for.
                                            </FormDescription>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="e.g., Currently using Excel for inventory, looking for an automated solution with real-time tracking..."
                                                    className="min-h-[100px] text-sm md:text-base"
                                                    {...field}
                                                />
                                            </FormControl>
                                            {/* <FormMessage /> */}
                                        </FormItem>
                                    )}
                                />
                            )}

                            {step === "COMPANY_DETAILS" && (
                                <div className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="cui"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormDescription className="text-xs md:text-sm">
                                                    Enter your CUI to automatically fill company details
                                                </FormDescription>
                                                <div className="flex flex-col sm:flex-row gap-2">
                                                    <FormControl>
                                                        <div className="relative flex-1">
                                                            <Building2 className="absolute left-3 top-2.5 h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
                                                            <Input
                                                                placeholder="Enter CUI"
                                                                className="pl-10 text-sm md:text-base"
                                                                {...field}
                                                            />
                                                        </div>
                                                    </FormControl>
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        onClick={() => lookupCompany(field.value)}
                                                        disabled={isLookingUp || !field.value}
                                                        className="min-w-[120px] bg-primary/5 hover:bg-primary/10 border-primary/20 hover:border-primary/30 text-sm md:text-base"
                                                    >
                                                        {isLookingUp ? (
                                                            <Loader2 className="h-4 w-4 animate-spin" />
                                                        ) : (
                                                            <>
                                                                <Search className="mr-2 h-4 w-4" />
                                                                Lookup Info
                                                            </>
                                                        )}
                                                    </Button>
                                                </div>
                                            </FormItem>
                                        )}
                                    />

                                    <div className="space-y-4">
                                        <FormField
                                            control={form.control}
                                            name="company"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-sm md:text-base">Company Name</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Company Name"
                                                            className="text-sm md:text-base"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-sm md:text-base">Business Email</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="email"
                                                            placeholder="contact@company.com"
                                                            className="text-sm md:text-base"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="address"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-sm md:text-base">Address</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="Company Address"
                                                                className="text-sm md:text-base"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        {/* <FormMessage /> */}
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="county"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-sm md:text-base">County</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="County"
                                                                className="text-sm md:text-base"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        {/* <FormMessage /> */}
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-sm md:text-base">Phone Number</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Phone Number"
                                                            className="text-sm md:text-base"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    {/* <FormMessage /> */}
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-col sm:flex-row justify-between gap-2 pt-4">
                                {step !== ("COMPLETED" as StepType) && (
                                    <>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={goToPreviousStep}
                                            disabled={step === "SELECT_INDUSTRY" || isLoading}
                                            className="w-full sm:w-auto text-sm md:text-base"
                                        >
                                            <ArrowLeft className="mr-2 h-4 w-4" /> Back
                                        </Button>

                                        {step !== "COMPANY_DETAILS" ? (
                                            <Button
                                                type="button"
                                                onClick={goToNextStep}
                                                disabled={isLoading}
                                                className="w-full sm:w-auto text-sm md:text-base"
                                            >
                                                Next <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        ) : (
                                            <Button
                                                type="submit"
                                                disabled={isLoading}
                                                className="w-full sm:w-auto text-sm md:text-base"
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                        Submitting...
                                                    </>
                                                ) : (
                                                    "Submit"
                                                )}
                                            </Button>
                                        )}
                                    </>
                                )}
                            </div>
                        </form>
                    </Form>
                )}
            </DialogContent>
        </Dialog>
    );
}

export default OnboardingModal;