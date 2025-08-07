import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import { 
  BookOpen, 
  Users, 
  Trophy, 
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  GraduationCap,
  Award,
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import coursesData from '@/data/courses.json';
import testimonialsData from '@/data/testimonials.json';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Industry-Relevant Curriculum',
      description: 'Learn the latest technologies with hands-on projects designed by industry experts.',
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from seasoned professionals with years of real-world experience.',
    },
    {
      icon: Trophy,
      title: '95% Placement Success',
      description: 'Join our 1500+ successful graduates placed in top companies worldwide.',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Average 150% salary hike for our graduates within 6 months.',
    },
  ];

  const whyChooseUs = [
    'Live Project Training',
    '24/7 Learning Support',
    'Industry Partnerships',
    'Mock Interviews',
    'Resume Building',
    'Lifetime Access',
  ];

  // Get first 3 courses for preview
  const featuredCourses = coursesData.slice(0, 3);
  
  // Get first 3 testimonials
  const featuredTestimonials = testimonialsData.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>IAT Technologies - Best IT Training Institute in Chennai | 95% Placement Success</title>
        <meta name="description" content="Transform your career with IAT Technologies - Chennai's leading IT training institute. 1500+ students placed in top companies. Expert-led courses in Full Stack, Data Science, Cloud Computing & more." />
        <meta name="keywords" content="IT training Chennai, placement guarantee, full stack development, data science course, digital marketing training, IAT Technologies" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-accent/50 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose <span className="gradient-text">IAT Technologies?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're committed to transforming careers through quality education and guaranteed placement assistance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full hover-lift border-0 shadow-soft hover:shadow-medium">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 inline-flex p-3 bg-gradient-orange rounded-xl group-hover:scale-110 transition-transform">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Popular <span className="gradient-text">Courses</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our industry-leading courses designed to get you job-ready in months, not years.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover-lift border-0 shadow-soft hover:shadow-medium group">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                            {course.level}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium">{course.rating}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {course.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center space-x-1">
                            <GraduationCap className="w-4 h-4" />
                            <span>{course.students} students</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Award className="w-4 h-4" />
                            <span>{course.placement} placed</span>
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-2xl font-bold text-primary">{course.price}</span>
                            <span className="text-sm text-muted-foreground ml-2">{course.duration}</span>
                          </div>
                          <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
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
              <Button variant="hero" size="lg" asChild>
                <Link to="/courses">
                  View All Courses
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Success <span className="gradient-text">Stories</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from our successful graduates who transformed their careers with IAT Technologies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover-lift border-0 shadow-soft hover:shadow-medium">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-orange flex items-center justify-center text-white font-semibold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>
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
              <Button variant="outline" size="lg" asChild>
                <Link to="/placements">
                  View All Success Stories
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Join India's Most <span className="gradient-text">Trusted</span> IT Institute
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  With over 5 years of excellence in IT training, we've helped thousands of students 
                  transform their careers. Our proven methodology combines theoretical knowledge with 
                  practical experience.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {whyChooseUs.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <Button variant="hero" size="lg" asChild>
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all">
                      <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">95%</div>
                      <div className="text-sm text-muted-foreground">Placement Rate</div>
                    </Card>
                    <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all">
                      <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">1500+</div>
                      <div className="text-sm text-muted-foreground">Students Trained</div>
                    </Card>
                  </div>
                  <div className="space-y-4 mt-8">
                    <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all">
                      <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">150%</div>
                      <div className="text-sm text-muted-foreground">Avg Salary Hike</div>
                    </Card>
                    <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all">
                      <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">5+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </Card>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="relative container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Join thousands of successful professionals who chose IAT Technologies. 
                Start your journey today with our industry-leading courses and guaranteed placement assistance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="glass" size="xl" asChild>
                  <Link to="/courses">
                    Explore Courses
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" asChild>
                  <Link to="/contact">
                    Get Free Consultation
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;