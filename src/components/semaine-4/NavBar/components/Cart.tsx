"use client";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import useCartStore from "@/lib/store/semaine-4/cartStore";
import { Variants, motion } from "framer-motion";
import { PackageCheck, PackageX, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Chair from "../../../../assets/semaine-4/01.jpeg";

const cartVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Cart = () => {
  const cart = useCartStore((s) => s.cart);

  return (
    <HoverCard>
      <HoverCardTrigger>
        <motion.div
          className="flex flex-col items-center gap-1"
          variants={cartVariants}
          initial="hidden"
          animate="visible"
        >
          <ShoppingCart className="size-6" />
          <Badge className="w-8 place-content-center">{cart}</Badge>
        </motion.div>
      </HoverCardTrigger>
      <HoverCardContent className="mr-2 ">
        {cart === 0 ? (
          <div className="flex items-center justify-center gap-4">
            <PackageX className="size-6" />
            <p className="font-semibold">Cart is empty</p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Cart</p>
            <Separator />
            <div className="flex flex-col gap-2">
              <Image
                src={Chair}
                alt={"Chair"}
                width={150}
                height={150}
                className={"rounded border-2 border-teal-600 object-cover"}
                unoptimized
              />
              <div className="flex flex-col gap-2 ">
                <p className="font-semibold text-zinc-400">
                  Meryl Lounge Chair
                </p>
                <div className="flex flex-col gap-1">
                  <p className="text-zinc-400">
                    {cart} x $149.99 (${cart * 149.99})
                  </p>
                  <Separator />
                  <p className="font-semibold">${cart * 149.99}</p>
                </div>
              </div>
              <div className="flex h-12 items-center justify-center gap-2 rounded bg-teal-600 px-10 py-4 transition-all duration-200 ease-in-out hover:scale-110 hover:cursor-pointer">
                <PackageCheck className="size-6" color="white"/>
                <p className="font-semibold text-white">Buy now</p>
              </div>
            </div>
          </div>
        )}
      </HoverCardContent>
    </HoverCard>
  );
};

export default Cart;
