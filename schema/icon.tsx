import { icons } from "@iconify-json/lucide";
import {
  Box,
  Button,
  Dialog,
  Flex,
  Grid,
  Label,
  Stack,
  Text,
  TextInput,
  Tooltip,
} from "@sanity/ui";
import { useMemo, useState } from "react";
import { defineType, set, unset, type StringInputProps } from "sanity";
import { VList } from "virtua";
import { Icon } from "@iconify/react";
import Fuse from "fuse.js";

export const icon = defineType({
  name: "icon",
  type: "string",
  components: {
    input: IconAutocomplete,
  },
});

function IconAutocomplete({ readOnly, value, onChange }: StringInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const selected = items.find((item) => item.name === value) ?? null;

  const columns = 7;

  const options = useMemo(() => {
    const filtered = query
      ? fuse
          .search(query)
          .toSorted((a, b) => a.score! - b.score!)
          .map((result) => result.item)
      : items;

    return chunk(filtered, columns).map((icons) => ({
      id: crypto.randomUUID(),
      icons,
    }));
  }, [query]);

  return (
    <Box>
      <Button
        icon={value && <Icon icon={value} />}
        mode="ghost"
        text={selected ? selected.title : "Select icon"}
        onClick={() => setIsOpen(true)}
        iconRight={
          value ? (
            <Icon
              icon="lucide:x"
              onClick={(event) => {
                event.stopPropagation();
                onChange(unset());
                setQuery("");
              }}
            />
          ) : (
            <Icon icon="lucide:chevrons-up-down" />
          )
        }
      />
      {isOpen && (
        <Dialog
          id="icon-dialog"
          header="Choose an icon"
          onClose={() => setIsOpen(false)}
          onClickOutside={() => setIsOpen(false)}
          width={1}
        >
          <Box paddingY={2}>
            <Stack marginBottom={3} marginX={4} space={3}>
              <Label htmlFor="icon-query">Search</Label>

              <TextInput
                id="icon-query"
                value={query}
                onChange={(event) => setQuery(event.currentTarget.value)}
              />
            </Stack>

            <VList style={{ height: 480, paddingInline: 20 }}>
              {options.map((option, index) => (
                <Grid
                  key={option.id}
                  columns={columns}
                  gap={2}
                  paddingTop={index === 0 ? 0 : 2}
                >
                  {option.icons.map((icon) => (
                    <Tooltip
                      portal
                      placement="bottom"
                      content={
                        <Box padding={1}>
                          <Text>{icon.name.replace("lucide:", "")}</Text>
                        </Box>
                      }
                    >
                      <Button
                        key={icon.name}
                        icon={
                          <Flex
                            style={{ height: 34 }}
                            justify="center"
                            align="center"
                          >
                            {icon.icon}
                          </Flex>
                        }
                        selected={value === icon.name}
                        mode="ghost"
                        onClick={() => {
                          onChange(set(icon.name));
                          setQuery(icon.title);
                          setIsOpen(false);
                        }}
                      />
                    </Tooltip>
                  ))}
                </Grid>
              ))}
            </VList>
          </Box>
        </Dialog>
      )}
    </Box>
  );
}

const items = Object.keys(icons.icons).map((name) => ({
  name: `lucide:${name}`,
  title: titleCase(name),
  icon: <Icon icon={`lucide:${name}`} height={20} width={20} />,
}));

const fuse = new Fuse(items, {
  keys: ["name", "title"],
  threshold: 0.3,
  isCaseSensitive: false,
  includeScore: true,
});

function chunk<T>(arr: T[], size: number) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function titleCase(str: string) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
