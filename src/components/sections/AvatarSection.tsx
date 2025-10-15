import Image from "next/image";

export default function AvatarSection() {
  return (
    <div className="flex items-center justify-center col-span-1 md:col-span-3 row-span-2 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden p-4 sm:p-6 md:p-0">
      <Image 
        src="/avatar.jpg" 
        alt="avatar" 
        width={300} 
        height={300}
        className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-[250px] lg:max-w-[300px] h-auto rounded-lg"
        priority
      />
    </div>
  );
}