import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  Users, 
  Target, 
  Award, 
  Heart,
  CheckCircle,
  TrendingUp,
  Globe,
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from curriculum design to student support.'
    },
    {
      icon: Heart,
      title: 'Student-Centric',
      description: 'Every decision we make is centered around our students\' success and career growth.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously innovate our teaching methods to stay ahead of industry trends.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Preparing students for global opportunities with international standards.'
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Foundation',
      description: 'IAT Technologies was founded with a vision to bridge the gap between academia and industry.'
    },
    {
      year: '2020',
      title: 'First 100 Students',
      description: 'Successfully trained and placed our first batch of 100 students with 98% placement rate.'
    },
    {
      year: '2021',
      title: 'Expansion',
      description: 'Expanded our course offerings to include Data Science, Cloud Computing, and Digital Marketing.'
    },
    {
      year: '2022',
      title: '1000+ Placements',
      description: 'Achieved the milestone of placing over 1000 students in top companies.'
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Recognized as "Best IT Training Institute" by Chennai IT Association.'
    },
    {
      year: '2024',
      title: 'Present Day',
      description: 'Continuing to lead with 1500+ successful placements and expanding internationally.'
    }
  ];

  const team = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Founder & CEO',
      experience: '15+ years',
      expertise: 'Full Stack Development, AI/ML',
      description: 'Former Tech Lead at Google with a passion for education and student success.'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Placements',
      experience: '12+ years',
      expertise: 'Career Counseling, Industry Relations',
      description: 'Ex-HR Director at Microsoft, dedicated to connecting talent with opportunities.'
    },
    {
      name: 'Arun Verma',
      role: 'Lead Instructor',
      experience: '10+ years',
      expertise: 'Data Science, Cloud Computing',
      description: 'Former Data Scientist at Amazon, bringing real-world experience to classroom.'
    }
  ];

  const achievements = [
    { number: '1500+', label: 'Students Trained', icon: Users },
    { number: '95%', label: 'Placement Rate', icon: TrendingUp },
    { number: '200+', label: 'Partner Companies', icon: Award },
    { number: '5+', label: 'Years of Excellence', icon: CheckCircle },
  ];

  return (
    <>
      <Helmet>
        <title>About IAT Technologies - Leading IT Training Institute in Chennai</title>
        <meta name="description" content="Learn about IAT Technologies' journey from startup to Chennai's leading IT training institute. 5+ years of excellence, 1500+ successful placements, and a mission to transform careers." />
        <meta name="keywords" content="about IAT Technologies, IT training institute Chennai, company history, our mission, leadership team, achievements" />
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
                Transforming Careers Through <span className="text-yellow-300">Education</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Founded with a mission to bridge the gap between academic learning and industry requirements, 
                IAT Technologies has become Chennai's most trusted IT training institute.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our <span className="gradient-text">Mission</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  To empower aspiring IT professionals with industry-relevant skills and knowledge, 
                  ensuring they not only secure jobs but excel in their chosen careers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that quality education should be accessible to everyone. Our comprehensive 
                  training programs are designed to transform beginners into industry-ready professionals 
                  through hands-on learning, real-world projects, and dedicated mentorship.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <Card className="p-6 border-0 shadow-soft hover:shadow-medium hover-lift">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Target className="w-6 h-6 text-primary mr-3" />
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading global platform for IT education, recognized for our 
                    innovative teaching methods and exceptional student outcomes.
                  </p>
                </Card>

                <Card className="p-6 border-0 shadow-soft hover:shadow-medium hover-lift">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Award className="w-6 h-6 text-primary mr-3" />
                    Our Promise
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every student who joins us will receive personalized attention, 
                    industry-relevant training, and dedicated placement support.
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Core Values</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These values guide everything we do and shape the culture at IAT Technologies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center border-0 shadow-soft hover:shadow-medium hover-lift group">
                    <CardContent className="p-6">
                      <div className="mb-4 inline-flex p-4 bg-gradient-orange rounded-xl group-hover:scale-110 transition-transform">
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Journey</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From a small startup to Chennai's leading IT training institute - here's our story.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center mb-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <Card className="p-6 border-0 shadow-soft hover:shadow-medium hover-lift">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-gradient-orange rounded-full flex items-center justify-center text-white font-bold mr-4">
                          {item.year.slice(-2)}
                        </div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </Card>
                  </div>

                  <div className="flex-shrink-0 mx-4">
                    <div className="w-4 h-4 bg-primary rounded-full relative">
                      {index < timeline.length - 1 && (
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-primary/30" />
                      )}
                    </div>
                  </div>

                  <div className="flex-1 lg:block hidden" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-gradient-to-br from-accent/50 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Achievements</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence and student success.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <Card className="p-6 border-0 shadow-soft hover:shadow-medium hover-lift group">
                    <CardContent className="p-0">
                      <div className="mb-4 inline-flex p-3 bg-gradient-orange rounded-xl group-hover:scale-110 transition-transform">
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                      <div className="text-sm text-muted-foreground">{achievement.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our <span className="gradient-text">Leadership Team</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experienced professionals dedicated to your success and career growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-soft hover:shadow-medium hover-lift text-center group">
                    <CardContent className="p-6">
                      <div className="w-24 h-24 bg-gradient-orange rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-2">{member.role}</p>
                      <p className="text-sm text-muted-foreground mb-3">{member.experience} • {member.expertise}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="relative container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-gray-200 mb-8">
                Join thousands of successful professionals who chose IAT Technologies 
                for their career transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="glass" size="lg" asChild>
                  <Link to="/courses">
                    Explore Courses
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" asChild>
                  <Link to="/contact">
                    Contact Us
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

export default About;