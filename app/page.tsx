import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Playlist } from "@/components/playlist";
import { Suspense } from "react";
import { ArtworkLoading } from "@/components/artwork-loading";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-2 max-w-sm mx-auto">
      <div className="mt-2 w-full">
        <h2 className="text-2xl font-semibold tracking-tight">Your vibes</h2>
        <p className="text-sm text-muted-foreground">
          Your favourite songs. Updated daily.
        </p>
        <div className="flex w-full items-center space-x-2 mt-2">
          <Input type="search" placeholder="Search song..." />
          <Button variant="outline" size="icon">
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
        <Separator className="my-4" />
        <div className="relative">
          <ScrollArea>
            <div className="flex flex-wrap justify-center">
              <Suspense
                fallback={<ArtworkLoading className={"w-[150px] m-2"} />}
              >
                <Playlist />
              </Suspense>
            </div>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
}
