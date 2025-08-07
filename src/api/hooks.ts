import { useState } from 'react';
import api from './config';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  course?: string;
  message: string;
}

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (data: ContactFormData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real implementation, this would be:
      // await api.post('/contact', data);
      
      console.log('Contact form submitted:', data);
      setSuccess(true);
      return { success: true };
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Failed to submit form. Please try again.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setLoading(false);
    setSuccess(false);
    setError(null);
  };

  return {
    submitForm,
    loading,
    success,
    error,
    reset,
  };
};

export const useEnrollment = () => {
  const [loading, setLoading] = useState(false);

  const enrollInCourse = async (courseId: number, userDetails: any) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real implementation:
      // await api.post('/enroll', { courseId, ...userDetails });
      
      console.log('Course enrollment:', { courseId, userDetails });
      return { success: true };
    } catch (err: any) {
      return { 
        success: false, 
        error: err.response?.data?.message || 'Enrollment failed. Please try again.' 
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    enrollInCourse,
    loading,
  };
};