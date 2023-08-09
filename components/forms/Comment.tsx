"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useOrganization } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { CommentValidation } from "@/lib/validations/thread";
import Image from "next/image";
// import { createThread } from "@/lib/actions/thread.actions";

interface Props {
    threadId: string;
    currentUserId: string;
    currentUserImg: string;
}

const Comment = ({ threadId, currentUserImg, currentUserId }: Props) => {
    const router = useRouter();
    const pathname = usePathname();

    const form = useForm({
        resolver: zodResolver(CommentValidation),
        defaultValues: {
            thread: '',
        },
        });
    
        const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
            //await createThread({
            //    text: values.thread,
            //    author: userId,
            //    communityId: null,
            //    path: pathname,
            //});
        
            router.push("/");
        };

    return (
        <Form {...form}>
            <form 
            onSubmit={form.handleSubmit(onSubmit)} 
            className="comment-form">

                <FormField
                control={form.control}
                name="thread"
                render={({ field }) => (
                <FormItem className="flex items-center gap-3 w-full">
                    <FormLabel>
                        <Image
                            src={currentUserImg}
                            alt="Profile Image"
                            width={48}
                            height={48}
                            className="rounded-full object-cover"
                        />
                    </FormLabel>
                    <FormControl className="border-none bg-transparent">
                        <Input
                        type="text"
                        className="no-focus text-light-1 outline-none"
                        placeholder="Write a comment.."
                        {...field}
                        />
                    </FormControl>
            </FormItem>
                )}
            />

            <Button type='submit' className='comment-form_btn'>Reply</Button>
            </form>
        </Form>
    )
}

export default Comment;