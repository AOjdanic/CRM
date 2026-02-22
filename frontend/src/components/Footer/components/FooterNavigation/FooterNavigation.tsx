import { NavigationCategory } from './components/NavigationCategory';
import { NavigationItem } from './components/NavigationItem';

export function FooterNavigation() {
  return (
    <nav className="flex justify-between items-start w-full">
      <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
        <NavigationCategory>Pages</NavigationCategory>

        <div className="flex flex-col items-start gap-4">
          <NavigationItem>About Us</NavigationItem>
          <NavigationItem>Features</NavigationItem>
          <NavigationItem>Product</NavigationItem>
          <NavigationItem>Pricing</NavigationItem>
        </div>
      </div>

      <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
        <NavigationCategory>Company</NavigationCategory>

        <div className="flex flex-col items-start gap-4">
          <NavigationItem>Careers</NavigationItem>
          <NavigationItem>Guide</NavigationItem>
          <NavigationItem>Startup Program</NavigationItem>
        </div>
      </div>

      <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
        <NavigationCategory>Support</NavigationCategory>

        <div className="flex flex-col items-start gap-4">
          <NavigationItem>Help Center</NavigationItem>
          <NavigationItem>Customer Support</NavigationItem>
          <NavigationItem>API Documentation</NavigationItem>
          <NavigationItem>System Status</NavigationItem>
        </div>
      </div>

      <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
        <NavigationCategory>Resources</NavigationCategory>

        <div className="flex flex-col items-start gap-4">
          <NavigationItem>FAQ</NavigationItem>
          <NavigationItem>Blog</NavigationItem>
          <NavigationItem>Privacy Policy</NavigationItem>
          <NavigationItem>Terms of Service</NavigationItem>
        </div>
      </div>
    </nav>
  );
}
