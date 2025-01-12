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
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

const formSchema = z
    .object({
        company: z.string(),
        cui: z.string(),
        cod_postal: z.string(),
        address: z.string().optional(),
        county: z.string().optional(),
        phone: z.string().optional(),
        numar_reg_com: z.string().optional(),
        adminName: z.string().min(1, "Admin name is required"),
        email: z.string().email("Invalid email address"),
        adminPassword: z
            .string()
            .min(6, "Password must be at least 6 characters"),
        confirmPassword: z.string(),
    })

    .refine((data) => data.adminPassword === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

type FormData = z.infer<typeof formSchema>;



type StepType =
    | "COMPANY_DETAILS"
    | "ADMIN_SETUP"
    | "COMPLETED";

const STEPS: Record<StepType, string> = {
    COMPANY_DETAILS: "Company Details",
    ADMIN_SETUP: "Admin Account Setup",
    COMPLETED: "Request Submitted",
};

interface OnboardingModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function OnboardingModal({ open, onOpenChange }: OnboardingModalProps) {
    const [step, setStep] = useState<StepType>("COMPANY_DETAILS");
    const [isLoading, setIsLoading] = useState(false);
    const [isLookingUp, setIsLookingUp] = useState(false);
    const [loadingStage, setLoadingStage] = useState<LoadingStage>({
        stage: 'init',
        message: ''
    });



    const { toast } = useToast();

    useEffect(() => {
        try {
            emailjs.init("Zf4lxizbewKMs2_SJ");
        } catch (error) {
            console.error("Failed to initialize EmailJS:", error);
            toast({
                variant: "destructive",
                title: "Service Error",
                description:
                    "Failed to initialize email service. Please try again later.",
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
            numar_reg_com: "",
            adminName: "",
            email: "",
            adminPassword: "",
            confirmPassword: "",
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
            const sanitizedCui = cui
                .toString()
                .trim()
                .replace(/[^0-9]/g, "");
            const response = await fetch(
                `${baseurl}/api/anaf-lookup?cui=${sanitizedCui}`,
            );

            const data = await response.json();
            console.log(data)
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
                form.setValue("numar_reg_com", data.numar_reg_com || "");
                toast({
                    title: "Success",
                    description:
                        "Company details found and filled automatically.",
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
            const result = await emailjs.send(
                "service_lnippfb",
                "template_ck1avc9",
                {
                    to_name: "Salut Enterprise Team",
                    company: data.company,

                    email: data.email,
                    phone: data.phone || "N/A",
                    address: data.address || "N/A",
                    county: data.county || "N/A",
                    cui: data.cui || "N/A",
                    admin_name: data.adminName,
                },
            );

            if (result.status === 200) {
                // Email sent successfully
            }
        } catch (error) {
            console.error("EmailJS error:", error);
            // Don't throw here as this is a non-critical error
            toast({
                variant: "default",
                title: "⚠️ Warning",
                description:
                    "Could not send email notification, but your company was created successfully.",
            });
        }
    };
    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        try {
            setLoadingStage({ stage: 'company', message: 'Creating your company...' });

            const response = await fetch(`${baseurl}/api/odoo/create-company`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: data.company,
                    email: data.email,
                    cod_postal: data.cod_postal,
                    phone: data.phone || undefined,
                    street: data.address || undefined,
                    cui: data.cui || undefined,
                    city: data.county || undefined,
                    numar_reg_com: data.numar_reg_com || undefined,
                    adminName: data.adminName,
                    adminLogin: data.email,
                    adminPassword: data.adminPassword,
                }),
            });

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.error || "Failed to create company");
            }

            setLoadingStage({ stage: 'admin', message: 'Setting up admin account...' });
            await sendEmail(data);

            setLoadingStage({ stage: 'finalizing', message: 'Initializing your dashboard...' });
            toast({
                title: "Success",
                description: "Your company has been created successfully. Redirecting to your dashboard...",
            });

            setStep("COMPLETED");

            // First get the login page to obtain the CSRF token
            try {
                const loginPageResponse = await fetch('https://invoices.saluttech.ro/web/login', {
                    method: 'GET',
                    credentials: 'include',
                });

                const loginPageHtml = await loginPageResponse.text();

                // Create temporary element to parse HTML
                const parser = new DOMParser();
                const doc = parser.parseFromString(loginPageHtml, 'text/html');

                // Get CSRF token
                const csrfToken = doc.querySelector('input[name="csrf_token"]')?.getAttribute('value');

                // Create form with CSRF token
                const form = document.createElement('form');
                form.method = 'POST';
                form.action = 'https://invoices.saluttech.ro/web/login';
                form.style.display = 'none';

                // Add CSRF token
                if (csrfToken) {
                    const csrfInput = document.createElement('input');
                    csrfInput.type = 'hidden';
                    csrfInput.name = 'csrf_token';
                    csrfInput.value = csrfToken;
                    form.appendChild(csrfInput);
                }

                // Add other required fields
                const formFields = {
                    'login': data.email,
                    'password': data.adminPassword,
                    'db': 'invoices.saluttech.ro',
                    'redirect': '/web#action=456&model=account.move&view_type=list&cids=32&menu_id=280'
                };

                Object.entries(formFields).forEach(([name, value]) => {
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = name;
                    input.value = value;
                    form.appendChild(input);
                });

                document.body.appendChild(form);

                setTimeout(() => {
                    form.submit();
                }, 2000);

            } catch (error) {
                console.error('Login error:', error);
                // Fallback to direct URL if form submission fails
                window.location.href = `https://invoices.saluttech.ro/web/login?login=${encodeURIComponent(data.email)}&password=${encodeURIComponent(data.adminPassword)}&db=invoices.saluttech.ro&redirect=${encodeURIComponent('/web#action=456&model=account.move&view_type=list&cids=32&menu_id=280')}`;
            }

        } catch (error: any) {
            console.error("Submission error:", error);
            toast({
                variant: "destructive",
                title: "Error",
                description: error.message || "An unexpected error occurred. Please try again.",
            });
            setIsLoading(false);
            setLoadingStage({ stage: 'init', message: '' });
        }
    };

    const validateCurrentStep = () => {
        if (step === "COMPLETED") return true;

        const currentFields = {
            COMPANY_DETAILS: ["company", "cui"],
            ADMIN_SETUP: [
                "adminName",
                "email",
                "adminPassword",
                "confirmPassword",
            ],
        }[step];

        return currentFields.every((field) => {
            const value = form.getValues(field as keyof FormData);
            return value && value.length > 0;
        });
    };

    const progress = (() => {
        const stepValues: StepType[] = [
            "COMPANY_DETAILS",
            "ADMIN_SETUP",
            "COMPLETED",
        ];
        const currentIndex = stepValues.indexOf(step);
        return (currentIndex / (stepValues.length - 1)) * 100;
    })();

    const goToNextStep = () => {
        if (validateCurrentStep()) {
            const stepOrder: StepType[] = [
                "COMPANY_DETAILS",
                "ADMIN_SETUP",
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
            "COMPANY_DETAILS",
            "ADMIN_SETUP",
            "COMPLETED",
        ];
        const currentIndex = stepOrder.indexOf(step);
        if (currentIndex > 0) {
            setStep(stepOrder[currentIndex - 1]);
        }
    };

    interface LoadingStage {
        stage: 'init' | 'company' | 'admin' | 'finalizing';
        message: string;
    }

    interface LoadingStateProps {
        stage: LoadingStage;
    }

    const LoadingState = ({ stage }: LoadingStateProps) => (
        <div className="py-6 space-y-6 text-center">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-primary">
                        {stage.stage === 'company' && "Creating Your Company..."}
                        {stage.stage === 'admin' && "Setting Up Admin Account..."}
                        {stage.stage === 'finalizing' && "Finalizing Setup..."}
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                        {stage.stage === 'company' && "Building your digital workspace. This might take a minute..."}
                        {stage.stage === 'admin' && "Configuring administrative access and permissions..."}
                        {stage.stage === 'finalizing' && "Almost there! Preparing your dashboard..."}
                    </p>
                </div>
            </div>
            <div className="space-y-4">
                <Progress
                    value={
                        stage.stage === 'company' ? 33 :
                            stage.stage === 'admin' ? 66 :
                                stage.stage === 'finalizing' ? 90 : 0
                    }
                    className="h-2"
                />
                <p className="text-xs text-muted-foreground">
                    Please don't close this window
                </p>
            </div>
        </div>
    );


    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <div className="space-y-2">
                        <DialogTitle className="text-xl md:text-3xl font-bold bg-gradient-to-r from-[#9747FF] via-[#8A43E6] to-[#6E35B9] bg-clip-text text-transparent pb-1">
                            Get Started with Salut Enterprise
                        </DialogTitle>
                        {step !== "COMPLETED" && (
                            <>
                                <DialogDescription className="text-sm md:text-base font-medium text-foreground/80">
                                    {STEPS[step]}
                                </DialogDescription>
                                <div className="space-y-2">
                                    <Progress
                                        value={progress}
                                        className="h-2"
                                    />
                                    <p className="text-xs md:text-sm text-muted-foreground">
                                        Step{" "}
                                        {Object.keys(STEPS).indexOf(step) + 1}{" "}
                                        of {Object.keys(STEPS).length}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </DialogHeader>

                {isLoading ? (
                    <LoadingState stage={loadingStage} />
                ) : step === "COMPLETED" ? (
                    <div className="py-6 md:py-8 text-center space-y-4">
                        <div className="flex justify-center">
                            <CheckCircle2 className="h-12 w-12 md:h-16 md:w-16 text-primary" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-primary">
                            Thank You for Choosing Salut Enterprise!
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto">
                            Your company has been created successfully. You will
                            be redirected to your dashboard momentarily...
                        </p>
                    </div>
                ) : (
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4 md:space-y-6"
                        >

                            {step === "COMPANY_DETAILS" && (
                                <div className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="cui"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    CUI Number
                                                </FormLabel>
                                                <div className="flex gap-2">
                                                    <FormControl>
                                                        <div className="relative flex-1">
                                                            <Building2 className="absolute left-3 top-2.5 h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
                                                            <Input
                                                                placeholder="Enter CUI"
                                                                className="pl-10 text-sm md:text-base"
                                                                {...field}
                                                                autoFocus
                                                            />
                                                        </div>
                                                    </FormControl>
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        onClick={() =>
                                                            lookupCompany(
                                                                field.value,
                                                            )
                                                        }
                                                        disabled={
                                                            isLookingUp ||
                                                            !field.value
                                                        }
                                                        className="min-w-[100px] md:min-w-[120px] bg-primary/5 hover:bg-primary/10 border-primary/20 hover:border-primary/30"
                                                    >
                                                        {isLookingUp ? (
                                                            <Loader2 className="h-4 w-4 animate-spin" />
                                                        ) : (
                                                            <>
                                                                <Search className="mr-2 h-4 w-4" />
                                                                <span className="hidden sm:inline">
                                                                    Lookup
                                                                </span>{" "}
                                                                Info
                                                            </>
                                                        )}
                                                    </Button>
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                        <FormField
                                            control={form.control}
                                            name="company"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Company Name
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Company Name"
                                                            className="text-sm md:text-base"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="numar_reg_com"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Trade Reg.
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Trade Reg."
                                                            className="text-sm md:text-base"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="address"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Address
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Company Address"
                                                            className="text-sm md:text-base"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="county"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        County
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="County"
                                                            className="text-sm md:text-base"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>



                                </div>
                            )}

                            {step === "ADMIN_SETUP" && (
                                <div className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="adminName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Admin Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Full Name"
                                                        className="text-sm md:text-base"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Email Address
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="email"
                                                        placeholder="your.email@company.com"
                                                        className="text-sm md:text-base"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />


                                    <FormField
                                        control={form.control}
                                        name="adminPassword"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="password"
                                                        placeholder="Minimum 6 characters"
                                                        className="text-sm md:text-base"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="confirmPassword"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Confirm Password
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="password"
                                                        placeholder="Confirm your password"
                                                        className="text-sm md:text-base"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            )}

                            <div className="flex justify-between pt-4">
                                {step !== ("COMPLETED" as StepType) && (
                                    <>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={goToPreviousStep}
                                            disabled={

                                                isLoading
                                            }
                                            className="text-sm md:text-base"
                                        >
                                            <ArrowLeft className="mr-2 h-4 w-4" />{" "}
                                            Back
                                        </Button>

                                        {step !== "ADMIN_SETUP" ? (
                                            <Button
                                                type="button"
                                                onClick={goToNextStep}
                                                disabled={isLoading}
                                                className="text-sm md:text-base"
                                            >
                                                Next{" "}
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        ) : (
                                            <Button
                                                type="submit"
                                                disabled={isLoading}
                                                className="text-sm md:text-base"
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                        Creating...
                                                    </>
                                                ) : (
                                                    "Create Company"
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
