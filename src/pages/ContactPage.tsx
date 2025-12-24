import { ContactForm } from "../components/ContactForm";
import { ScrollReveal } from "../components/ScrollReveal";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { SEO } from "../components/SEO";

function ContactDetails() {
    const [email, setEmail] = useState("Loading...");
    const [phone, setPhone] = useState("Loading...");

    useEffect(() => {
        // Basic obfuscation by constructing strings at runtime
        const eUser = "sales";
        const eDomain = "wellpack.com";
        const pCountry = "+91";
        const pNum = "62823 70094";

        setEmail(`${eUser}@${eDomain}`);
        setPhone(`${pCountry} ${pNum}`);
    }, []);

    const items = [
        {
            icon: Phone,
            title: "Call Us",
            content: phone,
            href: phone !== "Loading..." ? `tel:${phone.replace(/\s/g, '')}` : "#"
        },
        {
            icon: Mail,
            title: "Email Us",
            content: email,
            href: email !== "Loading..." ? `mailto:${email}` : "#"
        },
        {
            icon: MapPin,
            title: "Visit Us",
            content: "Kerala, India",
            href: "#"
        }
    ];

    return (
        <>
            {items.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="bg-white p-8 border-l-2 border-[#A56F3D] hover:shadow-lg transition-shadow duration-300">
                        <item.icon className="w-8 h-8 text-[#A56F3D] mb-4" />
                        <h3 className="text-xl text-[#101010] mb-2 font-light">{item.title}</h3>
                        {item.href === "#" ? (
                            <p className="text-[#5A5A5A]">{item.content}</p>
                        ) : (
                            <a href={item.href} className="text-[#5A5A5A] hover:text-[#A56F3D] transition-colors">{item.content}</a>
                        )}
                    </div>
                </ScrollReveal>
            ))}
        </>
    );
}

export function ContactPage() {
    return (
        <div className="pt-24 min-h-screen bg-[#F8F9FA]">
            <SEO
                title="Contact WellPack | Request a Packaging Quote"
                description="Get in touch with WellPack for custom corrugated box manufacturing, factory visits, or project inquiries in Kerala, India."
            />
            <div className="max-w-[1600px] mx-auto px-8 lg:px-16 py-16">
                <ScrollReveal>
                    <h1 className="text-[#101010] text-5xl lg:text-6xl font-light mb-6">
                        Get in <span className="text-[#A56F3D]">Touch</span>
                    </h1>
                    <p className="text-[#5A5A5A] text-xl leading-relaxed max-w-2xl font-light mb-16">
                        Ready to start your project? Contact our team for quotes, inquiries, or factory visits.
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <ContactDetails />
                </div>
            </div>

            <ContactForm />
        </div>
    );
}
