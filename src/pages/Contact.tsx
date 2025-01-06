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

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!formRef.current) return;
    setIsLoading(true);

    try {
      const templateParams = {
        to_name: "Salut Tech Team",
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
        title: "Message sent successfully",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const trustElements = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Quick response time with dedicated support team"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "ISO 27001 certified, GDPR compliant solutions"
    },
    {
      icon: Users,
      title: "500+ Clients",
      description: "Trusted by leading companies worldwide"
    },
    {
      icon: Building2,
      title: "Industry Expert",
      description: "10+ years of enterprise solutions"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Let's Transform Your Business Together</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join hundreds of industry leaders who've already upgraded their enterprise solutions with Salut Tech
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
                    <a href="mailto:info@saluttech.ro" className="text-primary hover:underline">
                      info@saluttech.ro
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Phone</h3>
                    <a href="tel:+40743118879" className="text-primary hover:underline">
                      +40 743 118 879
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Address</h3>
                    <p className="text-gray-600">
                      Bucharest<br />
                      Romania
                    </p>
                  </div>
                  <div className="pt-4">
                    <MessagesSquare className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">Quick Response Guarantee</h3>
                    <p className="text-sm text-gray-600">
                      Our team typically responds within 24 hours to all inquiries
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" type="email" {...field} />
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
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company" {...field} />
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
                              placeholder="How can we help transform your business?"
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
                        "Send Message"
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