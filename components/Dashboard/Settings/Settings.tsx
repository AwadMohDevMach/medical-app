import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GeneralSettings from "./GeneralSettings";
import { Component, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Settings() {
  const taps = [
    {
      lable: "General",
      value: "general",
      Component: <GeneralSettings />,
    },
    {
      lable: "Security",
      value: "security",
      Component: <h1>security</h1>,
    },
    {
      lable: "Integrations",
      value: "integrations",
      Component: <h1>integrations</h1>,
    },
    {
      lable: "Support",
      value: "support",
      Component: <h1>support</h1>,
    },
    {
      lable: "Organizatios",
      value: "organizatios",
      Component: <h1>organizatios</h1>,
    },
    {
      lable: "Advanced",
      value: "advanced",
      Component: <h1>advanced</h1>,
    },
  ];
  return (
    <main className="flex min-h-[(clac(100vh_-_theme(spacing.16)))] flex-1 flex-col gap-4  mg:gap-8 ">
      <div
        className="mx-auto grid  w-full max-w-6xl gap-6 items-start md:grid-cols-[180px_1fr]
       lg:grid-cols-[250px_1fr]"
      >
        <div className="">
          <Tabs defaultValue="general" className="md:w-[900px] w-[400px]">
            <div className="flex justify-between items-center">
              <TabsList className="">
                <div className="">
                  {taps.map((item, i) => {
                    return (
                      <TabsTrigger key={i} value={item.value}>
                        {item.lable}
                      </TabsTrigger>
                    );
                  })}
                </div>
              </TabsList>
              <Button>
                <Plus/>
                Add Product</Button>
            </div>
            {taps.map((item, i) => {
              return (
                <TabsContent className="" key={i} value={item.value}>
                  {item.Component}
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>
    </main>
  );
}
