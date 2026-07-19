import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - DS Interactive",
  description: "Privacy policy for DS Interactive mobile applications.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-foreground/60 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="space-y-6">
            <p>
              DS Interactive ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how our mobile applications collect, use, and share information about you when you use our services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <p>
              Depending on the app you use, we may collect different types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Automatically Collected Information:</strong> We may collect certain information automatically when you use our apps, such as device type, operating system version, and usage statistics to improve our app performance.
              </li>
              <li>
                <strong>User-Provided Information:</strong> Any data you input directly into our apps (like PDF documents in DS PDF Pro) is processed locally on your device and is not uploaded to our servers unless explicitly stated for a specific feature.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our applications.</li>
              <li>Analyze app usage and fix bugs or crashes.</li>
              <li>Respond to your comments, questions, and customer service requests.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Third-Party Services</h2>
            <p>
              Our apps may use third-party services (such as Google Analytics or advertising networks) that may collect information used to identify you. These third-party services have their own privacy policies addressing how they use such information.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p>
              We implement reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access. However, no internet or electronic storage system is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Children's Privacy</h2>
            <p>
              Our services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <strong>hello@dsinteractive.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
