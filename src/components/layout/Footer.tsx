import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Garemit</h3>
            <p className="text-gray-600 text-sm">
              Fast and secure money transfers for the Somali diaspora
            </p>
          </div>



          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/legal/terms"><a className="text-gray-600 hover:text-primary">Terms of Service</a></Link></li>
              <li><Link href="/legal/privacy"><a className="text-gray-600 hover:text-primary">Privacy Policy</a></Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Garemit. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
