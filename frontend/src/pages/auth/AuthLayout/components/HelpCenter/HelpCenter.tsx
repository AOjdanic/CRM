import { Link } from 'react-router';
import { QuestionIcon } from '@phosphor-icons/react';

import { uiRoutes } from '../../../../../uiRoutes';

export function HelpCenter() {
  return (
    <Link
      to={uiRoutes.auth.helpCenter}
      className="flex p-2 justify-between items-center self-stretch"
    >
      <div className="flex items-center gap-3 grow shrink-0 basis-0 text-dark-secondary">
        <QuestionIcon />
        <span className="text-sm font-medium leading-normal">Help Center</span>
      </div>
    </Link>
  );
}
