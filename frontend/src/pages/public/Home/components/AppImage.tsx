import crmImage from '../assets/crmImage.png';

export function AppImage() {
  return (
    <div className="flex p-20 pt-0 flex-col items-center gap-2 self-stretch">
      <img className="w-full" src={crmImage} />
    </div>
  );
}
