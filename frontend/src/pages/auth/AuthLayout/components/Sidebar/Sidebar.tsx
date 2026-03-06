import { uiRoutes } from '../../../../../uiRoutes';

import { SidebarItem } from './components/SidebarItem';
import { Logo } from '../../../../public/Layout/components/PublicHeader/components/Logo/Logo';

import { ChartPie } from './components/icons/ChartPie';
import { Bell } from './components/icons/Bell';
import { NoteBlank } from './components/icons/NoteBlank';
import { ClipboardText } from './components/icons/ClipboardText';
import { Envelope } from './components/icons/Envelope';
import { Calendar } from './components/icons/Calendar';
import { ChartLineUp } from './components/icons/ChartLineUp';
import { AddressBook } from './components/icons/AddressBook';
import { Briefcase } from './components/icons/Briefcase';
import { SquaresFour } from './components/icons/SquareFour';
import { Gear } from './components/icons/Gear';

export function Sidebar() {
  return (
    <aside className="flex flex-col w-full justify-between items-start shrink-0 border-r border-r-solid border-r-border-primary bg-background-secondary">
      <div className="flex flex-col items-start gap-5 self-stretch">
        <div className="flex h-18 py-5 px-7 items-center gap-2.5 self-stretch border-b border-b-solid border-b-border-primary">
          <Logo />
        </div>

        <div className="flex px-4 pb-5 flex-col items-start gap-1 self-stretch border-b border-b-solid border-b-border-primary">
          <SidebarItem
            to={uiRoutes.auth.dashboard}
            title="Dashboard"
            icon={<ChartPie />}
          />
          <SidebarItem
            to={uiRoutes.auth.notifications}
            title="Notifications"
            icon={<Bell />}
          />
          <SidebarItem
            to={uiRoutes.auth.notes}
            title="Notes"
            icon={<NoteBlank />}
          />
          <SidebarItem
            to={uiRoutes.auth.tasks}
            title="Tasks"
            icon={<ClipboardText />}
          />
          <SidebarItem
            to={uiRoutes.auth.emails}
            title="Emails"
            icon={<Envelope />}
          />
          <SidebarItem
            to={uiRoutes.auth.calendars}
            title="Calendars"
            icon={<Calendar />}
          />
        </div>

        <div className="flex pb-5 px-4 flex-col items-start gap-1.25 self-stretch  border-b border-b-solid border-b-border-primary">
          <span className="text-dark-secondary text-xs font-medium leading-[140%]">
            DATABASE
          </span>

          <SidebarItem
            to={uiRoutes.auth.analytics}
            title="Analytics"
            icon={<ChartLineUp />}
          />
          <SidebarItem
            to={uiRoutes.auth.contacts}
            title="Contacts"
            icon={<AddressBook />}
          />
          <SidebarItem
            to={uiRoutes.auth.companies}
            title="Companies"
            icon={<Briefcase />}
          />
        </div>

        <div className="flex px-4 flex-col items-start self-stretch">
          <SidebarItem
            to={uiRoutes.auth.integrations}
            title="Integrations"
            icon={<SquaresFour />}
          />

          <SidebarItem
            to={uiRoutes.auth.settings}
            title="Settings"
            icon={<Gear />}
          />
        </div>
      </div>
    </aside>
  );
}
