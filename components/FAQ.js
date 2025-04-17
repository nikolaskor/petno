"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "How does the pet adoption process work?",
    answer:
      "Our platform connects you directly with verified breeders and shelters. You can browse available pets, view their profiles, and contact the breeder/shelter through our secure messaging system. Once you've found your perfect match, you can arrange a meetup and complete the adoption process.",
  },
  {
    question: "How do you verify breeders and shelters?",
    answer:
      "We have a rigorous verification process that includes checking licenses, conducting background checks, reviewing customer feedback, and verifying documentation. We also regularly monitor and update our verification system to ensure the highest standards of animal welfare.",
  },
  {
    question: "What information is included in pet profiles?",
    answer:
      "Pet profiles include detailed information such as breed, age, gender, health records, vaccination history, temperament, and photos. Breeders and shelters can also add additional information about the pet's personality, training, and special needs.",
  },
  {
    question: "Can I meet the pet before adopting?",
    answer:
      "Yes, absolutely! We encourage meetups before adoption. You can arrange to meet the pet at the breeder's/shelter's location or at a neutral location. This helps ensure that both you and the pet are a good match for each other.",
  },
  {
    question: "What happens if there are health issues after adoption?",
    answer:
      "We work with breeders and shelters who provide health guarantees and proper documentation. If health issues arise, our platform facilitates communication between you and the breeder/shelter to resolve any concerns. We also provide resources and support throughout the process.",
  },
  {
    question: "Is there a fee to use the platform?",
    answer:
      "We offer a free basic plan that allows you to browse and contact breeders/shelters. Our premium plans offer additional features like advanced search filters, priority messaging, and access to health records. Breeders and shelters have their own subscription plans for listing pets.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b">
      <button
        className="flex w-full items-center justify-between py-4 text-left"
        onClick={onClick}
      >
        <span className="text-base font-semibold">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200",
          isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-muted-foreground">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about our pet adoption platform.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl">
          {faqList.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
