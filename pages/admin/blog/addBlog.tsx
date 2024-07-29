import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ActivitiesData } from "@/utils/activitiesData";

export default function AddBlog() {
  const [loading, setLoading] = useState<boolean>(false);

  const formSchema = z.object({
    name: z.string().min(2, { message: "Blog Title is required" }).trim(),
    imageUrl: z.string().min(2, { message: "Cover Image is required" }).trim(),
    type: z.string().min(2, { message: "Blog Type is required" }).trim(),
    description: z
      .string()
      .min(5, { message: "Description is required" })
      .trim(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      imageUrl: "",
      type: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);

    try {
      const endpoint = "/api/blog";
      const randomValue = Math.random().toString(36).substring(7);
      const slug = `${values.name.split(" ")[0]}_${randomValue}`;
      const submissionResponse = await axios.post(endpoint, {
        slug: slug,
        name: values.name,
        imageUrl: values.imageUrl,
        type: values.type,
        description: values.description,
      });

      toast.success(`Blog Post Sent Successfully!`);
      form.reset();
    } catch (error) {
      console.error("Error sending blog:", error);
      toast.error(
        "An error occurred while sending the blog. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="py-16 flex flex-col gap-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin/blog">Blogs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Add blog</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="bg-white rounded-xl p-8">
        <p className="font-bold">Add New Blog</p>
        <Form {...form}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Blog Title: <span className="text-[red]">*</span>
                </FormLabel>
                <Input type="text" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Blog Description: <span className="text-[red]">*</span>
                </FormLabel>
                <Textarea rows={5} {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Blog Type <span className="text-[red]">*</span>
                </FormLabel>
                <select {...field}>
                  <option value="">Activity Sectors</option>
                  {ActivitiesData.map((item, index) => (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>

                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Blog Cover Photo: <span className="text-[red]">*</span>
                  </FormLabel>
                  <Input type="file" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            className="my-4 text-white font-bold"
            onClick={form.handleSubmit(onSubmit)}
            disabled={loading}
          >
            {loading ? "Loading..." : "Add Blog"}
          </Button>
        </Form>
      </section>
    </main>
  );
}
