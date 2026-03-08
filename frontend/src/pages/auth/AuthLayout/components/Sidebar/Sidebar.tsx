import { useState } from 'react';
import { uiRoutes } from '../../../../../uiRoutes';

import { SidebarItem } from './components/SidebarItem';
import { Logo } from '../../../../public/Layout/components/PublicHeader/components/Logo/Logo';

import { DoubleCaret } from './components/icons/DoubleCaret';

import {
  ChartPieIcon,
  GearIcon,
  BellIcon,
  EnvelopeIcon,
  CalendarIcon,
  NoteBlankIcon,
  BriefcaseIcon,
  SquaresFourIcon,
  ChartLineUpIcon,
  AddressBookIcon,
  ClipboardTextIcon,
} from '@phosphor-icons/react';

export function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <section className={`${expanded ? 'flex flex-1 max-w-62.5' : 'flex'}`}>
      <aside
        className={`flex flex-col ${expanded ? 'w-full' : 'w-fit'} justify-between items-start shrink-0 border-r border-r-solid border-r-border-primary bg-background-secondary transition-[width] duration-150`}
      >
        <div className="flex flex-col items-start gap-5 self-stretch">
          <div
            className={`relative flex h-18 py-5 px-7 items-center gap-2.5 self-stretch border-b border-b-solid border-b-border-primary ${expanded ? '' : 'justify-center'}`}
          >
            {expanded ? <Logo /> : null}
            <div
              onClick={() => setExpanded((exp) => !exp)}
              className={`flex h-7 w-7 justify-center items-center gap-2.5 absolute ${expanded ? 'right-0 translate-x-[50%]' : ''}  rounded-xs bg-background-tertiary cursor-pointer`}
            >
              <DoubleCaret />
            </div>
          </div>

          <div className="flex px-4 pb-5 flex-col items-start gap-1 self-stretch border-b border-b-solid border-b-border-primary">
            <SidebarItem
              hideTitle={!expanded}
              to={uiRoutes.auth.dashboard}
              title="Dashboard"
              icon={<ChartPieIcon />}
            />
            <SidebarItem
              hideTitle={!expanded}
              to={uiRoutes.auth.notifications}
              title="Notifications"
              icon={<BellIcon />}
            />
            <SidebarItem
              hideTitle={!expanded}
              to={uiRoutes.auth.notes}
              title="Notes"
              icon={<NoteBlankIcon />}
            />
            <SidebarItem
              hideTitle={!expanded}
              to={uiRoutes.auth.tasks}
              title="Tasks"
              icon={<ClipboardTextIcon />}
            />
            <SidebarItem
              hideTitle={!expanded}
              to={uiRoutes.auth.emails}
              title="Emails"
              icon={<EnvelopeIcon />}
            />
            <SidebarItem
              hideTitle={!expanded}
              to={uiRoutes.auth.calendars}
              title="Calendars"
              icon={<CalendarIcon />}
            />
          </div>

          <div className="flex pb-5 px-4 flex-col items-start gap-1.25 self-stretch  border-b border-b-solid border-b-border-primary">
            {expanded ? (
              <span className="text-dark-secondary text-xs font-medium leading-[140%]">
                DATABASE
              </span>
            ) : null}

            <SidebarItem
              hideTitle={!expanded}
              to={uiRoutes.auth.analytics}
              title="Analytics"
              icon={<ChartLineUpIcon />}
            />
            <SidebarItem
              hideTitle={!expanded}
              to={uiRoutes.auth.contacts}
              title="Contacts"
              icon={<AddressBookIcon />}
            />
            <SidebarItem
              hideTitle={!expanded}
              to={uiRoutes.auth.companies}
              title="Companies"
              icon={<BriefcaseIcon />}
            />
          </div>

          <div className="flex px-4 flex-col items-start self-stretch">
            <SidebarItem
              hideTitle={!expanded}
              to={uiRoutes.auth.integrations}
              title="Integrations"
              icon={<SquaresFourIcon />}
            />

            <SidebarItem
              hideTitle={!expanded}
              to={uiRoutes.auth.settings}
              title="Settings"
              icon={<GearIcon />}
            />
          </div>
        </div>
      </aside>
    </section>
  );
}
