'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: "What distinguishes us from other agencies?",
    answer: "We have worked at the largest agencies in the world and we've owned our own digital development studios. From those experiences, we identified all the wasteful processes that inflate fees, over-complicate communications, and delay turnaround times. In creating our subscriptions and ready-made projects, we have streamlined creative services to include only what's absolutely essential for achieving the best client outcomes. By eliminating the bloat, it allowed us to offer growing businesses access to high-end creative that they wouldn't have otherwise been able to afford. We're innovative. We're doing it to serve you. And we're exceptional at what we do. That's what distinguishes us."
  },
  {
    question: "Why not hire an in-house designer or freelancer?",
    answer: "In today's job market, a senior creative will cost you six figures. It'll take at least a couple months to recruit and onboard them. Then you'll have to manage them, their personality, and their narrow area of expertise. With a subscription or ready-made project, you have access to multi-disciplined talent, all senior level, and we do the managing. As far as freelancers, the A-listers are usually booked, and those that are available are juggling a roster of other clients. They're often undependable, and having to jump from one to another causes brand inconsistency."
  },
  {
    question: "Are creative requests truly unlimited?",
    answer: "Once you're a client, you're free to submit as many requests as you'd like within your Project Workflow, and we'll deliver them one-after-another, in order of priority, as defined by you. A Project Workflow is a queue of active requests serviced by your dedicated creative. Each request that comes is worked on one at a time. If you want two project requests serviced simultaneously, you would simply subscribe to our more robust plan with double the workflows and dedicated creatives."
  },
  {
    question: "How fast will I receive my work?",
    answer: "Depends on the project requested. But, on average, we complete most design requests within 2-3 days. More complex requests require lengthier timelines. But we're always upfront and reasonable about our estimated delivery dates, as well as any phases that require milestones to reach them."
  },
  {
    question: "What's your refund policy?",
    answer: "We work tirelessly to revise and tweak and refine until you love our work. Considering the amount of effort, attention, and quality that we pour into our work, we cannot issue refunds."
  },
  {
    question: "What if I have a single project?",
    answer: "Our subscriptions work best for companies that have ongoing branding needs. If you've got a single project, we offer a full-service menu of prepackaged projects to suit most creative needs. If you don't find the project you're looking for, please book a chat and we'll tailor a service to meet your exact needs."
  },
  {
    question: "What don't we do?",
    answer: "Our array of services are comprehensive. But there are a few areas that don't fall within our expertise: Media buying, technical copywriting, and 3D modeling are a few. If you have something specific in mind, reach out and let's discuss the specs."
  },
  {
    question: "How do I submit a creative request?",
    answer: "Once you've signed up, you will receive an email that grants access to your client dashboard with a project request form that will walk you through the steps to initiate your job. Once submitted, your dedicated Project Manager will contact you within 24 hours and immediately assign an appropriate creative. You will begin receiving daily project updates that will continue until final delivery. Simple, easy, and thorough."
  },
  {
    question: "Do I own my work?",
    answer: "Every piece of creative we develop is tailored specifically for your brand and 100% owned by you. We share access to all your native source files."
  },
  {
    question: "How is my team assembled?",
    answer: "Your dedicated Project Manager will review your projected workflow before assigning the appropriate creative based on the personality of the brand and the nature and scope of the work. For more complex projects, your dedicated creative will change, depending on the phase of the project. For example, on a website development assignment, your dedicated creative would shift according to the stage of work: strategist, copywriter, art director, designer, developer."
  },
  {
    question: "How soon can I submit a project request?",
    answer: "Immediately upon sign up, you will receive an email that grants access to your client dashboard with a project request form that will notify your dedicated Project Manager to assign your creative. From sign-up to the start of work happens within 24 hours."
  },
  {
    question: "How do I upgrade, downgrade, or cancel?",
    answer: "Scaling is painless. For any changes to your plan, simply email your desired status update to subscribe@betteroff.studio. Upgrade costs are prorated during your current billing cycle. For downgrades, your plan will renew at the lower level on your next billing date. To cancel, all you have to do is email subscribe@betteroff.studio and we'll take care of you!"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-black leading-[0.85] tracking-tight mb-12">
            FAQ
          </h2>
          <p className="text-2xl md:text-3xl font-medium text-gray-700 leading-relaxed">
            We love talking shop and answering questions. See the most common inquiries below or book a chat.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-8 text-left flex justify-between items-start hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-xl md:text-2xl font-bold text-black pr-8 leading-relaxed">
                  {faq.question}
                </h3>
                <span className="text-gray-400 text-3xl font-light flex-shrink-0 mt-1">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="px-8 pb-8"
                >
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Still unsure whether our plans are right for you?
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center text-xl md:text-2xl font-medium text-black border-b-2 border-black pb-2 hover:pb-4 transition-all duration-300"
          >
            Let&apos;s chat
            <svg className="ml-4 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
