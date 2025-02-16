import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode } from "react";

export type FAQ = {
  qn: string;
  ans: string | ReactNode;
};

export default function CustomAccodion({ FAQs }: { FAQs: FAQ[] }) {
  return (
    <>
      <Accordion type="single" collapsible>
        {FAQs.map((faq, i) => {
          return (
            <AccordionItem key={i} value={`item-${i + 1}`}>
              <AccordionTrigger>{faq.qn}</AccordionTrigger>
              <AccordionContent>{faq.ans}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}
