import { Icon, InlineIcon } from "@iconify/react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function LocaleSelect({
  locales,
  currentLocale,
  className,
}: {
  locales: string[];
  currentLocale: string;
  className?: string;
}) {
  const formatter = new Intl.DisplayNames([currentLocale], {
    type: "language",
  });

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className={`flex items-center gap-x-1 ${className}`}
      >
        {currentLocale.toUpperCase()}
        <Icon className="size-4" icon="lucide:chevron-down" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={4}
          alignOffset={-4}
          align="start"
          className="bg-background shadow-sm border rounded z-10 overflow-hidden p-1"
        >
          {locales.map((locale) => (
            <DropdownMenu.Item
              key={locale}
              className="block rounded relative pl-8 pr-3 min-w-[6rem] text-sm py-1 focus:outline-none focus:bg-foreground/5"
              asChild
            >
              {currentLocale === locale ? (
                <div>
                  <span className="absolute left-2 top-1/2 -translate-y-1/2">
                    <Icon className="size-4 text-primary" icon="lucide:check" />
                  </span>
                  {formatter.of(locale)}
                </div>
              ) : (
                <a href={`/${locale === "nl" ? "" : locale}`}>
                  {formatter.of(locale)}
                </a>
              )}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
