import { useState, useCallback, useRef, FC, ChangeEvent } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Image from "next/image";
import { ImagePlusIcon } from "lucide-react"; // Assuming you're using Heroicons
import {
  ImageComponentProps,
  ImageItem,
  ImageUploaderProps,
} from "@/interfaces";
import { IoCloseOutline } from "react-icons/io5";

// Image item interface

const ImageComponent = ({
  image,
  index,
  moveImage,
  isFirst,
  onClick,
}: ImageComponentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag({
    type: "IMAGE",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "IMAGE",
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        moveImage(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className="relative border-2 border-gray-300 flex items-center justify-center rounded-xl w-20 h-20"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {image.preview && (
        <>
          {isFirst && (
            <div className="absolute bottom-2 text-xs w-full text-center bg-success rounded-xl">
              <span>Cover</span>
            </div>
          )}

          <IoCloseOutline
            onClick={onClick}
            className="absolute cursor-pointer text-lg top-0 right-0 bg-foreground text-background rounded-xl"
          />
          <Image
            src={image.preview}
            alt={`Image ${index}`}
            width={80}
            height={80}
            priority
            className="w-full h-full object-cover rounded-xl"
          />
        </>
      )}
    </div>
  );
};

// Main component handling file uploads, sorting, and rendering the image grid

export const ImageUploader: FC<ImageUploaderProps> = ({ onSortedImages }) => {
  const [images, setImages] = useState<ImageItem[]>(
    Array(5)
      .fill(null)
      .map((_, index) => ({ id: index, file: null, preview: null })) // Start with 10 empty slots
  );

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Function to trigger file input
  const handleAddImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle file input change
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const updatedImages = [...images];
    files.forEach((file) => {
      // Find first empty slot
      const emptyIndex = updatedImages.findIndex((img) => img.file === null);
      if (emptyIndex !== -1) {
        updatedImages[emptyIndex] = {
          id: emptyIndex,
          file,
          preview: URL.createObjectURL(file),
        };
      }
    });
    setImages(updatedImages);
    onSortedImages(updatedImages); // Pass updated images to parent
  };

  // Function to move images by their index
  const moveImage = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const updatedImages = [...images];
      const draggedImage = updatedImages[dragIndex];
      updatedImages.splice(dragIndex, 1); // Remove dragged image
      updatedImages.splice(hoverIndex, 0, draggedImage); // Insert it at the hover index
      setImages(updatedImages); // Update state
      onSortedImages(updatedImages); // Pass updated images to parent
    },
    [images, onSortedImages]
  );

  const cutSpecificImageHandle = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    updatedImages.push({ id: updatedImages.length, file: null, preview: null });
    setImages(updatedImages);
    onSortedImages(updatedImages);
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        className="hidden"
        ref={fileInputRef}
      />
      <div className="hidden sm:flex ">
        <DndProvider backend={HTML5Backend}>
          <div className="grid grid-cols-3 xmd:grid-cols-5  gap-2">
            {images.map((image, index) => (
              <div key={index}>
                {image.file === null ? (
                  // Display PlusIcon if image slot is empty
                  <div
                    onClick={handleAddImageClick}
                    className="border-2 border-gray-300 flex items-center justify-center rounded-xl w-20 h-20 cursor-pointer"
                  >
                    <ImagePlusIcon className="w-7 h-7 text-gray-400" />
                  </div>
                ) : (
                  // Display ImageComponent if image is selected
                  <ImageComponent
                    key={image.id}
                    index={index}
                    image={image}
                    moveImage={moveImage}
                    isFirst={index === 0}
                    onClick={() => cutSpecificImageHandle(index)}
                  />
                )}
              </div>
            ))}
          </div>
        </DndProvider>
      </div>

      <div className="sm:hidden flex items-center gap-2 overflow-auto px-2">
        {images.map((image, index) => (
          <div key={index}>
            {image.file === null ? (
              // Display PlusIcon if image slot is empty
              <div
                onClick={handleAddImageClick}
                className="border-2 border-gray-300 flex items-center justify-center rounded-xl w-16 h-16 cursor-pointer"
              >
                <ImagePlusIcon className="w-5 h-5 text-gray-400" />
              </div>
            ) : (
              // Display ImageComponent if image is selected
              image.preview && (
                <div className="relative rounded-xl w-16 h-16">
                  {index === 0 && (
                    <div className="absolute bottom-2 text-xs w-full text-center bg-success rounded-xl">
                      <span>Cover</span>
                    </div>
                  )}
                  <IoCloseOutline
                    onClick={() => cutSpecificImageHandle(index)}
                    className="absolute cursor-pointer text-lg top-0 right-0 bg-foreground text-background rounded-xl"
                  />
                  <Image
                    src={image.preview}
                    alt={`Image ${index}`}
                    width={80}
                    height={80}
                    priority
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </>
  );
};
