import { Sticker } from "lucide-react";

import { footerLinks } from "../constants";

export function Footer() {
  return (
    <footer className="px-5 py-5 sm:px-10">
      <div className="screen-max-width">
        <div>
          <p className="text-xs font-semibold text-gray">
            More ways to shop:{" "}
            <span className="text-blue underline">Find an Apple Store </span>
            or <span className="text-blue underline">other retailer</span> near
            you
          </p>
          <p className="text-xs font-semibold text-gray">
            Or call 000800-040-19666:{" "}
          </p>
        </div>
        <div className="my-5 h-px w-full bg-neutral-700" />
        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-xs font-semibold text-gray">
            Copyright @2025 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="text-xs font-semibold text-gray">
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center pb-2 pt-5 text-xs font-semibold text-gray">
          <p>Feito por lucas ricardo</p>
          <Sticker className="ml-1 size-5" />
        </div>
      </div>
    </footer>
  );
}
