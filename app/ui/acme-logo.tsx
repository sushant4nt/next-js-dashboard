import Image from 'next/image';

export default function GQUnitedLogo() {
  return (
    <div className="flex flex-row items-center leading-none">
      <Image
        src="/GQ_United_Logo_Modified.png"
        alt="GQ United CC Logo"
        width={48}
        height={48}
        className="h-12 w-12"
      />
    </div>
  );
}
