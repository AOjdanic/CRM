import Question from './assets/question.svg';

export function HelpCenter() {
  return (
    <div className="flex p-2 justify-between items-center self-stretch">
      <div className="flex items-center gap-3 grow shrink-0 basis-0">
        <Question />
        <span className="text-dark-secondary text-sm font-medium leading-normal">
          Help Center
        </span>
      </div>
    </div>
  );
}
