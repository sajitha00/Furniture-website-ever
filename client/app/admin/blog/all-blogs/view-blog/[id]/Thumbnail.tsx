import { useState, useEffect } from "react";
import Addimage from "./Addimage.png";
import Image from "next/image";

interface ThumbnailProps {
  onThumbnailUpload: (url: string) => void;
  initialThumbnail?: string;
  isEdit?: boolean;
}

const Thumbnail = ({ onThumbnailUpload, initialThumbnail, isEdit }: ThumbnailProps) => {
  const [thumbnailUrl, setThumbnailUrl] = useState<string>(initialThumbnail || "");

  // Sync state when initialThumbnail prop changes
  useEffect(() => {
    if (initialThumbnail && initialThumbnail !== thumbnailUrl) {
      setThumbnailUrl(initialThumbnail);
    }
    // This effect intentionally syncs prop to state, which is a valid use case
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialThumbnail]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create a local preview URL and pass it upward; no upload
      const localUrl = URL.createObjectURL(file);
      setThumbnailUrl(localUrl);
      onThumbnailUpload(localUrl);
    }
  };

  return (
    <div className="space-y-4">
      {thumbnailUrl && (
        <div className="relative group">
          <Image
            src={thumbnailUrl}
            alt="Thumbnail preview"
            width={400}
            height={300}
            className="w-full max-w-md h-auto rounded-lg shadow-lg border border-gray-200"
            unoptimized
          />
          {!isEdit && (
            <div className="absolute inset-0 bg-black bg-opacity-50 hidden group-hover:flex items-center justify-center rounded-lg">
              <span className="text-white text-sm">Click to change image</span>
            </div>
          )}
        </div>
      )}

      <div className="flex items-center gap-4">
        <label className={`cursor-pointer ${isEdit ? 'opacity-50 cursor-not-allowed' : ''}`}>
          <Image src={Addimage} alt="Add image" className="w-20 h-20 object-cover rounded-lg" />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={isEdit}
            className="hidden"
          />
        </label>

      </div>
    </div>
  );
};

export default Thumbnail;