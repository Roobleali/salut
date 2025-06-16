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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Step types for Garemit onboarding
type StepType = "SIGNUP" | "PROFILE" | "INTENT" | "VERIFY" | "DASHBOARD" | "KYC" | "COMPLETED";

// Analytics event types
type AnalyticsEvent = {
    event: string;
    step: StepType;
    timestamp: number;
    data?: any;
};

// Local storage keys
const STORAGE_KEYS = {
    ONBOARDING_PROGRESS: 'garemit_onboarding_progress',
    ONBOARDING_STEP: 'garemit_onboarding_step',
    ONBOARDING_FORM_DATA: 'garemit_onboarding_form_data',
};

const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    consent: z.boolean().refine(val => val, { message: "You must accept the terms and privacy policy" }),
    referral: z.string().optional(),
    // Step 2
    fullName: z.string().optional(),
    country: z.string().optional(),
    phone: z.string().optional(),
    language: z.string().optional(),
    // Step 3
    destination: z.string().optional(),
    frequency: z.string().optional(),
    recipientType: z.string().optional(),
    typicalAmount: z.string().optional(),
    // Step 4 (OTP)
    otp: z.string().optional(),
    // Step 6 (KYC)
    idUpload: z.any().optional(),
    selfie: z.any().optional(),
    proofOfAddress: z.any().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface OnboardingModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function OnboardingModal({ open, onOpenChange }: OnboardingModalProps) {
    const [step, setStep] = useState<StepType>("SIGNUP");

    const STEPS: Record<StepType, string> = {
        SIGNUP: "Sign Up / Sign In",
        PROFILE: "Basic Profile Setup",
        INTENT: "Transfer Intent",
        VERIFY: "Verify Email / Phone",
        DASHBOARD: "Welcome to Garemit!",
        KYC: "KYC / ID Verification",
        COMPLETED: "Completed",
    };

    // Track total steps and current step number
    const TOTAL_STEPS = 7; // Total number of steps in the onboarding process
    const currentStepNumber = (() => {
        const stepOrder: StepType[] = ["SIGNUP", "PROFILE", "INTENT", "VERIFY", "DASHBOARD", "KYC", "COMPLETED"];
        return stepOrder.indexOf(step) + 1;
    })();

    // Analytics tracking function
    const trackEvent = (event: string, data?: any) => {
        const analyticsEvent: AnalyticsEvent = {
            event,
            step,
            timestamp: Date.now(),
            data
        };

        // Log to console for development
        console.log('Analytics Event:', analyticsEvent);
    };

    // Save progress to local storage
    const saveProgress = (formData: FormData) => {
        try {
            localStorage.setItem(STORAGE_KEYS.ONBOARDING_PROGRESS, JSON.stringify({
                step,
                formData,
                lastUpdated: Date.now()
            }));
        } catch (error) {
            console.error('Failed to save progress:', error);
        }
    };

    // Load progress from local storage
    const loadProgress = () => {
        try {
            const savedProgress = localStorage.getItem(STORAGE_KEYS.ONBOARDING_PROGRESS);
            if (savedProgress) {
                const { step: savedStep, formData } = JSON.parse(savedProgress);
                setStep(savedStep as StepType);
                form.reset(formData);
                trackEvent('resume_onboarding', { savedStep });
            }
        } catch (error) {
            console.error('Failed to load progress:', error);
        }
    };

    // Track modal open/close events
    useEffect(() => {
        if (open) {
            trackEvent('open_modal');
            loadProgress();
        } else {
            trackEvent('close_modal');
        }
    }, [open]);

    // Track step changes
    useEffect(() => {
        trackEvent('step_change', { from: step });
    }, [step]);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            consent: false,
            referral: "",
            fullName: "",
            country: "",
            phone: "",
            language: "",
            destination: "",
            frequency: "",
            recipientType: "",
            typicalAmount: "",
            otp: "",
        },
    });

    // Save form data on change
    useEffect(() => {
        const subscription = form.watch((formData) => {
            saveProgress(formData as FormData);
        });
        return () => subscription.unsubscribe();
    }, [form.watch]);

    const goToNextStep = () => {
        const stepOrder: StepType[] = ["SIGNUP", "PROFILE", "INTENT", "VERIFY", "DASHBOARD", "KYC", "COMPLETED"];
        const currentIndex = stepOrder.indexOf(step);
        if (currentIndex < stepOrder.length - 1) {
            setStep(stepOrder[currentIndex + 1]);
        }
    };

    const goToPreviousStep = () => {
        const stepOrder: StepType[] = ["SIGNUP", "PROFILE", "INTENT", "VERIFY", "DASHBOARD", "KYC", "COMPLETED"];
        const currentIndex = stepOrder.indexOf(step);
        if (currentIndex > 0) {
            setStep(stepOrder[currentIndex - 1]);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <div className="space-y-2">
                        <DialogTitle className="text-xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent pb-1">
                            Garemit Onboarding
                        </DialogTitle>
                        <div className="flex items-center justify-between">
                            <DialogDescription className="text-sm md:text-base font-medium text-foreground/80">
                                {STEPS[step]}
                            </DialogDescription>
                            <span className="text-sm text-muted-foreground">
                                Step {currentStepNumber} of {TOTAL_STEPS}
                            </span>
                        </div>
                        <Progress value={(currentStepNumber / TOTAL_STEPS) * 100} className="h-2" />
                    </div>
                </DialogHeader>
                {step === "SIGNUP" && (
                    <Form {...form}>
                        <form className="space-y-6" onSubmit={form.handleSubmit(() => setStep("PROFILE"))}>
                            <div className="space-y-4">
                                <FormField control={form.control} name="email" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl><Input type="email" placeholder="you@email.com" {...field} /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="password" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl><Input type="password" placeholder="Password" {...field} /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="referral" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Referral Code (optional)</FormLabel>
                                        <FormControl><Input placeholder="Referral code" {...field} /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="consent" render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center gap-2">
                                            <input type="checkbox" id="consent" checked={field.value} onChange={e => field.onChange(e.target.checked)} className="accent-primary" />
                                            <FormLabel htmlFor="consent" className="mb-0">I agree to the <a href="/legal/privacy" className="underline text-primary">Privacy Policy</a> and Terms.</FormLabel>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            </div>

                        </form>
                    </Form>
                )}
                {step === "PROFILE" && (
                    <Form {...form}>
                        <form className="space-y-6" onSubmit={form.handleSubmit(() => setStep("INTENT"))}>
                            <div className="space-y-4">
                                <FormField control={form.control} name="fullName" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl><Input placeholder="Your full name" {...field} /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="country" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Country of Residence</FormLabel>
                                        <FormControl>
                                            <select {...field} className="w-full border rounded px-3 py-2">
                                                <option value="">Select country</option>
                                                <option value="UK">United Kingdom</option>
                                                <option value="SO">Somalia</option>
                                                <option value="US">United States</option>
                                                <option value="CA">Canada</option>
                                                <option value="KE">Kenya</option>
                                                <option value="ET">Ethiopia</option>
                                                {/* Add more countries as needed */}
                                            </select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="phone" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Mobile Number (optional)</FormLabel>
                                        <FormControl><Input placeholder="e.g. +44 7123 456789" {...field} /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="language" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Language Preference</FormLabel>
                                        <FormControl>
                                            <select {...field} className="w-full border rounded px-3 py-2">
                                                <option value="">Select language</option>
                                                <option value="en">English</option>
                                                <option value="so">Somali</option>
                                            </select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            </div>
                        </form>
                    </Form>
                )}
                {/* Steps PROFILE, INTENT, VERIFY, DASHBOARD, KYC to be implemented next */}
                <div className="flex justify-between mt-6">
                    {currentStepNumber > 1 && (
                        <Button
                            type="button"
                            variant="outline"
                            onClick={goToPreviousStep}
                            className="flex-1 mr-2"
                        >
                            Back
                        </Button>
                    )}
                    <Button
                        type="submit"
                        className="flex-1 text-white"
                        onClick={() => {
                            trackEvent('continue_step', { from: step });
                            form.handleSubmit(() => goToNextStep())();
                        }}
                    >
                        {currentStepNumber === TOTAL_STEPS ? 'Complete' : 'Continue'}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
