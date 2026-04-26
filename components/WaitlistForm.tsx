"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { waitlistSchema, type WaitlistFormData } from "@/lib/schema";
import { CheckCircle2, ChevronRight, Loader2, ArrowLeft } from "lucide-react";
import { submitToWaitlist } from "@/lib/actions";

const STEPS = [
  { id: "identity", title: "Identity" },
  { id: "context", title: "Project Context" },
  { id: "pain", title: "Pain & Readiness" },
];

export default function WaitlistForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    mode: "onTouched",
  });

  const handleNext = async () => {
    let fieldsToValidate: any[] = [];
    
    if (currentStep === 0) {
      fieldsToValidate = ["fullName", "email", "phone", "location"];
    } else if (currentStep === 1) {
      fieldsToValidate = ["projectStatus", "projectLocation", "projectType", "budget", "currentManagement"];
    }
    
    const isValid = await trigger(fieldsToValidate as any);
    if (isValid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    try {
      await submitToWaitlist(data);
      setIsSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 md:p-12 rounded-2xl border border-border shadow-precision text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-graphite-black mb-4">
          You&apos;re on the list.
        </h3>
        <p className="text-text/80 mb-8">
          We&apos;ll be in touch soon with your early access invite. Time to stop gambling and start controlling your construction projects.
        </p>
      </div>
    );
  }

  return (
    <div id="waitlist" className="bg-white p-6 md:p-10 rounded-2xl border border-border shadow-card max-w-2xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          {STEPS.map((step, index) => (
            <div 
              key={step.id} 
              className={`flex flex-col items-center flex-1 ${index !== STEPS.length - 1 ? "relative" : ""}`}
            >
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium z-10 
                ${currentStep > index ? "bg-primary text-white" : 
                  currentStep === index ? "bg-primary text-white ring-4 ring-primary/20" : 
                  "bg-background text-text/40 border border-border"}`}
              >
                {currentStep > index ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
              </div>
              <span className={`text-xs mt-2 font-medium hidden sm:block
                ${currentStep >= index ? "text-graphite-black" : "text-text/40"}`}
              >
                {step.title}
              </span>
              
              {/* Line connector */}
              {index !== STEPS.length - 1 && (
                <div className={`absolute top-4 left-1/2 w-full h-[2px] -z-0
                  ${currentStep > index ? "bg-primary" : "bg-border"}`} 
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* STEP 1: IDENTITY */}
        {currentStep === 0 && (
          <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <label className="block text-sm font-medium text-graphite-black mb-1.5">Full Name</label>
              <input 
                {...register("fullName")} 
                className="w-full h-11 px-4 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="John Doe"
              />
              {errors.fullName && <p className="text-danger text-sm mt-1">{errors.fullName.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-graphite-black mb-1.5">Email Address</label>
              <input 
                type="email"
                {...register("email")} 
                className="w-full h-11 px-4 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-danger text-sm mt-1">{errors.email.message}</p>}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-graphite-black mb-1.5">Phone Number</label>
                <input 
                  {...register("phone")} 
                  className="w-full h-11 px-4 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="+1 (555) 000-0000"
                />
                {errors.phone && <p className="text-danger text-sm mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-graphite-black mb-1.5">Current Location</label>
                <input 
                  {...register("location")} 
                  className="w-full h-11 px-4 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="e.g. London, UK"
                />
                {errors.location && <p className="text-danger text-sm mt-1">{errors.location.message}</p>}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: PROJECT CONTEXT */}
        {currentStep === 1 && (
          <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <label className="block text-sm font-medium text-graphite-black mb-1.5">Project Status</label>
              <select 
                {...register("projectStatus")} 
                className="w-full h-11 px-4 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white"
                defaultValue=""
              >
                <option value="" disabled>Select status...</option>
                <option value="current">Currently building</option>
                <option value="soon">Starting soon (1-6 months)</option>
                <option value="exploring">Just exploring</option>
              </select>
              {errors.projectStatus && <p className="text-danger text-sm mt-1">{errors.projectStatus.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-graphite-black mb-1.5">Project Location</label>
                <input 
                  {...register("projectLocation")} 
                  className="w-full h-11 px-4 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="e.g. Lekki, Lagos"
                />
                {errors.projectLocation && <p className="text-danger text-sm mt-1">{errors.projectLocation.message}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-graphite-black mb-1.5">Project Type</label>
                <select 
                  {...register("projectType")} 
                  className="w-full h-11 px-4 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>Select type...</option>
                  <option value="personal">Personal Home</option>
                  <option value="rental">Rental / Investment</option>
                  <option value="commercial">Commercial</option>
                </select>
                {errors.projectType && <p className="text-danger text-sm mt-1">{errors.projectType.message}</p>}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-graphite-black mb-1.5">Estimated Budget (Millions NGN)</label>
              <select 
                {...register("budget")} 
                className="w-full h-11 px-4 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white"
                defaultValue=""
              >
                <option value="" disabled>Select budget...</option>
                <option value="5-20">₦5M - ₦20M</option>
                <option value="20-50">₦20M - ₦50M</option>
                <option value="50-100">₦50M - ₦100M</option>
                <option value="100+">₦100M+</option>
              </select>
              {errors.budget && <p className="text-danger text-sm mt-1">{errors.budget.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-graphite-black mb-1.5">Current Management Structure</label>
              <select 
                {...register("currentManagement")} 
                className="w-full h-11 px-4 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white"
                defaultValue=""
              >
                <option value="" disabled>How is it managed?</option>
                <option value="contractor">Direct Contractor</option>
                <option value="contractor_relative">Relative managing Contractor</option>
                <option value="supervisor">Independent Site Supervisor</option>
                <option value="none">No management yet</option>
              </select>
              {errors.currentManagement && <p className="text-danger text-sm mt-1">{errors.currentManagement.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-graphite-black mb-1.5">How do you verify work today? <span className="text-text/50 font-normal">(Optional)</span></label>
              <input 
                {...register("verificationMethod")} 
                className="w-full h-11 px-4 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="e.g. WhatsApp photos, calls"
              />
            </div>
          </div>
        )}

        {/* STEP 3: PAIN & READINESS */}
        {currentStep === 2 && (
          <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <label className="block text-sm font-medium text-graphite-black mb-1.5">Have you lost money due to fraud, poor quality, or delays?</label>
              <select 
                {...register("lossExperience")} 
                className="w-full h-11 px-4 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white"
                defaultValue=""
              >
                <option value="" disabled>Select...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="unsure">Unsure</option>
              </select>
              {errors.lossExperience && <p className="text-danger text-sm mt-1">{errors.lossExperience.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-graphite-black mb-1.5">What is your biggest control gap?</label>
              <select 
                {...register("controlGap")} 
                className="w-full h-11 px-4 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white"
                defaultValue=""
              >
                <option value="" disabled>Select biggest gap...</option>
                <option value="payments">Knowing when to release payments</option>
                <option value="materials">Tracking materials vs usage</option>
                <option value="progress">Verifying actual site progress</option>
                <option value="communication">Unreliable communication</option>
              </select>
              {errors.controlGap && <p className="text-danger text-sm mt-1">{errors.controlGap.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-graphite-black mb-1.5">Estimated money lost (if applicable) <span className="text-text/50 font-normal">(Optional)</span></label>
              <input 
                {...register("monthlyLoss")} 
                className="w-full h-11 px-4 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="e.g. ₦2M"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-graphite-black mb-1.5">Timeline Urgency</label>
                <select 
                  {...register("urgency")} 
                  className="w-full h-11 px-4 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>Select timeline...</option>
                  <option value="immediate">Immediate</option>
                  <option value="1-3months">1-3 Months</option>
                  <option value="later">Later</option>
                </select>
                {errors.urgency && <p className="text-danger text-sm mt-1">{errors.urgency.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-graphite-black mb-1.5">Willing to use milestone escrow?</label>
                <select 
                  {...register("escrowWillingness")} 
                  className="w-full h-11 px-4 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>Select...</option>
                  <option value="yes">Yes, definitely</option>
                  <option value="maybe">Need to learn more</option>
                  <option value="no">No</option>
                </select>
                {errors.escrowWillingness && <p className="text-danger text-sm mt-1">{errors.escrowWillingness.message}</p>}
              </div>
            </div>
          </div>
        )}

        {/* NAVIGATION BUTTONS */}
        <div className="flex items-center justify-between pt-6 border-t border-border mt-8">
          {currentStep > 0 ? (
            <button
              type="button"
              onClick={handleBack}
              className="text-text/60 hover:text-graphite-black font-medium flex items-center transition-colors px-4 py-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </button>
          ) : (
            <div></div> // Empty div for flex spacing
          )}

          {currentStep < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg font-medium flex items-center transition-colors ml-auto"
            >
              Next Step <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-white px-8 py-2.5 rounded-lg font-medium flex items-center transition-colors shadow-precision ml-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...
                </>
              ) : (
                "Request Access"
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}