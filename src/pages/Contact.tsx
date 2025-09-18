import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Send, Instagram, Globe, Youtube, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'JBCN Stars Team',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Failed to Send Message",
        description: "Please try again later or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "jbcnstars.parel@jbcnschool.edu.in",
      description: "Get in touch for general inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 98765 43210",
      description: "Monday to Friday, 9 AM - 6 PM"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "JBCN Parel, Mumbai",
      description: "Come visit our campus"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", url: "#", handle: "@jbcnstars" },
    { icon: Globe, name: "Website", url: "#", handle: "jbcnschool.edu.in" },
    { icon: Youtube, name: "YouTube", url: "#", handle: "JBCN Stars" }
  ];

  const faqs = [
    {
      question: "Who can participate in JBCN Stars?",
      answer: "JBCNSTARS is open to students from grades 6-12 across all schools. This is a team competition where learners will participate in teams of three."
    },
    {
      question: "What is the format of the competition?",
      answer: "The competition has three rounds: Individual Round (30 MCQs, 60 minutes, 4 marks per correct answer, -1 for incorrect), Team Round (10 problems, 60 minutes, 10 marks per correct answer, no negative marking), and Math Quiz (top 4 teams from each level qualify)."
    },
    {
      question: "What are the prizes and recognition for winners?",
      answer: "Individual awards: Top three scorers in each level get plaques. Team awards: Top three teams in each level get plaques and certificates for each member. Math Star trophy for Quiz round winners. Participation certificates for all participants."
    },
    {
      question: "What topics are covered in the competition?",
      answer: `**Syllabus:**

**Junior (grades 6 & 7)**
Logical Thinking, Number pattern, Figure Pattern, Guess on 3-digit, 4 digit numbers by given number properties, Speed, distance & time Problem, ratio and percentages, basic geometry

**Intermediate (grades 8, 9 & 10)**
Logical Thinking problems, Arithmetic, Number theory, Pattern, Algebra, Geometry, Trigonometry, Statistics and Probability.

**Senior (grades 11 & 12)**
Arithmetic, Number theory, Pattern, Algebra, shapes and measures, Geometry, Trigonometry, Statistics and Probability.

Questions are designed to motivate learners to think logically and challenge their mind with intriguing math problems, based on the topics commonly taught in these grades.`
    },
    {
      question: "When and where is the competition?",
      answer: "Date: 11th October 2025, Saturday. Time: 8:00 AM to 3:00 PM. Venue: JBCN Parel, Mumbai. This is an exhilarating display of mathematical prowess and problem-solving skills for all math enthusiasts."
    },
    {
      question: "How should I prepare for JBCNSTARS?",
      answer: "Students need to prepare on their own as we do not conduct preparation workshops. Focus on the syllabus topics mentioned for your grade level. Practice logical thinking, problem-solving, and mathematical concepts covered in your curriculum. Review past papers and similar competition problems to familiarize yourself with the format and difficulty level."
    },
    {
      question: "Is there a registration fee?",
      answer: "Please check the registration form for current fee details. This covers competition materials, refreshments, and certificates."
    },
    {
      question: "Are calculators and other tools allowed?",
      answer: "No calculators are allowed during any round. The competition emphasizes logical thinking and problem-solving skills without electronic aids. Detailed guidelines are provided with registration materials."
    }
  ];

  return (
    <Layout>
      <div className="py-16 sm:py-20 grid-bg">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <HelpCircle className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              Contact & <span className="text-primary">FAQ</span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground-muted max-w-3xl mx-auto px-4">
              Have questions about JBCNSTARS? Want to participate or need more information? 
              Find answers below or get in touch with us directly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 mb-16 sm:mb-20">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="card-premium p-8">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                      className="border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="card-premium flex items-start space-x-4 group p-6"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                      <p className="text-primary font-medium mb-1">{info.detail}</p>
                      <p className="text-muted-foreground text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="card-premium p-6">
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-primary/10 transition-colors duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <social.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">{social.name}</p>
                        <p className="text-muted-foreground text-sm">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            
            <div className="card-premium p-8 animate-fade-in">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border rounded-2xl px-6 transition-all duration-300 hover:border-primary/30"
                  >
                    <AccordionTrigger className="text-left py-6 hover:text-primary transition-colors duration-300">
                      <span className="text-lg font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-muted-foreground leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Still Have Questions */}
            <div className="mt-16 text-center">
              <div className="card-premium max-w-2xl mx-auto p-8">
                <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                <p className="text-muted-foreground mb-6">
                  Can't find the answer you're looking for? Our team is here to help you with any additional questions about JBCNSTARS.
                </p>
                <Button className="px-8 py-4 text-lg font-semibold">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us Directly
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;