import { uiRoutes } from '../../../../../../../uiRoutes';

import { NavigationItem } from './components/NavigationItem';
import { NavigationCategory } from './components/NavigationCategory';

export function FooterNavigation() {
  return (
    <nav className="flex justify-between items-start w-full">
      <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
        <NavigationCategory>Pages</NavigationCategory>

        <div className="flex flex-col items-start gap-4">
          <NavigationItem to={uiRoutes.public.about}>About Us</NavigationItem>
          <NavigationItem to={uiRoutes.public.features}>
            Features
          </NavigationItem>
          <NavigationItem to={'/product'}>Product</NavigationItem>
          <NavigationItem to={uiRoutes.public.pricing}>Pricing</NavigationItem>
        </div>
      </div>

      <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
        <NavigationCategory>Company</NavigationCategory>

        <div className="flex flex-col items-start gap-4">
          <NavigationItem to="/careers">Careers</NavigationItem>
          <NavigationItem to="/guide">Guide</NavigationItem>
          <NavigationItem to="/startup-programs">
            Startup Program
          </NavigationItem>
        </div>
      </div>

      <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
        <NavigationCategory>Support</NavigationCategory>

        <div className="flex flex-col items-start gap-4">
          <NavigationItem to="/help-center">Help Center</NavigationItem>
          <NavigationItem to="/customer-support">
            Customer Support
          </NavigationItem>
          <NavigationItem to="/api-documentation">
            API Documentation
          </NavigationItem>
          <NavigationItem to="/system-status">System Status</NavigationItem>
        </div>
      </div>

      <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
        <NavigationCategory>Resources</NavigationCategory>

        <div className="flex flex-col items-start gap-4">
          <NavigationItem to="/faq">FAQ</NavigationItem>
          <NavigationItem to={uiRoutes.public.blog}>Blog</NavigationItem>
          <NavigationItem to={'/privacy-policy'}>Privacy Policy</NavigationItem>
          <NavigationItem to="/terms-of-service">
            Terms of Service
          </NavigationItem>
        </div>
      </div>
    </nav>
  );
}
