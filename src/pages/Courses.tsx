import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  Clock, 
  Users, 
  Star, 
  Award, 
  Filter,
  Search,
  ArrowRight,
  CheckCircle,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import coursesData from '@/data/courses.json';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const categories = ['All', 'Development', 'Data Science', 'Marketing', 'Cloud', 'Security'];

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    // Simple category matching based on course title
    const matchesCategory = selectedCategory === 'All' || 
                           (selectedCategory === 'Development' && course.title.includes('Stack')) ||
                           (selectedCategory === 'Data Science' && course.title.includes('Data')) ||
                           (selectedCategory === 'Marketing' && course.title.includes('Marketing')) ||
                           (selectedCategory === 'Cloud' && course.title.includes('Cloud')) ||
                           (selectedCategory === 'Security' && course.title.includes('Security'));
    
    return matchesSearch && matchesLevel && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>IT Training Courses - Full Stack, Data Science, Cloud Computing | IAT Technologies</title>
        <meta name="description" content="Explore our comprehensive IT training courses including Full Stack Development, Data Science, Digital Marketing, Cloud Computing, and Cybersecurity. Industry-relevant curriculum with guaranteed placement support." />
        <meta name="keywords" content="IT courses Chennai, full stack development course, data science training, digital marketing course, cloud computing AWS, cybersecurity training, placement guarantee" />
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
                Premium <span className="text-yellow-300">IT Courses</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Master in-demand skills with our industry-focused courses. 
                Expert instructors, live projects, and guaranteed placement support.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-white">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Live Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Expert Instructors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Placement Support</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ 
                y: [0, -30, 0],
                rotate: [0, 10, 0] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 right-20 w-40 h-40 bg-primary-light/20 rounded-full blur-xl"
            />
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Level:</span>
                  <div className="flex space-x-2">
                    {levels.map((level) => (
                      <Button
                        key={level}
                        variant={selectedLevel === level ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedLevel(level)}
                      >
                        {level}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">Category:</span>
                  <div className="flex space-x-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {filteredCourses.length} Course{filteredCourses.length !== 1 ? 's' : ''} Found
              </h2>
              <p className="text-muted-foreground">
                Choose from our carefully curated courses designed by industry experts.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover-lift border-0 shadow-soft hover:shadow-large group overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {course.level}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {course.description}
                      </p>
                    </CardHeader>

                    <CardContent className="pt-0">
                      {/* Technologies */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {course.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {course.technologies.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{course.technologies.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6 py-4 bg-accent/50 rounded-lg px-3">
                        <div className="text-center">
                          <Clock className="w-4 h-4 text-primary mx-auto mb-1" />
                          <div className="text-xs text-muted-foreground">{course.duration}</div>
                        </div>
                        <div className="text-center">
                          <Users className="w-4 h-4 text-primary mx-auto mb-1" />
                          <div className="text-xs text-muted-foreground">{course.students} students</div>
                        </div>
                        <div className="text-center">
                          <TrendingUp className="w-4 h-4 text-primary mx-auto mb-1" />
                          <div className="text-xs text-muted-foreground">{course.placement} placed</div>
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-primary">{course.price}</span>
                          <span className="text-sm text-muted-foreground block">One-time payment</span>
                        </div>
                        <Button 
                          variant="hero" 
                          size="sm"
                          className="group-hover:scale-105 transition-transform"
                        >
                          Enroll Now
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search terms or filters
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedLevel('All');
                    setSelectedCategory('All');
                  }}
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/30">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <Award className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Not Sure Which Course to Choose?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Book a free consultation with our career experts. We'll help you choose 
                the perfect course based on your goals and background.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  Download Course Brochure
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Courses;