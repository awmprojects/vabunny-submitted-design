
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface TermsOfServiceProps {
  children: React.ReactNode;
}

const TermsOfService = ({ children }: TermsOfServiceProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-purple-600">
            Terms of Service - VaBunny.com
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">1. Acceptance of Terms</h3>
            <p>
              By accessing and using VaBunny.com, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">2. Description of Service</h3>
            <p>
              VaBunny.com is a platform that connects employers with virtual assistants from the Philippines. We provide a marketplace for businesses to find skilled remote workers and for workers to find employment opportunities.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">3. User Accounts</h3>
            <p>
              Users may create accounts as either Employers or Workers. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">4. Employer Responsibilities</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Provide accurate job descriptions and requirements</li>
              <li>Pay agreed-upon wages in a timely manner</li>
              <li>Treat virtual assistants with respect and professionalism</li>
              <li>Comply with applicable labor laws and regulations</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">5. Worker Responsibilities</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Provide accurate information about skills and experience</li>
              <li>Deliver work as agreed upon with employers</li>
              <li>Maintain professional communication and conduct</li>
              <li>Protect confidential information shared by employers</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">6. Payment Terms</h3>
            <p>
              VaBunny.com may charge service fees for facilitating connections between employers and workers. All fees will be clearly disclosed before any transaction.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">7. Prohibited Activities</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Posting false or misleading information</li>
              <li>Harassment or discriminatory behavior</li>
              <li>Violation of intellectual property rights</li>
              <li>Any illegal activities or violations of applicable laws</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">8. Limitation of Liability</h3>
            <p>
              VaBunny.com acts as a platform to connect employers and workers. We are not responsible for the actual work performed, payment disputes, or any damages arising from the employment relationship.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">9. Modifications to Terms</h3>
            <p>
              We reserve the right to modify these terms at any time. Users will be notified of significant changes, and continued use of the service constitutes acceptance of the modified terms.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">10. Contact Information</h3>
            <p>
              For questions about these Terms of Service, please contact us at legal@vabunny.com
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

export default TermsOfService;
