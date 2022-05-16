import { Avatar } from "@mui/material";
import Image from "next/image";

function Sidebar() {
  return (
    <div className="space-y-2 min-w-max max-w-lg">
      {/* Top */}
      <div className="bg-white dark:bg-[#1D2226] rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-none">
        <div className="relative w-full h-14">
          <Image src="https://rb.gy/i26zak" layout="fill" priority />
        </div>
        <Avatar
          //onClick={signOut}
          src="https://e7.pngegg.com/pngimages/33/802/png-clipart-chuck-norris-chuck-norris-thumbnail.png"
          className="!h-14 !w-14 !border-2 !absolute !top-4 !cursor-pointer"
        />
        <div className="mt-5 py-4 space-x-0.5">
          <h4 className="hover:underline decoration-purple-700 underline-offset-1 cursor-pointer">
            Laurentiu
          </h4>
          <p className="text-black/60 dark:text-white/75 text-sm">
            ghiga-laurentiu@yahoo.com
          </p>
        </div>
        <div className="hidden md:inline text-left dark:text-white/75 text-sm">
          <div className="font-medium sidebarButton space-y-0.5">
            <div className="flex justify-between space-x-2">
              <h4> Who viewed your profile</h4>
              <span className="text-blue-500">321</span>
            </div>

            <div>
              <h4> Views of your posts</h4>
              <span className="text-blue-500">1,892</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
