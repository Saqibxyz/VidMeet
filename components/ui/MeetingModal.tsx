import {
    Dialog,
    DialogContent,

} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";
import { Button } from "./button";


interface MeetingModalProps {
    className?: string,
    title: string,
    isOpen: boolean,
    handleClick?: () => void,
    onClose: () => void,
    buttonText?: string,
    image?: string,
    buttonIcon?: string,
    children?: ReactNode,


}
const MeetingModal = ({ isOpen, className, title, handleClick, onClose, children, buttonText, image, buttonIcon }: MeetingModalProps) => {
    return (
        <Dialog
            open={isOpen}
            onOpenChange={onClose}


        >

            <DialogContent className=" flex w-full max-w-[520px]  flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
                <div className=" flex flex-col gap-6 ">
                    {image && (
                        <div className=" flex justify-center " >
                            <Image src={image} alt="image" width={72} height={72} />

                        </div>
                    )}
                    <h1 className={cn('text-3xl font-bold leading-[42px]', className)}>{title}</h1>
                    {children}
                    <Button className=" bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0" onClick={handleClick}>
                        {buttonIcon &&
                            <Image src={buttonIcon} alt="button icon" width={13} height={13} />
                        }&nbsp;
                        {buttonText || 'Schedule Meeting'}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default MeetingModal