import * as React from "react";
import { map } from "nanostores";
import { useStore } from "@nanostores/react";

interface TabsTriggerProps extends React.ComponentProps<"button"> {
  name: string;
  index: number;
}

const TabsTrigger = ({ name, index, onClick, ...props }: TabsTriggerProps) => {
  const { active, onActiveChange } = useTabs(name);

  return (
    <button
      data-active={active === index ? "" : undefined}
      onClick={(event) => {
        onActiveChange(index);
        if (onClick) {
          onClick(event);
        }
      }}
      {...props}
    />
  );
};

interface TabsContentProps extends React.ComponentProps<"div"> {
  name: string;
  index: number;
}

const TabsContent = ({ name, index, hidden, ...props }: TabsContentProps) => {
  const { active } = useTabs(name);

  return <div {...props} hidden={active !== index || hidden} />;
};

function useTabs(name: string) {
  const list = useStore($tabs);

  const active = list[name] ?? 0;

  function onActiveChange(index: number) {
    $tabs.setKey(name, index);
  }

  return {
    list,
    active,
    onActiveChange,
  };
}

const $tabs = map<Record<string, number>>();

export { TabsTrigger, TabsContent };
