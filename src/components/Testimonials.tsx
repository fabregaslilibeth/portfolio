'use client';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Referred by a friend, we appreciated this team's clear pricing and flexible staffing for our major site launches, including Shopify development. They're now our go-to team in a pinch.",
    author: "Oleksandra Zubrytska",
    position: "Technical Project Manager",
    company: "The Hollis Co."
  },
  {
    quote: "This team excelled under pressure, delivering a standout UX/UI update to our booking section that redefined our collaboration and became a highlight for Royal Caribbean.",
    author: "Tina Rossell",
    position: "Commodity & Marketing Manager",
    company: "Royal Caribbean"
  },
  {
    quote: "We've partnered with Beth for years, and are always impressed by their innovative brand development and precise execution. Their work during our recent rebrand matched our vision perfectly.",
    author: "Andrew Watson",
    position: "Owner",
    company: "Built Things"
  },
  {
    quote: "We have a long history with this company and several major projects together. Their expertise consistently makes us look good.",
    author: "Fran Mayo",
    position: "Marketing Manager",
    company: "Space Craft"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-black leading-[0.85] tracking-tight mb-12">
            Client Approval
          </h2>
          <p className="text-2xl md:text-3xl font-medium text-gray-700 leading-relaxed">
            Creative as bundled projects
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-12"
            >
              <div className="flex items-start mb-8">
                <span className="text-6xl md:text-7xl font-black text-gray-300 leading-none mr-8">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-8">
                <div className="text-xl font-bold text-black mb-2">
                  {testimonial.author}
                </div>
                <div className="text-lg text-gray-600">
                  {testimonial.position} / {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
