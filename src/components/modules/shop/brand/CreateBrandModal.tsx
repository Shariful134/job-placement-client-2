/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { useState } from "react";
import { toast } from "sonner";
import ImagePreviewer from "@/components/shared/NMImageUploader/ImagePreviewr";
import NMImageUploader from "@/components/shared/NMImageUploader";
import { createBrand } from "@/service/brand";

const CreateBrandModal = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  const form = useForm();

  const {
    formState: { isSubmitting },
  } = form || {};

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("logo", imageFiles[0] as File);

      const res = await createBrand(formData);
      console.log(res);
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-slate-300 text-black border-2 border-white hover:bg-slate-300 cursor-pointer"
          size="sm"
        >
          Create Brand
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Product Brand</DialogTitle>
        </DialogHeader>

        <div className="flex items-center justify-center">
          {imagePreview?.length > 0 ? (
            <ImagePreviewer
              setImageFiles={setImageFiles}
              imagePreview={imagePreview}
              setImagePreview={setImagePreview}
            />
          ) : (
            <NMImageUploader
              setImageFiles={setImageFiles}
              setImagePreview={setImagePreview}
              label="Upload Logo"
            />
          )}
        </div>

        <Form {...form}>
          <form
            className="flex items-center gap-2"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      value={field.value || ""}
                      className="rounded-sm w-56"
                      placeholder="Name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="bg-slate-300 hover:bg-slate-300 text-black border-2 ms-2 cursor-pointer border-white rounded-sm"
            >
              {isSubmitting ? "Creating...." : "Create"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBrandModal;
