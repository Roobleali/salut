import { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { Building2, Clock, MessagesSquare, Shield, Users, Loader2 } from 'lucide-react';

export function Contact() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    name: z.string().min(2, 'Please enter your name.'),
    email: z.string().email('Please enter a valid email address.'),
    company: z.string().min(2, 'Please enter your company name.'),
    message: z.string().min(10, 'Please enter a message.'),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const trustElements = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Our team is always available to assist you with your remittance needs.'
    },
    {
      icon: Shield,
      title: 'Secure & Trusted',
      description: 'Your data and transfers are protected with industry-leading security.'
    },
    {
      icon: Users,
      title: 'Thousands of Clients',
      description: 'Trusted by the Somali community in the UK and beyond.'
    },
    {
      icon: Building2,
      title: 'Remittance Experts',
      description: 'Years of experience serving the diaspora with care and professionalism.'
    }
  ];

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!formRef.current) return;
    setIsLoading(true);

    try {
      const templateParams = {
        to_name: "dolcenera  Team",
        from_name: values.name,
        from_email: values.email,
        company: values.company,
        message: values.message,
        reply_to: values.email,
      };

      await emailjs.send(
        'service_lnippfb',
        'template_ud0fzwk',
        templateParams,
        'Zf4lxizbewKMs2_SJ'
      );

      toast({
        title: 'Message Sent',
        description: 'We will respond to your message as soon as possible.',
      });
      form.reset();

      // Redirect to the Thank You page after a short delay
      setTimeout(() => {
        window.location.href = '/thank-you';
      }, 1500);
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: 'Message Error',
        description: 'There was an error sending your message. Please try again later.',
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Contact Garemit</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're here to help. Reach out to our team for support, questions, or partnership opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {trustElements.map((element, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="pt-6">
                  <element.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{element.title}</h3>
                  <p className="text-sm text-gray-600">{element.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-white rounded-xl shadow-sm p-8">
            <Card className="border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Email</h3>
                    <a href="mailto:info@garemit.com" className="text-primary hover:underline">
                      info@garemit.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Phone</h3>
                    <a href="tel:+441234567890" className="text-primary hover:underline">
                      +44 1234 567890
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Address</h3>
                    <p className="text-gray-600">
                      Garemit Ltd.<br />123 Somali Street<br />London, UK
                    </p>
                  </div>
                  <div className="pt-4">
                    <MessagesSquare className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">Fast Response</h3>
                    <p className="text-sm text-gray-600">
                      We aim to respond to all inquiries within 24 hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
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
                          <FormLabel>Your Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email address" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company (optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="How can we help you?"
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}