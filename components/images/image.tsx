import { bytesArrToBase64 } from "@/lib/bytes-to-base64";

export const Base64Img = ({ ss, url }: { url?: string; ss: number[] }) => {
  return (
    <div className="p-1">
      <img
        alt={`The screenshot for the website: '${url}'.`}
        src={`data:image/png;base64,${ss ? bytesArrToBase64(ss) : undefined}`}
        height={271}
        width={435}
        className="w-full border rounded-md dark:bg-black bg-white"
      />
    </div>
  );
};
