"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { waitlistSchema, WaitlistFormValues } from '@/lib/schema';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitWaitlistForm } from '@/lib/actions';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

const steps = [
  { id: 1, name: 'Identity', fields: ['fullName', 'email', 'phone', 'location'] },
  { id: 2, name: 'Context', fields: ['projectStatus', 'projectLocation', 'projectType', 'budget', 'currentManagement'] },
  { id: 3, name: 'Readiness', fields: ['verificationMethod', 'lossExperience', 'controlGap', 'monthlyLoss', 'urgency', 'escrowWillingness'] },
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

  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <section id="waitlist" className="py-32 bg-concrete-white relative overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-highlight-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-graphite-black font-poppins tracking-tight mb-4">Request Access</h2>
            <p className="text-steel-grey text-lg font-light">Get early access to control your project payments.</p>
          </div>

          <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-12">
            {submissionStatus ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6 ${submissionStatus.success ? 'bg-growth-green/10 text-growth-green' : 'bg-alert-red/10 text-alert-red'}`}>
                  {submissionStatus.success ? <CheckCircle2 className="w-8 h-8" /> : <span className="text-2xl font-bold">!</span>}
                </div>
                <h3 className="text-2xl font-bold text-graphite-black font-poppins mb-2">
                  {submissionStatus.success ? "You're on the list" : "Something went wrong"}
                </h3>
                <p className="text-steel-grey">{submissionStatus.message}</p>
              </motion.div>
            ) : (
              <>
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-xs font-semibold text-steel-grey uppercase tracking-wider mb-3">
                    <span>{steps[currentStep].name}</span>
                    <span>Step {currentStep + 1} of {steps.length}</span>
                  </div>
                  <div className="w-full bg-concrete-white h-2 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-blueprint-blue rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <AnimatePresence mode="wait">
                    {/* Step 1: Identity */}
                    {currentStep === 0 && (
                      <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="space-y-5">
                        <div>
                          <label className="block text-sm font-medium text-graphite-black mb-1.5">Full Name</label>
                          <input type="text" {...register('fullName')} placeholder="John Doe" className="block w-full px-4 py-3 bg-concrete-white border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-blueprint-blue focus:border-transparent transition-all" />
                          {errors.fullName && <p className="text-sm text-alert-red mt-1.5">{errors.fullName.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-graphite-black mb-1.5">Email Address</label>
                          <input type="email" {...register('email')} placeholder="john@example.com" className="block w-full px-4 py-3 bg-concrete-white border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-blueprint-blue focus:border-transparent transition-all" />
                          {errors.email && <p className="text-sm text-alert-red mt-1.5">{errors.email.message}</p>}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-graphite-black mb-1.5">Phone Number</label>
                            <input type="tel" {...register('phone')} placeholder="+1 (555) 000-0000" className="block w-full px-4 py-3 bg-concrete-white border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-blueprint-blue focus:border-transparent transition-all" />
                            {errors.phone && <p className="text-sm text-alert-red mt-1.5">{errors.phone.message}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-graphite-black mb-1.5">Current Location</label>
                            <input type="text" {...register('location')} placeholder="City, Country" className="block w-full px-4 py-3 bg-concrete-white border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-blueprint-blue focus:border-transparent transition-all" />
                            {errors.location && <p className="text-sm text-alert-red mt-1.5">{errors.location.message}</p>}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Context */}
                    {currentStep === 1 && (
                      <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-graphite-black mb-3">When are you planning to start your project?</label>
                          <div className="grid grid-cols-3 gap-3">
                            {['current', 'soon', 'exploring'].map(value => (
                              <label key={value} className="cursor-pointer">
                                <input type="radio" {...register('projectStatus')} value={value} className="peer sr-only" />
                                <div className="text-center px-4 py-3 text-sm font-medium rounded-xl border border-gray-200 bg-white text-steel-grey hover:bg-concrete-white peer-checked:border-blueprint-blue peer-checked:bg-blueprint-blue/5 peer-checked:text-blueprint-blue transition-all">
                                  {value.charAt(0).toUpperCase() + value.slice(1)}
                                </div>
                              </label>
                            ))}
                          </div>
                          {errors.projectStatus && <p className="text-sm text-alert-red mt-1.5">{errors.projectStatus.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-graphite-black mb-1.5">Project Location</label>
                          <input type="text" {...register('projectLocation')} placeholder="City, Country" className="block w-full px-4 py-3 bg-concrete-white border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-blueprint-blue focus:border-transparent transition-all" />
                          {errors.projectLocation && <p className="text-sm text-alert-red mt-1.5">{errors.projectLocation.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-graphite-black mb-1.5">Project Type</label>
                          <select {...register('projectType')} className="block w-full px-4 py-3 bg-concrete-white border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-blueprint-blue focus:border-transparent transition-all appearance-none cursor-pointer">
                            <option value="">Select a type</option>
                            <option value="personal">Personal</option>
                            <option value="rental">Rental</option>
                            <option value="commercial">Commercial</option>
                          </select>
                          {errors.projectType && <p className="text-sm text-alert-red mt-1.5">{errors.projectType.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-graphite-black mb-1.5">Estimated Budget (Naira)</label>
                          <select {...register('budget')} className="block w-full px-4 py-3 bg-concrete-white border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-blueprint-blue focus:border-transparent transition-all appearance-none cursor-pointer">
                            <option value="">Select a budget range</option>
                            <option value="5m-20m">₦5 Million - ₦20 Million</option>
                            <option value="20m-50m">₦20 Million - ₦50 Million</option>
                            <option value="50m-100m">₦50 Million - ₦100 Million</option>
                            <option value="100m+">₦100 Million+</option>
                          </select>
                          {errors.budget && <p className="text-sm text-alert-red mt-1.5">{errors.budget.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-graphite-black mb-1.5">Current Management Plan</label>
                          <select {...register('currentManagement')} className="block w-full px-4 py-3 bg-concrete-white border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-blueprint-blue focus:border-transparent transition-all appearance-none cursor-pointer">
                            <option value="">Select an option</option>
                            <option value="contractor">Hired a contractor</option>
                            <option value="contractor_relative">A relative is the contractor</option>
                            <option value="supervisor">Hired a supervisor/manager</option>
                            <option value="none">No one on the ground yet</option>
                          </select>
                          {errors.currentManagement && <p className="text-sm text-alert-red mt-1.5">{errors.currentManagement.message}</p>}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Readiness */}
                    {currentStep === 2 && (
                      <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-graphite-black mb-1.5">How do you currently verify work is done before paying? (Optional)</label>
                          <input type="text" {...register('verificationMethod')} placeholder="e.g. WhatsApp photos, relative visits" className="block w-full px-4 py-3 bg-concrete-white border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-blueprint-blue focus:border-transparent transition-all" />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-graphite-black mb-3">Have you ever lost money on a project back home due to mismanagement or fraud?</label>
                          <div className="grid grid-cols-3 gap-3">
                            {['yes', 'no', 'unsure'].map(value => (
                              <label key={value} className="cursor-pointer">
                                <input type="radio" {...register('lossExperience')} value={value} className="peer sr-only" />
                                <div className="text-center px-4 py-3 text-sm font-medium rounded-xl border border-gray-200 bg-white text-steel-grey hover:bg-concrete-white peer-checked:border-blueprint-blue peer-checked:bg-blueprint-blue/5 peer-checked:text-blueprint-blue transition-all">
                                  {value.charAt(0).toUpperCase() + value.slice(1)}
                                </div>
                              </label>
                            ))}
                          </div>
                          {errors.lossExperience && <p className="text-sm text-alert-red mt-1.5">{errors.lossExperience.message}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-graphite-black mb-1.5">Where do you feel you lack the most control?</label>
                          <select {...register('controlGap')} className="block w-full px-4 py-3 bg-concrete-white border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-blueprint-blue focus:border-transparent transition-all appearance-none cursor-pointer">
                            <option value="">Select an option</option>
                            <option value="payments">Payments & Funds</option>
                            <option value="materials">Material Quality/Quantity</option>
                            <option value="progress">Progress Tracking</option>
                            <option value="communication">Communication</option>
                          </select>
                          {errors.controlGap && <p className="text-sm text-alert-red mt-1.5">{errors.controlGap.message}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-graphite-black mb-1.5">Roughly how much money do you estimate is lost or mismanaged monthly? (Optional)</label>
                          <input type="text" {...register('monthlyLoss')} placeholder="e.g. $500" className="block w-full px-4 py-3 bg-concrete-white border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-blueprint-blue focus:border-transparent transition-all" />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-graphite-black mb-1.5">How urgently do you need a solution like ConSync?</label>
                          <select {...register('urgency')} className="block w-full px-4 py-3 bg-concrete-white border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-blueprint-blue focus:border-transparent transition-all appearance-none cursor-pointer">
                            <option value="">Select urgency</option>
                            <option value="immediate">Immediately</option>
                            <option value="1-3months">1-3 Months</option>
                            <option value="later">Sometime later</option>
                          </select>
                          {errors.urgency && <p className="text-sm text-alert-red mt-1.5">{errors.urgency.message}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-graphite-black mb-3">Are you willing to use an escrow system to secure your project funds?</label>
                          <div className="grid grid-cols-3 gap-3">
                            {['yes', 'maybe', 'no'].map(value => (
                              <label key={value} className="cursor-pointer">
                                <input type="radio" {...register('escrowWillingness')} value={value} className="peer sr-only" />
                                <div className="text-center px-4 py-3 text-sm font-medium rounded-xl border border-gray-200 bg-white text-steel-grey hover:bg-concrete-white peer-checked:border-blueprint-blue peer-checked:bg-blueprint-blue/5 peer-checked:text-blueprint-blue transition-all">
                                  {value.charAt(0).toUpperCase() + value.slice(1)}
                                </div>
                              </label>
                            ))}
                          </div>
                          {errors.escrowWillingness && <p className="text-sm text-alert-red mt-1.5">{errors.escrowWillingness.message}</p>}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
                    <button 
                      type="button" 
                      onClick={handlePrev} 
                      disabled={isSubmitting || currentStep === 0} 
                      className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full transition-all ${currentStep === 0 ? 'opacity-0 pointer-events-none' : 'text-steel-grey hover:bg-concrete-white'}`}
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                    
                    <button 
                      type="button" 
                      onClick={handleNext} 
                      disabled={isSubmitting} 
                      className="flex items-center gap-2 px-8 py-3 text-sm font-semibold text-white bg-blueprint-blue rounded-full hover:bg-highlight-blue shadow-lg shadow-blueprint-blue/20 transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? 'Processing...' : (currentStep === steps.length - 1 ? 'Submit Request' : 'Continue')}
                      {!isSubmitting && currentStep !== steps.length - 1 && <ArrowRight className="w-4 h-4" />}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
