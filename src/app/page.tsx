"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Sparkles, Zap, Award, Star, Check, HelpCircle, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="mediumSizeExtraLargeTitles"
      background="fluid"
      cardStyle="glass-flat"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="VITALIZE"
          button={{
            text: "Shop Now",
            href: "#products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Premium Supplements for Peak Performance"
          description="Scientifically formulated supplements to support your health, energy, and wellness goals. Experience the difference with VITALIZE."
          tag="Premium Wellness"
          tagIcon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764879856584-kydm83cr.jpg"
          imageAlt="Premium supplement bottles"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={false}
          buttons={[
            {
              text: "Explore Products",
              href: "#products"
            },
            {
              text: "Learn More",
              href: "#benefits"
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Products"
          description="Discover our bestselling supplement formulations designed for optimal results"
          tag="Our Collection"
          tagIcon={Zap}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          gridVariant="three-columns-all-equal-width"
          containerStyle="default"
          carouselMode="buttons"
          products={[
            {
              id: "1",
              name: "Premium Multivitamin",
              price: "$45.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764879857102-gyb6w6jk.jpg",
              imageAlt: "Premium multivitamin supplement"
            },
            {
              id: "2",
              name: "Performance Protein",
              price: "$54.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764879857674-hoypo8mf.jpg",
              imageAlt: "Performance protein powder"
            },
            {
              id: "3",
              name: "Omega-3 Complex",
              price: "$38.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764879858341-xc2gk772.jpg",
              imageAlt: "Omega-3 fish oil supplement"
            }
          ]}
        />
      </div>

      <div id="benefits" data-section="benefits">
        <FeatureCardSeven
          title="Why Choose VITALIZE"
          description="Our supplements are backed by science and trusted by health professionals worldwide"
          tag="Quality Assurance"
          tagIcon={Award}
          textboxLayout="default"
          animationType="blur-reveal"
          useInvertedBackground="noInvert"
          features={[
            {
              id: 1,
              title: "Scientifically Formulated",
              description: "Each formula is developed with cutting-edge research and clinical studies. We use only the highest quality ingredients tested for purity and potency.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764879859149-br3yg716.jpg"
            },
            {
              id: 2,
              title: "Premium Natural Ingredients",
              description: "Sourced from trusted suppliers worldwide. Every ingredient is selected for its bioavailability and health benefits. No artificial additives or fillers.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764879860278-2wf7l61b.jpg"
            },
            {
              id: 3,
              title: "Proven Results",
              description: "Trusted by athletes, health professionals, and wellness enthusiasts. Our customers report noticeable improvements in energy, health, and performance within weeks.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764879861086-1ni39q75.jpg"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="Trusted by Experts"
          description="Hear what health professionals and satisfied customers say about VITALIZE supplements"
          tag="Customer Reviews"
          tagIcon={Star}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          variant="card"
          testimonials={[
            {
              id: "1",
              title: "Transformed My Energy Levels",
              quote: "After just two weeks of using VITALIZE multivitamin, I noticed a significant boost in my energy and mental clarity. The quality is exceptional.",
              name: "Sarah Mitchell",
              role: "Fitness Coach",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764879861823-3i1sgy6v.jpg"
            },
            {
              id: "2",
              title: "Professional Grade Quality",
              quote: "As a sports nutritionist, I only recommend supplements I trust. VITALIZE meets all my standards for purity and efficacy.",
              name: "Dr. James Chen",
              role: "Sports Nutritionist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764879862336-omz1nvxy.jpg"
            },
            {
              id: "3",
              title: "Real Results for Athletes",
              quote: "Been using their omega-3 complex for 3 months. My recovery time has improved and I feel stronger. Definitely worth the investment.",
              name: "Emma Rodriguez",
              role: "Professional Athlete",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764879863171-c7ogreyb.jpg"
            },
            {
              id: "4",
              title: "Best Wellness Investment",
              quote: "The protein powder tastes amazing and mixes perfectly. I use it post-workout every day. This is my go-to brand now.",
              name: "Michael Thompson",
              role: "Fitness Enthusiast",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764879863919-xnh25ehb.jpg"
            },
            {
              id: "5",
              title: "Excellent Customer Service",
              quote: "Not only is the product quality outstanding, but their customer support team is responsive and helpful. Highly recommended.",
              name: "Lisa Wong",
              role: "Health Consultant",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764879864478-2ouoxfi2.jpg"
            },
            {
              id: "6",
              title: "Premium Ingredients, Premium Results",
              quote: "I can feel the difference in quality compared to other brands. VITALIZE is worth every penny for serious health enthusiasts.",
              name: "David Foster",
              role: "Wellness Coach",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764879865002-1rxmefk7.jpg"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Organizations"
          description="VITALIZE supplements are recommended by health professionals and partnered with leading wellness institutions"
          tag="Industry Partners"
          tagIcon={Check}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          showCard={true}
          speed={40}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764879865705-kbaib4dh.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764879866466-crvo66ke.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764879866999-2qmxzkmr.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764879867985-lapj9sy2.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764879868738-8ia9w42s.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764879869429-nqhsxo8w.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764879870177-m92tp318.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764879870867-n6bfc97o.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our supplements and their usage"
          tag="Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Are your supplements safe?",
              content: "Yes, all VITALIZE supplements are manufactured in FDA-registered facilities following GMP standards. Each batch is tested for purity and potency. We use only safe, clinically-studied ingredients."
            },
            {
              id: "2",
              title: "How long until I see results?",
              content: "Most customers notice improvements within 2-4 weeks of consistent use. However, some benefits like sustained energy may be felt within days. Results vary based on individual health, diet, and lifestyle."
            },
            {
              id: "3",
              title: "Can I take multiple supplements together?",
              content: "Yes, our products are designed to work well together. However, we recommend consulting with a healthcare provider if you're on medications or have specific health conditions."
            },
            {
              id: "4",
              title: "Are your products natural?",
              content: "We use premium natural ingredients sourced from trusted suppliers. Some formulations include scientifically-proven compounds that enhance bioavailability and effectiveness."
            },
            {
              id: "5",
              title: "What is your return policy?",
              content: "We offer a 60-day money-back guarantee. If you're not satisfied with your purchase for any reason, simply return the product for a full refund."
            },
            {
              id: "6",
              title: "Do you offer international shipping?",
              content: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location. Visit our shipping page for specific details."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Updated with Wellness Tips"
          description="Subscribe to our newsletter for exclusive product launches, wellness advice from experts, and special discounts for subscribers."
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764879871745-ry1kwsxz.jpg"
          imageAlt="Wellness lifestyle"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="VITALIZE"
          copyrightText="© 2025 VITALIZE Premium Supplements. All rights reserved."
          columns={[
            {
              title: "Products",
              items: [
                { label: "Multivitamins", href: "#products" },
                { label: "Proteins", href: "#products" },
                { label: "Omega-3", href: "#products" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Blog", href: "#blog" },
                { label: "Careers", href: "#careers" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
                { label: "Shipping Info", href: "#shipping" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms of Service", href: "#terms" },
                { label: "Privacy Policy", href: "#privacy" },
                { label: "Return Policy", href: "#returns" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}