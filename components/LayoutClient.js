"use client";

import { createClient } from "@/libs/supabase/client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Crisp } from "crisp-sdk-web";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import config from "@/config";

// Crisp customer chat support component
const CrispChat = () => {
  const pathname = usePathname();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initCrisp = async () => {
      try {
        const supabase = createClient();
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (config?.crisp?.id) {
          Crisp.configure(config.crisp.id);

          if (user) {
            Crisp.session.setData({ userId: user.id });
          }

          if (
            config.crisp.onlyShowOnRoutes &&
            !config.crisp.onlyShowOnRoutes?.includes(pathname)
          ) {
            Crisp.chat.hide();
            Crisp.chat.onChatClosed(() => {
              Crisp.chat.hide();
            });
          }
        }
      } catch (error) {
        console.error("Error initializing Crisp:", error);
      } finally {
        setIsLoaded(true);
      }
    };

    initCrisp();
  }, [pathname]);

  if (!isLoaded) return null;
  return null;
};

const ClientLayout = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <>
        <NextTopLoader color={config.colors.main} showSpinner={false} />
        {children}
      </>
    );
  }

  return (
    <>
      <NextTopLoader color={config.colors.main} showSpinner={false} />
      {children}
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
      <Tooltip
        id="tooltip"
        className="z-[60] !opacity-100 max-w-sm shadow-lg"
      />
      <CrispChat />
    </>
  );
};

export default ClientLayout;
