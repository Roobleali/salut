import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t, i18n } = useTranslation();

  const formSchema = z.object({
    name: z.string().min(2, t('form.name.error')),
    email: z.string().email(t('form.email.error')),
    company: z.string().min(2, t('form.company.error')),
    message: z.string().min(10, t('form.message.error')),
  });

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

  const trustElements = [
    {
      icon: Clock,
      title: t('trustElements.support.title'),
      description: t('trustElements.support.description')
    },
    {
      icon: Shield,
      title: t('trustElements.security.title'),
      description: t('trustElements.security.description')
    },
    {
      icon: Users,
      title: t('trustElements.clients.title'),
      description: t('trustElements.clients.description')
    },
    {
      icon: Building2,
      title: t('trustElements.expert.title'),
      description: t('trustElements.expert.description')
    }
  ];

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
        title: t('form.success.title'),
        description: t('form.success.description'),
      });
      form.reset();

      // Redirect to the Thank You page after a short delay
      setTimeout(() => {
        window.location.href = `/${i18n.language}/thank-you`;
      }, 1500);
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: t('form.error.title'),
        description: t('form.error.description'),
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
            <h1 className="text-4xl font-bold mb-4">{t('pageTitle')}</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t('pageSubtitle')}
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
                <CardTitle className="text-2xl">{t('contactInfo.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">{t('contactInfo.email.label')}</h3>
                    <a href="mailto:info@saluttech.ro" className="text-primary hover:underline">
                      {t('contactInfo.email.value')}
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">{t('contactInfo.phone.label')}</h3>
                    <a href="tel:+40743118879" className="text-primary hover:underline">
                      {t('contactInfo.phone.value')}
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">{t('contactInfo.address.label')}</h3>
                    <p className="text-gray-600">
                      {t('contactInfo.address.value').split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                  <div className="pt-4">
                    <MessagesSquare className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">{t('contactInfo.response.title')}</h3>
                    <p className="text-sm text-gray-600">
                      {t('contactInfo.response.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-2xl">{t('form.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('form.name.label')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('form.name.placeholder')} {...field} />
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
                          <FormLabel>{t('form.email.label')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('form.email.placeholder')} type="email" {...field} />
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
                          <FormLabel>{t('form.company.label')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('form.company.placeholder')} {...field} />
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
                          <FormLabel>{t('form.message.label')}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t('form.message.placeholder')}
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
                          {t('form.sending')}
                        </>
                      ) : (
                        t('form.submit')
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