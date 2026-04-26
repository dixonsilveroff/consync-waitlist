"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { waitlistSchema, WaitlistFormValues } from '@/lib/schema';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { submitWaitlistForm } from '@/lib/actions';

const steps = [
  { id: 1, name: 'Identity', fields: ['fullName', 'email', 'phone', 'location'] },
  { id: 2, name: 'Project Context', fields: ['projectStatus', 'projectLocation', 'projectType'] },
  { id: 3, name: 'Pain & Readiness', fields: ['budget', 'currentManagement'] },
];

export default function WaitlistForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{ success: boolean; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistFormValues) => {
    setIsSubmitting(true);
    const result = await submitWaitlistForm(data);
    setSubmissionStatus(result);
    setIsSubmitting(false);
  };

  const handleNext = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as any, { shouldFocus: true });
    if (!output) return;

    if (currentStep < steps.length - 1) {
      setCurrentStep(step => step + 1);
    } else {
      await handleSubmit(onSubmit)();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(step => step - 1);
    }
  };

  return (
    <section id="waitlist" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-graphite-black font-poppins mb-8">Join the Waitlist</h2>
          {submissionStatus ? (
            <div className={`p-4 rounded-md text-center ${submissionStatus.success ? 'bg-growth-green/10 text-growth-green' : 'bg-alert-red/10 text-alert-red'}`}>
              <p>{submissionStatus.message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Step 1: Identity */}
              {currentStep === 0 && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-steel-grey">Full Name</label>
                    <input id="fullName" {...register('fullName')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blueprint-blue focus:border-blueprint-blue" />
                    {errors.fullName && <p className="text-sm text-alert-red mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-steel-grey">Email</label>
                    <input id="email" type="email" {...register('email')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blueprint-blue focus:border-blueprint-blue" />
                    {errors.email && <p className="text-sm text-alert-red mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-steel-grey">Phone Number</label>
                    <input id="phone" type="tel" {...register('phone')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blueprint-blue focus:border-blueprint-blue" />
                    {errors.phone && <p className="text-sm text-alert-red mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-steel-grey">Current Location (City, Country)</label>
                    <input id="location" {...register('location')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blueprint-blue focus:border-blueprint-blue" />
                    {errors.location && <p className="text-sm text-alert-red mt-1">{errors.location.message}</p>}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Project Context */}
              {currentStep === 1 && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-steel-grey">When are you planning to start your project?</label>
                    <div className="mt-2 space-y-2">
                      {['current', 'soon', 'exploring'].map(value => (
                        <label key={value} className="flex items-center">
                          <input type="radio" {...register('projectStatus')} value={value} className="h-4 w-4 text-blueprint-blue focus:ring-blueprint-blue border-gray-300" />
                          <span className="ml-2 text-sm text-steel-grey">{value.charAt(0).toUpperCase() + value.slice(1)}</span>
                        </label>
                      ))}
                    </div>
                    {errors.projectStatus && <p className="text-sm text-alert-red mt-1">{errors.projectStatus.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="projectLocation" className="block text-sm font-medium text-steel-grey">Project Location (City, Country)</label>
                    <input id="projectLocation" {...register('projectLocation')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blueprint-blue focus:border-blueprint-blue" />
                    {errors.projectLocation && <p className="text-sm text-alert-red mt-1">{errors.projectLocation.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-steel-grey">Project Type</label>
                    <select {...register('projectType')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blueprint-blue focus:border-blueprint-blue">
                      <option value="">Select a type</option>
                      <option value="personal">Personal</option>
                      <option value="rental">Rental</option>
                      <option value="commercial">Commercial</option>
                    </select>
                    {errors.projectType && <p className="text-sm text-alert-red mt-1">{errors.projectType.message}</p>}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Pain & Readiness */}
              {currentStep === 2 && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-steel-grey">What is your estimated budget (in USD)?</label>
                    <select {...register('budget')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blueprint-blue focus:border-blueprint-blue">
                      <option value="">Select a budget</option>
                      <option value="5-20">$5,000 - $20,000</option>
                      <option value="20-50">$20,000 - $50,000</option>
                      <option value="50-100">$50,000 - $100,000</option>
                      <option value="100+">$100,000+</option>
                    </select>
                    {errors.budget && <p className="text-sm text-alert-red mt-1">{errors.budget.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-steel-grey">How are you currently managing or planning to manage your project?</label>
                    <select {...register('currentManagement')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blueprint-blue focus:border-blueprint-blue">
                      <option value="">Select an option</option>
                      <option value="contractor">Hired a contractor</option>
                      <option value="contractor_relative">A relative is the contractor</option>
                      <option value="supervisor">Hired a supervisor/manager</option>
                      <option value="none">I have no one on the ground</option>
                    </select>
                    {errors.currentManagement && <p className="text-sm text-alert-red mt-1">{errors.currentManagement.message}</p>}
                  </div>
                </motion.div>
              )}
              
              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-4">
                <div>
                  <span className="text-sm text-steel-grey">Step {currentStep + 1} of {steps.length}</span>
                </div>
                <div className="flex items-center space-x-4">
                  {currentStep > 0 && (
                    <button type="button" onClick={handlePrev} disabled={isSubmitting} className="px-4 py-2 text-sm font-medium text-steel-grey bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50">
                      Back
                    </button>
                  )}
                  <button type="button" onClick={handleNext} disabled={isSubmitting} className="px-4 py-2 text-sm font-medium text-white bg-blueprint-blue rounded-md hover:bg-highlight-blue disabled:opacity-50">
                    {isSubmitting ? 'Submitting...' : (currentStep === steps.length - 1 ? 'Join Waitlist' : 'Next')}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
