import { IconButton, Spinner } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { deleteFile } from "actions/storageActions";
import { queryClient } from "config/ReactQueryClientProvider";
import { getImageUrl } from "utils/supabase/storage";

export default function DropboxImage({
  file
}: {
  file: any
}) {
  const deleteFileMutation = useMutation({
    mutationFn: deleteFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["images"],
      })
    }
  })

  return (
    <div className="relative w-full flex flex-col p-4 border-gray-100 rounded-2xl shadow-md gap-2">
      {/* image */}
      <div>
        <img 
          src={getImageUrl(file.name)}
          className="w-full aspect-square rounded-2xl"
        />
      </div>
      {/* file name */}
      <div>
        <p className="text-sm font-bold">
          {file.name}
        </p>
      </div>
      <div className="absolute top-4 right-4">
        <IconButton
          onClick={() => {
            deleteFileMutation.mutate(file.name)
          }}
          color="red"
        >
          {
            deleteFileMutation.isPending ? (
              <Spinner />
            )
            :
            (
              <i 
                className="fas fa-trash"
              />

            )
          }
        </IconButton>
      </div>
    </div>
  )
}