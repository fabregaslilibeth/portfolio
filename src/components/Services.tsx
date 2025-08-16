'use client';
import { motion } from 'framer-motion';

const services = [
  {
    number: "01",
    title: "Strategy",
    description: "Behind every surprising campaign, compelling site launch, or must-watch piece of content, there's a well-considered strategy that engineered the outcome. During this crucial phase, we address the foundational and psychological factors that drive the desired interaction between brand and customer. We match logic-based journeys with pinpoint executions that create memorable and lasting engagements.",
    features: [
      "Brand Architecture & Roadmaps",
      "Brand Strategy",
      "Digital Strategy",
      "Product Launch Strategy",
      "SEO & Content Strategy",
      "Information Architecture (IA)",
      "Design Systems",
      "Brand Messaging",
      "User Research & Testing",
      "New Revenue Streams"
    ]
  },
  {
    number: "02",
    title: "Design",
    description: "Our design services focus on pitch-perfect brand identities, flawless UX and UI design, and unforgettable product builds that ensure your vision is brought to life with intention and precision. Our rapid prototyping and ironclad design systems streamline the development process, while our expertise in information architecture and motion design enhances usability and engagement.",
    features: [
      "Brand Identity",
      "Brand Guidelines",
      "UX and UI Design",
      "Website & App Design",
      "Art Direction",
      "Product Concepting",
      "Rapid Prototyping",
      "Motion Design",
      "Product Interfaces"
    ]
  },
  {
    number: "03",
    title: "Technology",
    description: "We build full-stack digital brand extensions that serve as the online anchors of our clients' multichannel narratives. Our no-code Framer and Webflow solutions enable rapid and efficient development timelines for both sites and products. As Shopify Plus e-commerce partners and WordPress master developers, we offer the most advanced functionality options paired with the simplest and most robust content management systems.",
    features: [
      "No-code Framer Solutions",
      "Webflow Solutions",
      "Shopify Plus (Partners)",
      "Advanced E-commerce",
      "WordPress Specialists",
      "Full Stack Development",
      "Journey Mapping & Testing",
      "Accessibility (WCAG) 2.1"
    ]
  }
];

export default function Services() {
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
            Services
          </h2>
          <p className="text-2xl md:text-3xl font-medium text-gray-700 leading-relaxed max-w-4xl">
            Superior brands require sophisticated capabilities that many businesses couldn't access until now.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
            >
              {/* Left side - Content */}
              <div className="order-2 lg:order-1">
                <div className="flex items-start mb-8">
                  <span className="text-8xl md:text-9xl font-black text-gray-200 leading-none mr-8">
                    {service.number}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold text-black leading-tight pt-4">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
                  {service.description}
                </p>
                
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-lg md:text-xl text-gray-700">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Right side - Visual placeholder */}
              <div className="order-1 lg:order-2">
                <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-9xl md:text-[12rem] font-black text-gray-300 leading-none mb-4">
                      {service.number}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-400">
                      {service.title}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
