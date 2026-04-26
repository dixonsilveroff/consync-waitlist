export default function Footer() {
  return (
    <footer className="bg-concrete-white border-t border-gray-200">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-base text-steel-grey">&copy; {new Date().getFullYear()} ConSync. All rights reserved.</p>
          <div className="flex space-x-6">
            {/* Social media links can be added here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
