import { useState } from 'react';
import { uiRoutes } from '../../../../../uiRoutes';

import { SidebarItem } from './components/SidebarItem';
import { Logo } from '../../../../public/Layout/components/PublicHeader/components/Logo/Logo';

import { Gear } from './components/icons/Gear';
import { Bell } from './components/icons/Bell';
import { ChartPie } from './components/icons/ChartPie';
import { Envelope } from './components/icons/Envelope';
import { Calendar } from './components/icons/Calendar';
import { NoteBlank } from './components/icons/NoteBlank';
import { Briefcase } from './components/icons/Briefcase';
import { SquaresFour } from './components/icons/SquareFour';
import { DoubleCaret } from './components/icons/DoubleCaret';
import { ChartLineUp } from './components/icons/ChartLineUp';
import { AddressBook } from './components/icons/AddressBook';
import { ClipboardText } from './components/icons/ClipboardText';

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
              icon={<ChartPie />}
            />
            <SidebarItem
              hideTitle={!expanded}
              to={uiRoutes.auth.notifications}
              title="Notifications"
              icon={<Bell />}
            />
            <SidebarItem
              hideTitle={!expanded}
              to={uiRoutes.auth.notes}
              title="Notes"
              icon={<NoteBlank />}
            />
            <SidebarItem
              hideTitle={!expanded}
              to={uiRoutes.auth.tasks}
              title="Tasks"
              icon={<ClipboardText />}
            />
            <SidebarItem
              hideTitle={!expanded}
              to={uiRoutes.auth.emails}
              title="Emails"
              icon={<Envelope />}
            />
            <SidebarItem
              hideTitle={!expanded}
              to={uiRoutes.auth.calendars}
              title="Calendars"
              icon={<Calendar />}
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
              icon={<ChartLineUp />}
            />
            <SidebarItem
              hideTitle={!expanded}
              to={uiRoutes.auth.contacts}
              title="Contacts"
              icon={<AddressBook />}
            />
            <SidebarItem
              hideTitle={!expanded}
              to={uiRoutes.auth.companies}
              title="Companies"
              icon={<Briefcase />}
            />
          </div>

          <div className="flex px-4 flex-col items-start self-stretch">
            <SidebarItem
              hideTitle={!expanded}
              to={uiRoutes.auth.integrations}
              title="Integrations"
              icon={<SquaresFour />}
            />

            <SidebarItem
              hideTitle={!expanded}
              to={uiRoutes.auth.settings}
              title="Settings"
              icon={<Gear />}
            />
          </div>
        </div>
      </aside>
    </section>
  );
}
