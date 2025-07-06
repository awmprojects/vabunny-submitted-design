
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PrivacyPolicyProps {
  children: React.ReactNode;
}

const PrivacyPolicy = ({ children }: PrivacyPolicyProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-purple-600">
            Privacy Policy - VaBunny.com
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">1. Information We Collect</h3>
            <p className="mb-2">We collect information you provide directly to us, such as:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Personal information (name, email address, phone number)</li>
              <li>Account credentials and preferences</li>
              <li>Profile information and work history</li>
              <li>Communication data between users</li>
              <li>Payment and billing information</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">2. How We Use Your Information</h3>
            <p className="mb-2">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Communicate about products, services, and events</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Detect and prevent fraudulent transactions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">3. Information Sharing</h3>
            <p className="mb-2">We may share your information in the following situations:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>With other users as necessary to facilitate services</li>
              <li>With service providers who assist in our operations</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>With your consent or at your direction</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">4. Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">5. Data Retention</h3>
            <p>
              We retain your information for as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">6. Your Rights</h3>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your information</li>
              <li>Request data portability</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">7. Cookies and Tracking</h3>
            <p>
              We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie preferences through your browser settings.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">8. Third-Party Services</h3>
            <p>
              Our service may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">9. International Data Transfers</h3>
            <p>
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">10. Changes to Privacy Policy</h3>
            <p>
              We may update this privacy policy from time to time. We will notify you of significant changes by posting the new policy on our website.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">11. Contact Us</h3>
            <p>
              If you have questions about this privacy policy, please contact us at privacy@vabunny.com
            </p>
          </div>

          <div className="pt-4 border-t">
            <p className="text-xs text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicy;
