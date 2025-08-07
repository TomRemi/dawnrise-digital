import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  Users, 
  Building, 
  TrendingUp, 
  Award,
  Star,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Target,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import placementsData from '@/data/placements.json';
import testimonialsData from '@/data/testimonials.json';

const Placements = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const stats = [
    { icon: Users, label: 'Students Placed', value: '1500+', description: 'Successful placements' },
    { icon: Building, label: 'Partner Companies', value: '200+', description: 'Hiring partners' },
    { icon: TrendingUp, label: 'Placement Rate', value: '95%', description: 'Success rate' },
    { icon: Award, label: 'Highest Package', value: '₹15 LPA', description: 'Record package' },
  ];

  const companies = [
    'Google', 'Microsoft', 'Amazon', 'Facebook', 'Apple', 'Netflix', 'IBM', 'TCS',
    'Infosys', 'Wipro', 'Accenture', 'Cognizant', 'HCL', 'Tech Mahindra', 'Flipkart', 'Paytm'
  ];

  const placementProcess = [
    {
      step: '1',
      title: 'Skills Assessment',
      description: 'We evaluate your current skills and identify areas for improvement.'
    },
    {
      step: '2',
      title: 'Resume Building',
      description: 'Professional resume creation highlighting your strengths and projects.'
    },
    {
      step: '3',
      title: 'Mock Interviews',
      description: 'Practice sessions with industry experts to boost your confidence.'
    },
    {
      step: '4',
      title: 'Job Matching',
      description: 'Connect with companies that match your skills and career goals.'
    },
    {
      step: '5',
      title: 'Interview Preparation',
      description: 'Company-specific preparation for technical and HR rounds.'
    },
    {
      step: '6',
      title: 'Placement Success',
      description: 'Secure your dream job with our dedicated placement support.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>95% Placement Success Rate - Student Placements | IAT Technologies</title>
        <meta name="description" content="1500+ students successfully placed in top companies like Google, Microsoft, Amazon. 95% placement rate with dedicated career support and industry partnerships." />
        <meta name="keywords" content="IT job placement Chennai, placement guarantee, student success stories, career support, job assistance, top company placements" />
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
              className="max-w-4xl mx-auto"
            >
              <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-500/30">
                95% Placement Success Rate
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our Students Work at <span className="text-yellow-300">Top Companies</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Join 1500+ successful graduates who transformed their careers with our 
                dedicated placement assistance and industry partnerships.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Placement Statistics */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Placement <span className="gradient-text">Statistics</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our proven track record speaks for itself. See how we've helped thousands of students achieve their career goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover-lift border-0 shadow-soft hover:shadow-medium text-center group">
                    <CardContent className="p-6">
                      <div className="mb-4 inline-flex p-4 bg-gradient-orange rounded-xl group-hover:scale-110 transition-transform">
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                      <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                      <p className="text-sm text-muted-foreground">{stat.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Placements */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Recent <span className="gradient-text">Success Stories</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet our recent graduates who landed amazing opportunities at top companies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {placementsData.map((placement, index) => (
                <motion.div
                  key={placement.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover-lift border-0 shadow-soft hover:shadow-medium group overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-orange flex items-center justify-center text-white font-bold text-xl">
                          {placement.studentName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                            {placement.studentName}
                          </h3>
                          <p className="text-sm text-muted-foreground">{placement.course}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Company:</span>
                          <span className="font-semibold">{placement.company}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Package:</span>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            {placement.package}
                          </Badge>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-muted-foreground">Successfully Placed</span>
                          </div>
                          <Button variant="ghost" size="sm" className="p-0 h-auto">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Companies */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Hiring Partners</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We've partnered with 200+ companies across various industries to provide the best opportunities for our students.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
              {companies.map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center justify-center"
                >
                  <div className="w-full h-16 bg-white rounded-lg shadow-soft hover:shadow-medium transition-all flex items-center justify-center group cursor-pointer">
                    <span className="text-sm font-semibold text-gray-600 group-hover:text-primary transition-colors">
                      {company}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Placement Process */}
        <section className="py-16 bg-gradient-to-br from-accent/50 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Placement Process</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We follow a systematic approach to ensure every student gets the best possible placement opportunity.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {placementProcess.map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-soft hover:shadow-medium hover-lift">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-orange rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                        {process.step}
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{process.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {process.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="py-16 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="relative container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our <span className="text-yellow-300">Graduates Say</span>
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Real stories from real students who transformed their careers with us.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Card className="glass border-white/20 text-white">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl leading-relaxed mb-6">
                    "{testimonialsData[currentTestimonial].text}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-orange flex items-center justify-center text-white font-bold text-xl">
                      {testimonialsData[currentTestimonial].name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{testimonialsData[currentTestimonial].name}</h4>
                      <p className="text-gray-300">
                        {testimonialsData[currentTestimonial].role} at {testimonialsData[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center items-center space-x-4 mt-8">
                <Button
                  variant="glass"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                
                <div className="flex space-x-2">
                  {testimonialsData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentTestimonial ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="glass"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <Target className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start your journey towards a successful career in IT. Our placement team is 
                ready to help you achieve your career goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Start Your Journey
                </Button>
                <Button variant="outline" size="lg">
                  Talk to Placement Team
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Placements;