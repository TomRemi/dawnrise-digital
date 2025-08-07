import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Users,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useContactForm } from '@/api/hooks';
import coursesData from '@/data/courses.json';

const Contact = () => {
  const { toast } = useToast();
  const { submitForm, loading, success, error } = useContactForm();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Tech Park, Anna Salai', 'Chennai, Tamil Nadu - 600002'],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 98765 43211'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@iattechnologies.com', 'careers@iattechnologies.com'],
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon - Fri: 9:00 AM - 8:00 PM', 'Sat - Sun: 10:00 AM - 6:00 PM'],
      action: 'View Schedule'
    }
  ];

  const faqs = [
    {
      question: 'What is the duration of your courses?',
      answer: 'Our courses range from 3-6 months depending on the program. Full Stack Development is 6 months, Data Science is 5 months, and Digital Marketing is 3 months.'
    },
    {
      question: 'Do you provide placement assistance?',
      answer: 'Yes, we have a 95% placement success rate. Our dedicated placement team works with 200+ partner companies to ensure job opportunities for our graduates.'
    },
    {
      question: 'Are the classes online or offline?',
      answer: 'We offer both online and offline classes. You can choose the mode that suits your schedule and preferences.'
    },
    {
      question: 'What are the prerequisites for joining?',
      answer: 'Most of our courses are designed for beginners. Basic computer knowledge is sufficient. For advanced courses, we provide foundation modules.'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const result = await submitForm(formData);
    
    if (result.success) {
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon!",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
    } else {
      toast({
        title: "Error",
        description: result.error || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Get Free Consultation | IAT Technologies Chennai</title>
        <meta name="description" content="Contact IAT Technologies for free career consultation. Located in Chennai with expert counselors ready to help you choose the right IT course. Call +91 98765 43210." />
        <meta name="keywords" content="contact IAT Technologies, free consultation, career counseling Chennai, IT training contact, admission enquiry" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="relative container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Get In <span className="text-yellow-300">Touch</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Ready to transform your career? Contact our expert counselors for 
                free consultation and choose the perfect course for your goals.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-white">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-green-400" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-green-400" />
                  <span>Expert Counselors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-green-400" />
                  <span>Flexible Schedule</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-background -mt-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center border-0 shadow-soft hover:shadow-medium hover-lift group">
                    <CardContent className="p-6">
                      <div className="mb-4 inline-flex p-4 bg-gradient-orange rounded-xl group-hover:scale-110 transition-transform">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                      <div className="space-y-1 mb-4">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white">
                        {info.action}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                      Send Us a <span className="gradient-text">Message</span>
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 98765 43210"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="course">Interested Course</Label>
                          <select
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                          >
                            <option value="">Select a course</option>
                            {coursesData.map((course) => (
                              <option key={course.id} value={course.title}>
                                {course.title}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your career goals and any questions you have..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        variant="hero" 
                        size="lg" 
                        className="w-full"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </Button>

                      {success && (
                        <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-md">
                          <CheckCircle className="w-5 h-5" />
                          <span className="text-sm">Message sent successfully! We'll get back to you soon.</span>
                        </div>
                      )}

                      {error && (
                        <div className="text-red-600 bg-red-50 p-3 rounded-md text-sm">
                          {error}
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Map & Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {/* Map */}
                <Card className="border-0 shadow-soft overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Visit Our Campus</h3>
                      <p className="text-sm text-muted-foreground">
                        123 Tech Park, Anna Salai<br />
                        Chennai, Tamil Nadu - 600002
                      </p>
                      <Button variant="outline" size="sm" className="mt-4">
                        View on Google Maps
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Quick Contact */}
                <Card className="border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-xl">Need Immediate Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-accent/50 rounded-lg">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Call us directly</p>
                        <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-accent/50 rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Email us</p>
                        <p className="text-sm text-muted-foreground">info@iattechnologies.com</p>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      Schedule a Call Back
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our courses, admissions, and placement process.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-soft hover:shadow-medium transition-all">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-3 text-primary">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <p className="text-muted-foreground mb-4">
                Still have questions? We're here to help!
              </p>
              <Button variant="hero" size="lg">
                Contact Our Counselors
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;