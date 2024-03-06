"use client";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

function page() {
  return (
    <div>
      <LampContainer>
        <motion.h1
          className="mt-2 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl "
          initial={{ opacity: 0.2, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
        >
          Scroll the page <br /> to knows more about us!
        </motion.h1>
      </LampContainer>

      <div className="flex bg-slate-900/[0.8] justify-center p-4">
        <Button >
          <Link href={"/resume"}>View Resume</Link>
        </Button>
        <Button>
          <Link href={"/certificates"}>View Certificates</Link>
        </Button>
      </div>
    </div>
  );
}

export default page;
