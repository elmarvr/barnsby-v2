import { Icon } from "@iconify/react";
import { Box, Button, Card, Flex, Grid, Label, Stack } from "@sanity/ui";
import { useCallback } from "react";
import {
  ArrayOfObjectsItem,
  ArrayOfPrimitivesItem,
  defineField,
  defineType,
  insert,
  MemberItemError,
  setIfMissing,
  unset,
  type ArrayOfObjectsInputProps,
  type ArraySchemaType,
  type FieldProps,
  type ObjectItemProps,
} from "sanity";

export const localeStringArray = defineType({
  name: "locale-string-array",
  type: "array",
  of: [
    defineField({
      name: "locale-string-field",
      type: "locale-string-field",
    }),
  ],
  components: {
    input: LocaleStringArray,
  },
});

export const localeStringField = defineType({
  name: "locale-string-field",
  type: "object",
  fields: [
    {
      name: "value",
      type: "string",
      components: {
        field: (props) => props.children,
      },
    },
  ],
  components: {
    item: LocaleStringInput,
  },
  preview: {
    select: {
      title: "_key",
      subtitle: "_key",
    },
  },
});

function LocaleStringArray({
  onChange,
  members,
  ...props
}: ArrayOfObjectsInputProps<
  {
    _key: string;
    value: string;
  },
  ArraySchemaType
>) {
  function addLanguage(code: (typeof languages)[number]) {
    const type = { _type: "locale-string-field", _key: code };

    const nextIndex = languages.findIndex((language, index) => {
      return (
        languages.indexOf(code) < index &&
        members.some((member) => member.key === language)
      );
    });

    onChange([
      setIfMissing([]),
      nextIndex < 0
        ? insert([type], "after", [0])
        : insert([type], "before", [nextIndex]),
    ]);
  }

  return (
    <Stack space={3}>
      <Stack space={4}>
        {members.map((member) => {
          if (member.kind === "item") {
            return (
              <ArrayOfObjectsItem key={member.key} member={member} {...props} />
            );
          }

          return <MemberItemError key={member.key} member={member} />;
        })}
      </Stack>

      <Flex gap={2}>
        {languages
          .filter((language) =>
            members.every((member) => member.key !== language)
          )
          .map((language) => (
            <Button
              icon={<Icon icon="lucide:plus" />}
              key={language}
              text={language.toUpperCase()}
              onClick={() => addLanguage(language)}
              mode="bleed"
            />
          ))}
      </Flex>
    </Stack>
  );
}

function LocaleStringInput({
  value,
  inputProps,
  readOnly,
}: ObjectItemProps<{
  _type: string;
  _key: string;
  value: string;
}>) {
  const { onChange } = inputProps;

  const onRemove = useCallback(() => {
    return onChange([unset()]);
  }, [onChange]);

  return (
    <Card>
      <Stack space={2}>
        <Label>{value._key.toUpperCase()}</Label>
        <Flex>
          <Card flex={1}>{inputProps.renderInput(inputProps)}</Card>

          <Card>
            <Button
              icon={<Icon icon="lucide:circle-x" />}
              tone="critical"
              mode="bleed"
              disabled={readOnly}
              onClick={onRemove}
            />
          </Card>
        </Flex>
      </Stack>
    </Card>
  );
}

const languages = ["nl", "en"] as const;
